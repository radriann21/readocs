import rehypeStarryNight from "rehype-starry-night";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import { MarkdownHooks } from "react-markdown";
import { useEditorStore } from "@/shared/model/store";

export const Preview = () => {
  const { documentContent } = useEditorStore();

  return (
    <section className="w-full flex flex-col">
      <div className="flex items-center px-4 py-2 bg-gray-100 border border-gray-200">
        <h3 className="font-semibold text-gray-600 uppercase">Preview</h3>
      </div>
      <div className="w-full px-8 py-4 prose max-w-none overflow-y-scroll h-[calc(100vh-12rem)]">
        <MarkdownHooks
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeStarryNight, rehypeRaw, rehypeSanitize]}
          children={documentContent}
        />
      </div>
    </section>
  );
};
