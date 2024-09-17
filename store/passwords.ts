import { create } from 'zustand';

interface Password {
  id: string;
  password: string;
}

interface PasswordStore {
  passwords: Password[];
  addPassword: (password: string) => void;
  removePassword: (id: string) => void;
}

export const usePasswordStore = create<PasswordStore>((set) => ({
  passwords: [],
  addPassword: (password) => set((state) => ({
    passwords: [...state.passwords, { id: Math.random().toString(36).substr(2, 9), password }]
  })),
  removePassword: (id) => set((state) => ({
    passwords: state.passwords.filter((password) => password.id !== id)
  })),
}));