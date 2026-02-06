import { templates } from "@/shared/utils/templates";
import { useEditorStore } from "@/shared/model/store";

export const ChooseTemplateModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const { setDocumentContent } = useEditorStore();

  if (!open) return null;

  const handleSelectTemplate = async (file: string) => {
    const response = await fetch(file);
    const content = await response.text();
    setDocumentContent(content);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 grid place-content-center bg-black/50 p-4 transition-all duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
    >
      <div className="w-2xl max-w-2xl rounded-lg bg-white p-6 shadow-lg transition-all duration-200">
        <div className="flex items-start justify-between">
          <h2
            id="modalTitle"
            className="text-xl font-bold text-gray-900 sm:text-2xl"
          >
            Select a template
          </h2>

          <button
            type="button"
            className="-me-4 -mt-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600 focus:outline-none"
            aria-label="Close"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <div className="mt-4 flex flex-col h-72 overflow-y-auto gap-y-1">
          {templates.map((template) => (
            <button
              key={template.id}
              onClick={() => handleSelectTemplate(template.file)}
              className="flex flex-col items-start px-4 py-3 rounded-md hover:bg-gray-100 transition-colors cursor-pointer text-left"
            >
              <span className="font-semibold text-gray-900">
                {template.name}
              </span>
              <span className="text-sm text-gray-500">
                {template.description}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-3 pt-3 border-t border-gray-200">
          <p className="text-sm text-blue-500">
            {templates.length} templates available
          </p>
        </div>
      </div>
    </div>
  );
};
