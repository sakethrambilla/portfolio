import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import TextStyle from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import TextAlign from "@tiptap/extension-text-align";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import Heading from "@tiptap/extension-heading";
import Blockquote from "@tiptap/extension-blockquote";
import HardBreak from "@tiptap/extension-hard-break";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Dropcursor from "@tiptap/extension-dropcursor";
import Link from "@tiptap/extension-link";
import FontFamily from "@tiptap/extension-font-family";
import Strike from "@tiptap/extension-strike";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Image from "@tiptap/extension-image";
import Youtube from "@tiptap/extension-youtube";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import History from "@tiptap/extension-history";
import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import python from "highlight.js/lib/languages/python";
import { common, createLowlight } from "lowlight";

export const extensions = [
  Document,
  Paragraph,
  Text,
  Bold,
  Italic,
  Underline,
  TextStyle,
  Color,
  Highlight.configure({ multicolor: true }),
  Text,
  Heading,
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
  Heading.configure({
    levels: [1, 2, 3],
  }),
  BulletList,
  OrderedList,
  ListItem,
  Blockquote,
  HardBreak,
  Dropcursor,
  HorizontalRule,
  Link.configure({
    openOnClick: false,
    autolink: true,
  }),
  FontFamily,
  Strike,
  Subscript,
  Superscript,
  Image,
  Youtube.configure({
    controls: false,
    nocookie: true,
    allowFullscreen: true,
    modestBranding: true,
  }),
  // ImageResize.configure({}),
  History,
  CodeBlockLowlight.configure({
    lowlight: createLowlight(common),
  }),
];
