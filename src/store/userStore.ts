import { create } from 'zustand';

interface UserState {
  user: {
    name: string;
    age: number;
    city: string;
    email: string;
  } | null;
  setUser: (user: UserState['user']) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));