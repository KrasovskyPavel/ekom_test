import { create } from "zustand";

interface State {
    name: string;
    setName: (name: string) => void;
}

export const useNameStore = create<State>((set) => ({
    name: "Ваше имя",
    setName: (name: string) => set({ name: name || "Ваше имя" }),
}))