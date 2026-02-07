import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { State, Actions } from "./types";

export const useEditorStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      documentTitle: "example.md",
      documentContent: "# example.md",
      setDocumentTitle: (title: string) => set({ documentTitle: title }),
      setDocumentContent: (content: string) => set({ documentContent: content }),
      handleDocumentDownload: () => {
        const file = new Blob([get().documentContent], { type: "text/markdown" });
        const url = URL.createObjectURL(file);
        const anchor = document.createElement("a");
        anchor.setAttribute("href", url);
        anchor.setAttribute("download", get().documentTitle);
        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();
        URL.revokeObjectURL(url);
      }
    }),
    {
      name: "editor-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

