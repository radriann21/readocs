import { Toolbar } from "./components/Toolbar";
import { CodeMirrorEditor } from "./components/CodeMirrorEditor";

export const Editor = () => {
  return (
    <section className="w-full flex flex-col">
      <div className="w-full flex items-center px-4 py-2 bg-gray-100 border border-gray-200">
        <h3 className="font-semibold text-gray-600 uppercase">Editor</h3>
      </div>
     <Toolbar />
     <CodeMirrorEditor />
    </section>
  );
};
