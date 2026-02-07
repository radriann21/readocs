import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { State, Actions } from "./types";
import type { EditorView } from "@uiw/react-codemirror";
import { getSelection } from "@/shared/utils/getSelection";

export const useEditorStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      documentTitle: "example.md",
      documentContent: "# example.md",
      editorView: null as EditorView | null,
      setDocumentTitle: (title: string) => set({ documentTitle: title }),
      setDocumentContent: (content: string) =>
        set({ documentContent: content }),
      setEditorView: (view: EditorView) => set({ editorView: view }),
      setSelectionToBold: () => {
        const sel = getSelection(get().editorView);
        if (!sel) return;
        sel.view.dispatch({
          changes: { from: sel.from, to: sel.to, insert: `**${sel.text}**` },
        });
      },
      setSelectionToItalic: () => {
        const sel = getSelection(get().editorView);
        if (!sel) return;
        sel.view.dispatch({
          changes: { from: sel.from, to: sel.to, insert: `*${sel.text}*` },
        });
      },
      setSelectionToCode: () => {
        const sel = getSelection(get().editorView);
        if (!sel) return;
        sel.view.dispatch({
          changes: { from: sel.from, to: sel.to, insert: `\`${sel.text}\`` },
        });
      },
      setSelectionToHeading: () => {
        const sel = getSelection(get().editorView);
        if (!sel) return;
        sel.view.dispatch({
          changes: { from: sel.from, to: sel.to, insert: `# ${sel.text}` },
        });
      },
      setSelectionToQuote: () => {
        const sel = getSelection(get().editorView);
        if (!sel) return;
        sel.view.dispatch({
          changes: { from: sel.from, to: sel.to, insert: `> ${sel.text}` },
        });
      },
      setSelectionToList: () => {
        const sel = getSelection(get().editorView);
        if (!sel) return;
        sel.view.dispatch({
          changes: { from: sel.from, to: sel.to, insert: `- ${sel.text}` },
        });
      },
      setSelectionToLink: () => {
        const sel = getSelection(get().editorView);
        if (!sel) return;
        sel.view.dispatch({
          changes: { from: sel.from, to: sel.to, insert: `[${sel.text}](url)` },
        });
      },
      handleDocumentDownload: () => {
        const file = new Blob([get().documentContent], {
          type: "text/markdown",
        });
        const url = URL.createObjectURL(file);
        const anchor = document.createElement("a");
        anchor.setAttribute("href", url);
        anchor.setAttribute("download", get().documentTitle);
        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();
        URL.revokeObjectURL(url);
      },
    }),
    {
      name: "editor-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        documentTitle: state.documentTitle,
        documentContent: state.documentContent,
      }),
    },
  ),
);
