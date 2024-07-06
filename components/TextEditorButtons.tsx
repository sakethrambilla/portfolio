"use client";

import { useCallback, useState } from "react";
import {
  GrTextAlignCenter,
  GrTextAlignLeft,
  GrTextAlignRight,
} from "react-icons/gr";
import { LuHeading1, LuHeading2, LuHeading3 } from "react-icons/lu";
import {
  MdFormatBold,
  MdFormatColorText,
  MdFormatIndentDecrease,
  MdFormatIndentIncrease,
  MdFormatItalic,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatQuote,
  MdFormatUnderlined,
  MdImage,
  MdInsertLink,
  MdOutlineHorizontalRule,
  MdOutlineWrapText,
} from "react-icons/md";
import FontStyleDropDown from "./FontStyleDropDown";

import { FaYoutube } from "react-icons/fa";

const TextEditorButtons = ({ editor }: any) => {
  const [textColor, setTextColor] = useState("");
  const [highLightColor, setHighLightColor] = useState("");
  const [link, setLink] = useState(false);
  const [url, setUrl] = useState("");

  const addYoutubeVideo = () => {
    const url = prompt("Enter YouTube URL");

    if (url) {
      editor.commands.setYoutubeVideo({
        src: url,
        // width: Math.max(320, parseInt(widthRef.current.value, 10)) || 640,
        // height: Math.max(180, parseInt(heightRef.current.value, 10)) || 480,
      });
    }
  };

  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  const addLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  if (!editor) {
    return null;
  }
  return (
    <div className="flex h-fit w-full items-center justify-start gap-1 bg-gray-700 px-4 py-2 text-white">
      {/* Bold , Italic and Underline */}
      <div className="flex h-full w-fit flex-row items-center">
        {/* Bold */}
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={`${
            editor.isActive("bold") ? "bg-gray-800" : ""
          } flex items-center justify-center rounded-[2px] p-1 text-3xl`}
        >
          <MdFormatBold size={15} />
        </button>

        {/* Italic */}
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`${
            editor.isActive("italic") ? "bg-gray-800" : ""
          } flex items-center justify-center p-1 text-3xl`}
        >
          <MdFormatItalic size={15} />
        </button>

        {/* Underline */}
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`${
            editor.isActive("underline") ? "bg-gray-800" : ""
          } flex items-center justify-center rounded-[2px] p-1 text-3xl`}
        >
          <MdFormatUnderlined size={15} />
        </button>
      </div>

      {/* Text color and HighLight Color */}
      <div className="flex h-full w-fit flex-row items-center">
        {/* Text Color */}
        <input
          type="color"
          style={{
            WebkitAppearance: "none",
            appearance: "none",
            MozAppearance: "none",
            background: "none",
            cursor: "pointer",
          }}
          onChange={(event) => {
            setTextColor(event.target.value);
            editor.chain().focus().setColor(event.target.value).run();
          }}
          value={textColor}
          data-testid="setColor"
          className="h-4 w-6 cursor-pointer"
        />

        {/* Highlight Color */}
        <input
          type="color"
          style={{
            WebkitAppearance: "none",
            appearance: "none",
            MozAppearance: "none",
            background: "none",
            cursor: "pointer",
          }}
          onChange={(event) => {
            setHighLightColor(event.target.value);
            editor
              .chain()
              .focus()
              .setHighlight({ color: event.target.value })
              .run();
          }}
          value={textColor}
          data-testid="setColor"
          className="h-4 w-6 cursor-pointer"
        />
      </div>

      {/* Text Alignment */}
      <div className="flex flex-row items-center">
        {/* Left Align */}
        <button
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={`${
            editor.isActive({ textAlign: "left" }) ? "bg-gray-800" : ""
          } flex items-center justify-center rounded-[2px] p-1 text-3xl`}
        >
          <GrTextAlignLeft size={15} />
        </button>

        {/* Center Align  */}
        <button
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={`${
            editor.isActive({ textAlign: "center" }) ? "bg-gray-800" : ""
          } flex items-center justify-center rounded-[2px] p-1 text-3xl`}
        >
          <GrTextAlignCenter size={15} />
        </button>

        {/* Right Align */}
        <button
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={`${
            editor.isActive({ textAlign: "right" }) ? "bg-gray-800" : ""
          } flex items-center justify-center rounded-[2px] p-1 text-3xl`}
        >
          <GrTextAlignRight size={15} />
        </button>
      </div>

      {/* Heading Level */}
      <div className="flex flex-row items-center">
        {/* Heading 1 */}
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`${
            editor.isActive("heading", { level: 1 })
              ? "bg-gray-800 text-white"
              : ""
          } flex items-center justify-center rounded-[2px] p-1 text-3xl`}
        >
          <LuHeading1 size={15} />
        </button>

        {/* Heading 2 */}
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`${
            editor.isActive("heading", { level: 2 })
              ? "bg-gray-800 text-white"
              : ""
          } flex items-center justify-center rounded-[2px] p-1 text-3xl`}
        >
          <LuHeading2 size={15} />
        </button>

        {/* Heading 3 */}
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={`${
            editor.isActive("heading", { level: 3 })
              ? "bg-gray-800 text-white"
              : ""
          } flex items-center justify-center rounded-[2px] p-1 text-3xl`}
        >
          <LuHeading3 size={15} />
        </button>
      </div>

      {/* List  */}
      <div className="flex flex-row items-center">
        {/* Unordered List */}
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`${
            editor.isActive("bulletList") ? "bg-gray-800 text-white" : ""
          } flex items-center justify-center rounded-[2px] p-1 text-3xl`}
        >
          <MdFormatListBulleted size={15} />
        </button>

        {/* Ordered List */}
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`${
            editor.isActive("orderedList") ? "bg-gray-800 text-white" : ""
          } flex items-center justify-center rounded-[2px] p-1 text-3xl`}
        >
          <MdFormatListNumbered size={15} />
        </button>

        {/* Indent Increase */}
        <button
          onClick={() => editor.chain().focus().sinkListItem("listItem").run()}
          disabled={!editor.can().sinkListItem("listItem")}
          className={`${
            editor.isActive("sinkList", { level: 3 })
              ? "bg-gray-800 text-white"
              : ""
          } flex items-center justify-center rounded-[2px] p-1 text-3xl`}
        >
          <MdFormatIndentIncrease size={15} />
        </button>

        {/* Indent Decrease */}
        <button
          onClick={() => editor.chain().focus().liftListItem("listItem").run()}
          disabled={!editor.can().liftListItem("listItem")}
          className={`${
            editor.isActive("liftList", { level: 3 })
              ? "bg-gray-800 text-white"
              : ""
          } flex items-center justify-center rounded-[2px] p-1 text-3xl`}
        >
          <MdFormatIndentDecrease size={15} />
        </button>
      </div>

      {/* Block, Hard Brake, Horizontal Line */}
      <div className="flex flex-row items-center">
        {/* Block or quote */}
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`${
            editor.isActive("blockquote") ? "bg-gray-800 text-white" : ""
          } flex items-center justify-center rounded-[2px] p-1 text-3xl`}
        >
          <MdFormatQuote size={15} />
        </button>

        {/* Hard Brake */}
        <button
          onClick={() => editor.chain().focus().setHardBreak().run()}
          className={`flex items-center justify-center rounded-[2px] p-1 text-3xl`}
        >
          <MdOutlineWrapText size={15} />
        </button>

        {/* Horizontal Line */}
        <button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className={`flex items-center justify-center rounded-[2px] p-1 text-3xl`}
        >
          <MdOutlineHorizontalRule size={15} />
        </button>
      </div>

      <FontStyleDropDown editor={editor} />

      {/* Image, Link and Youtube */}
      <div className="flex flex-row items-center">
        <button
          onClick={addImage}
          className={`flex items-center justify-center rounded-[2px] p-1 text-3xl`}
        >
          <MdImage size={15} />
        </button>
        <button
          onClick={addLink}
          className={`${
            editor.isActive("link") ? "bg-gray-800 text-white" : ""
          } flex items-center justify-center rounded-[2px] p-1 text-3xl`}
        >
          <MdInsertLink size={15} />
        </button>
        <button
          onClick={addYoutubeVideo}
          className={`flex items-center justify-center rounded-[2px] p-1 text-3xl`}
        >
          <FaYoutube size={15} />
        </button>
      </div>
    </div>
  );
};

export default TextEditorButtons;
