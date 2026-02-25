import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface DonationState {
  amount: number;
  frequency: 'one-time' | 'monthly';
  projectName?: string;
  setDonation: (amount: number, frequency: 'one-time' | 'monthly', projectName?: string) => void;
  resetDonation: () => void;
}

export const useDonationStore = create<DonationState>()(
  persist(
    (set) => ({
      amount: 50,
      frequency: 'one-time',
      projectName: undefined,
      setDonation: (amount, frequency, projectName) => set({ amount, frequency, projectName }),
      resetDonation: () => set({ amount: 50, frequency: 'one-time', projectName: undefined }),
    }),
    {
      name: 'gte-donation-storage',
    }
  )
);

interface UIState {
  isSearchOpen: boolean;
  isMobileMenuOpen: boolean;
  toggleSearch: (open?: boolean) => void;
  toggleMobileMenu: (open?: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isSearchOpen: false,
  isMobileMenuOpen: false,
  toggleSearch: (open) => set((state) => ({ isSearchOpen: open ?? !state.isSearchOpen })),
  toggleMobileMenu: (open) => set((state) => ({ isMobileMenuOpen: open ?? !state.isMobileMenuOpen })),
}));
