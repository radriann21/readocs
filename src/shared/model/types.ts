export interface State {
  documentTitle: string;
  documentContent: string;
}

export interface Actions {
  setDocumentTitle: (title: string) => void;
  setDocumentContent: (content: string) => void;
  handleDocumentDownload: () => void;
}
