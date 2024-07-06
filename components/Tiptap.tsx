"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextEditorButtons from "./TextEditorButtons";
import { extensions } from "@/lib/extensions";

const Tiptap = () => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          "border prose bg-white max-w-none border-gray-400 p-4 w-full min-h-[60vh] max-h-[60vh] outline-none overflow-y-auto",
      },
    },
    extensions: extensions,
    content: "<p>Hello World! 🌎️</p>",
  });

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <div className="w-[90vw] lg:w-[60vw]">
        <TextEditorButtons editor={editor} />
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Tiptap;
