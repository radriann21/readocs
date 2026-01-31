export interface State {
  documentTitle: string;
}

export interface Actions {
  setDocumentTitle: (title: string) => void;
}
