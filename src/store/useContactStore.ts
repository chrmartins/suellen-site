import { create } from "zustand";

interface ContactState {
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
  setSubmitting: (value: boolean) => void;
  setSuccess: (value: boolean) => void;
  setError: (value: boolean) => void;
  reset: () => void;
}

export const useContactStore = create<ContactState>((set) => ({
  isSubmitting: false,
  isSuccess: false,
  isError: false,
  setSubmitting: (value) => set({ isSubmitting: value }),
  setSuccess: (value) => set({ isSuccess: value }),
  setError: (value) => set({ isError: value }),
  reset: () => set({ isSubmitting: false, isSuccess: false, isError: false }),
}));
