import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { State, Actions } from "./types";

export const useEditorStore = create<State & Actions>()(
  persist(
    (set) => ({
      documentTitle: "example.md",
      documentContent: "# example.md",
      setDocumentTitle: (title: string) => set({ documentTitle: title }),
      setDocumentContent: (content: string) => set({ documentContent: content }),
    }),
    {
      name: "editor-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

