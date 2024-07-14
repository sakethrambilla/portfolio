import Underline from "@tiptap/extension-underline";
import TextStyle from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Dropcursor from "@tiptap/extension-dropcursor";
import Link from "@tiptap/extension-link";
import FontFamily from "@tiptap/extension-font-family";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Image from "@tiptap/extension-image";
import Youtube from "@tiptap/extension-youtube";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import python from "highlight.js/lib/languages/python";
import { common, createLowlight } from "lowlight";
import StarterKit from "@tiptap/starter-kit";

export const extensions = [
  Underline,
  TextStyle,
  Color,
  Highlight.configure({ multicolor: true }),
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
  Dropcursor,
  Link.configure({
    openOnClick: false,
    autolink: true,
  }),
  FontFamily,
  Subscript,
  Superscript,
  StarterKit,
  Image,
  Youtube.configure({
    controls: false,
    nocookie: true,
    allowFullscreen: true,
    modestBranding: true,
  }),
  CodeBlockLowlight.configure({
    lowlight: createLowlight(common),
  }),
];
