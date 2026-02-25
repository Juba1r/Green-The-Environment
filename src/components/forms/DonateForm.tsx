'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useDonationStore } from '@/store/useStore';

const donateSchema = z.object({
  amount: z.number().min(5, { message: 'Minimum donation is $5' }),
  frequency: z.enum(['one-time', 'monthly']),
  firstName: z.string().min(2, { message: 'First name is required' }),
  lastName: z.string().min(2, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Valid email is required' }),
  projectName: z.string().optional(),
});

type DonateValues = z.infer<typeof donateSchema>;

const PRESET_AMOUNTS = [10, 25, 50, 100, 250];

export function DonateForm() {
  const { amount: storeAmount, frequency: storeFrequency, projectName: storeProjectName } = useDonationStore();
  const [isProcessing, setIsProcessing] = useState(false);
  const [customAmount, setCustomAmount] = useState<string>(PRESET_AMOUNTS.includes(storeAmount) ? '' : storeAmount.toString());

  const form = useForm<DonateValues>({
    resolver: zodResolver(donateSchema),
    defaultValues: {
      amount: storeAmount,
      frequency: storeFrequency,
      firstName: '',
      lastName: '',
      email: '',
      projectName: storeProjectName,
    },
  });

  const { watch, setValue, register, handleSubmit, formState: { errors } } = form;
  const currentAmount = watch('amount');
  const currentFrequency = watch('frequency');

  const onSubmit = async (data: DonateValues) => {
    setIsProcessing(true);
    try {
      const response = await fetch('/api/donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.url) {
        // Redirect to Stripe/Payment URL
        window.location.href = result.url;
      } else {
        throw new Error(result.error || 'Failed to initiate payment');
      }
    } catch (err) {
      console.error(err);
      alert('Error initiating donation. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCustomAmount = (val: string) => {
    setCustomAmount(val);
    const parsed = parseInt(val, 10);
    if (!isNaN(parsed) && parsed > 0) {
      setValue('amount', parsed, { shouldValidate: true });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 text-foreground">
      {/* Frequency Toggle */}
      <div className="flex bg-muted p-1 rounded-xl w-full max-w-sm mx-auto shadow-inner">
        <button
          type="button"
          className={`flex-1 py-3 text-sm font-semibold rounded-lg transition-all ${
            currentFrequency === 'one-time' ? 'bg-white shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'
          }`}
          onClick={() => setValue('frequency', 'one-time')}
        >
          Give Once
        </button>
        <button
          type="button"
          className={`flex-1 py-3 text-sm font-semibold rounded-lg transition-all ${
            currentFrequency === 'monthly' ? 'bg-white shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'
          }`}
          onClick={() => setValue('frequency', 'monthly')}
        >
          Monthly
        </button>
      </div>

      {/* Amounts */}
      <div className="space-y-4">
        <Label className="text-lg font-heading">Choose an Amount</Label>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
          {PRESET_AMOUNTS.map((amt) => (
            <button
              key={amt}
              type="button"
              className={`py-4 rounded-2xl border-2 font-bold text-lg transition-all ${
                currentAmount === amt && customAmount === ''
                  ? 'border-primary bg-primary/10 text-primary scale-105 shadow-sm'
                  : 'border-border bg-card hover:border-primary/50 text-foreground'
              }`}
              onClick={() => {
                setCustomAmount('');
                setValue('amount', amt, { shouldValidate: true });
              }}
            >
              ${amt}
            </button>
          ))}
        </div>
        
        <div className="relative mt-4">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold text-lg">$</span>
          <Input 
            placeholder="Custom Amount" 
            className="pl-8 py-6 text-lg border-2 rounded-2xl focus-visible:ring-primary focus-visible:ring-offset-2 transition-all"
            value={customAmount}
            onChange={(e) => handleCustomAmount(e.target.value)}
          />
        </div>
        {errors.amount && <p className="text-destructive text-sm mt-1">{errors.amount.message}</p>}
      </div>

      <hr className="border-border" />

      {/* Personal Info */}
      <div className="space-y-6">
        <h3 className="text-xl font-heading font-semibold">Your Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>First Name</Label>
            <Input {...register('firstName')} className="py-6 rounded-xl border-2" placeholder="Jane" />
            {errors.firstName && <p className="text-destructive text-sm">{errors.firstName.message}</p>}
          </div>
          <div className="space-y-2">
            <Label>Last Name</Label>
            <Input {...register('lastName')} className="py-6 rounded-xl border-2" placeholder="Doe" />
            {errors.lastName && <p className="text-destructive text-sm">{errors.lastName.message}</p>}
          </div>
        </div>
        <div className="space-y-2">
          <Label>Email</Label>
          <Input {...register('email')} type="email" className="py-6 rounded-xl border-2" placeholder="jane@example.com" />
          {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
        </div>
      </div>

      {/* Submit */}
      <Button 
        type="submit" 
        className="w-full h-16 rounded-2xl text-xl font-bold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/25 transition-all active:scale-[0.98]"
        disabled={isProcessing}
      >
        {isProcessing ? 'Processing Securely...' : `Donate $${currentAmount || 0} ${currentFrequency === 'monthly' ? 'Monthly' : 'Now'}`}
      </Button>

      <div className="text-center text-xs text-muted-foreground max-w-sm mx-auto mt-4 space-y-2">
        <p>100% of your donation is secure and encrypted via SSL. You will receive an automated tax receipt instantly.</p>
        <p>Powered by Stripe & SSLCommerz</p>
      </div>
    </form>
  );
}
