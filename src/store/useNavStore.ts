import { create } from "zustand";

interface NavState {
  isMenuOpen: boolean;
  activeSection: string;
  toggleMenu: () => void;
  closeMenu: () => void;
  setActiveSection: (section: string) => void;
}

export const useNavStore = create<NavState>((set) => ({
  isMenuOpen: false,
  activeSection: "inicio",
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
  setActiveSection: (section) => set({ activeSection: section }),
}));
