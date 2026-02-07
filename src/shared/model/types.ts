import type { EditorView } from "@uiw/react-codemirror";

export interface State {
  documentTitle: string;
  documentContent: string;
  editorView: EditorView | null;
}

export interface Actions {
  setDocumentTitle: (title: string) => void;
  setDocumentContent: (content: string) => void;
  handleDocumentDownload: () => void;
  setEditorView: (view: EditorView) => void;

  /* Editor Actions */
  setSelectionToBold: () => void;
  setSelectionToItalic: () => void;
  setSelectionToCode: () => void;
  setSelectionToHeading: () => void;
  setSelectionToQuote: () => void;
  setSelectionToList: () => void;
  setSelectionToLink: () => void;
}
