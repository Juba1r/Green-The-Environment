import { NextResponse } from 'next/server';
import { z } from 'zod';
import { getPaymentService } from '@/lib/payments/service';

const donateSchema = z.object({
  amount: z.number().min(5),
  frequency: z.enum(['one-time', 'monthly']),
  email: z.string().email(),
  projectName: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = donateSchema.parse(body);

    // Determine provider based on user location or currency (defaulting to Stripe for this demo)
    const paymentService = getPaymentService('stripe');

    const intent = await paymentService.createIntent({
      amount: validatedData.amount,
      currency: 'USD',
      donorEmail: validatedData.email,
      metadata: {
        frequency: validatedData.frequency,
        project: validatedData.projectName || 'General Fund',
      },
    });

    return NextResponse.json({ url: intent.url }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
