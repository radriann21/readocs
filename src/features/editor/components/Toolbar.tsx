import { Bold, Italic, Link, Heading, List, Quote, Code } from "lucide-react";

const options = [
  {
    name: "Bold",
    icon: <Bold className="w-3 h-3" />,
  },
  {
    name: "Italic",
    icon: <Italic className="w-3 h-3" />,
  },
  {
    name: "Link",
    icon: <Link className="w-3 h-3" />,
  },
  {
    name: "Heading",
    icon: <Heading className="w-3 h-3" />,
  },
  {
    name: "List",
    icon: <List className="w-3 h-3" />,
  },
  {
    name: "Quote",
    icon: <Quote className="w-3 h-3" />,
  },
  {
    name: "Code",
    icon: <Code className="w-3 h-3" />,
  },
];

export const Toolbar = () => {
  return (
    <div className="w-full flex gap-x-6 bg-[#C3D0DA] px-6 py-1">
      {options.map((option) => (
        <button
          key={option.name}
          className="p-2 rounded-md text-xs bg-transparent text-gray-800 font-semibold border-none outline-0 px-2 flex items-center gap-x-1 cursor-pointer hover:bg-gray-200 transition-colors duration-200"
        >
          {option.icon}
        </button>
      ))}
    </div>
  );
};
