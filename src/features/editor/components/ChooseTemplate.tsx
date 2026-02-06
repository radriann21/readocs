import { File } from "lucide-react";
import { ChooseTemplateModal } from "./ChooseTemplateModal";
import { useState } from "react";

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
