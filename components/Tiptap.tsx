"use client";

import { EditorContent } from "@tiptap/react";
import TextEditorButtons from "./TextEditorButtons";

const Tiptap = ({ editor }: any) => {
  return (
    <div className="flex h-full w-full flex-col items-start justify-center gap-4">
      <div className="w-full overflow-hidden rounded-xl">
        <TextEditorButtons editor={editor} />
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Tiptap;
