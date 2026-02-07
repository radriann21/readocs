import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { useEditorStore } from "@/shared/model/store";

export const CodeMirrorEditor = () => {
  const { documentContent, setDocumentContent, setEditorView } = useEditorStore();

  return (
    <div className="w-full h-full">
      <CodeMirror
        onCreateEditor={(editor) => setEditorView(editor)}
        style={{
          height: "calc(100vh - 12rem)",
          width: "100%",
          overflow: "scroll",
        }}
        value={documentContent}
        onChange={setDocumentContent}
        extensions={[
          markdown({ base: markdownLanguage, codeLanguages: languages }),
        ]}
      />
    </div>
  )
}
