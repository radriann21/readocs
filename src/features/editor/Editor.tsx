import { Toolbar } from "./components/Toolbar";
import { CodeMirrorEditor } from "./components/CodeMirrorEditor";
import { EditorHeader } from "./components/EditorHeader";

export const Editor = () => {
  return (
    <section className="w-full flex flex-col">
      <EditorHeader />
      <Toolbar />
      <CodeMirrorEditor />
    </section>
  );
};
