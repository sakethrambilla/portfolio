import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { twMerge } from "tailwind-merge";

const FontStyleDropDown = ({ editor }: any) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-xl">Font</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuItem
          onClick={() => editor.chain().focus().setFontFamily("Inter").run()}
          className={twMerge(
            editor.isActive("textStyle", { fontFamily: "Inter" })
              ? "is-active"
              : "",
            "px-4 text-lg",
          )}
        >
          Inter{" "}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            editor
              .chain()
              .focus()
              .setFontFamily("Comic Sans MS, Comic Sans")
              .run()
          }
          className={twMerge(
            editor.isActive("textStyle", { fontFamily: "Inter" })
              ? "is-active"
              : "",
            "px-4 text-lg",
          )}
        >
          Comic Sans Ms
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => editor.chain().focus().setFontFamily("serif").run()}
          className={twMerge(
            editor.isActive("textStyle", { fontFamily: "Inter" })
              ? "is-active"
              : "",
            "px-4 text-lg",
          )}
        >
          Serif
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            editor.chain().focus().setFontFamily("monospace").run()
          }
          className={twMerge(
            editor.isActive("textStyle", { fontFamily: "Inter" })
              ? "is-active"
              : "",
            "px-4 text-lg",
          )}
        >
          Monospace
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FontStyleDropDown;
