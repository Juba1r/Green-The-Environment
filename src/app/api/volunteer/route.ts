import { NextResponse } from 'next/server';
import { z } from 'zod';

const volunteerSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  skills: z.string().min(2),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = volunteerSchema.parse(body);

    // In a real app, save to DB (Supabase/Neon) or CMS
    console.log('Volunteer registration:', validatedData);

    return NextResponse.json({ message: 'Registration successful!' }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
