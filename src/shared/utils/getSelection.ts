import type { EditorView } from "@uiw/react-codemirror";

export const getSelection = (view: EditorView | null) => {
  if (!view) return null;
  
  const selection = view.state.selection;
  if (selection.main.empty) return null;
  
  const { from, to } = selection.main;
  const text = view.state.doc.sliceString(from, to);
  
  return { view, from, to, text };
};