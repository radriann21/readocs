import { useEditorStore } from "@/shared/model/store";

export const EditorHeader = () => {
  const { documentContent } = useEditorStore();

  const words = documentContent
    .replace(/[^a-zA-ZáéíóúñÁÉÍÓÚÑüÜ\s]/g, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const chars = documentContent.length;

  const lines = documentContent.split("\n").length;

  return (
    <div className="flex justify-between items-center px-4 py-2 bg-gray-100 border border-gray-200">
      <h3 className="font-semibold text-gray-600 uppercase">Editor</h3>

      <div className="flex items-center gap-x-2 text-xs">
        <p className="text-gray-600">{words} words</p>
        <div className="h-6 w-px border-r border-gray-400"></div>
        <p className="text-gray-600">{chars} chars</p>
        <div className="h-6 w-px border-r border-gray-400"></div>
        <p className="text-gray-600">{lines} lines</p>
      </div>
    </div>
  );
};
