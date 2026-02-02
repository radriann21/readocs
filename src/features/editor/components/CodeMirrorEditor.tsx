import CodeMirror from "@uiw/react-codemirror"
import { markdown, markdownLanguage } from "@codemirror/lang-markdown"
import { languages } from "@codemirror/language-data"
import { useEditorStore } from "@/shared/model/store"

export const CodeMirrorEditor = () => {
  const { documentContent, setDocumentContent } = useEditorStore();

  return (
    <CodeMirror
      style={{
        height: "100%",
        width: "100%",
      }}
      value={documentContent}
      onChange={setDocumentContent}
      extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]}
    />
  )
}