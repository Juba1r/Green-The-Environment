'use client';

import { useDonationStore } from '@/store/useStore';
import { useRouter } from 'next/navigation';

export function useDonate() {
  const router = useRouter();
  const setDonation = useDonationStore((state) => state.setDonation);

  const donate = (amount: number, frequency: 'one-time' | 'monthly' = 'one-time', projectName?: string) => {
    setDonation(amount, frequency, projectName);
    router.push('/donate');
  };

  return { donate };
}
