import { lazy } from "react";
import { File } from "lucide-react";
import { useState } from "react";

const ChooseTemplateModal = lazy(() =>
  import("./ChooseTemplateModal").then((mod) => ({
    default: mod.ChooseTemplateModal,
  })),
);

export const ChooseTemplate = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-12 h-12 rounded-full p-4 bg-violet-500 absolute bottom-0 right-10 flex items-center justify-center cursor-pointer"
      >
        <File className="text-white" />
      </button>
      <ChooseTemplateModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};
