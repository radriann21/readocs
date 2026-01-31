import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { State, Actions } from "./types";

export const useEditorStore = create<State & Actions>()(
  persist(
    (set) => ({
      documentTitle: "example.md",
      setDocumentTitle: (title: string) => set({ documentTitle: title }),
    }),
    {
      name: "editor-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

