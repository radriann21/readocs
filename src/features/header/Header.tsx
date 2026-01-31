import { Download } from "lucide-react";
import { useEditorStore } from "@/shared/model/store";

export const Header = () => {
  const documentTitle = useEditorStore((state) => state.documentTitle);
  const setDocumentTitle = useEditorStore((state) => state.setDocumentTitle);

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 shadow-md">
      <div>
        <h1 className="uppercase tracking-wider italic font-semibold text-xl">
          Markdown
        </h1>
      </div>

      <div className="flex items-center gap-x-4">
        <input
          value={documentTitle}
          onChange={(e) => setDocumentTitle(e.target.value)}
          className="border p-2 rounded-md border-gray-300 text-xs bg-gray-50 outline-none transition-all duration-300 ease-in-out focus:border-blue-300 focus:bg-white focus:shadow-md focus:ring-2 focus:ring-blue-100"
          placeholder="example.md"
        />
        <button className="p-2 rounded-md text-xs bg-blue-400 text-white font-semibold border-none outline-0 px-4 flex items-center gap-x-1 cursor-pointer hover:bg-blue-500 transition-colors duration-200">
          Download
          <Download className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};
