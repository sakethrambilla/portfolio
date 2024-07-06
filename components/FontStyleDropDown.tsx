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
      <DropdownMenuTrigger className="text-[10px]">Font</DropdownMenuTrigger>
      <DropdownMenuContent className="w-10">
        <DropdownMenuItem
          onClick={() => editor.chain().focus().setFontFamily("Inter").run()}
          className={twMerge(
            editor.isActive("textStyle", { fontFamily: "Inter" })
              ? "is-active"
              : "",
            "text-[7px]",
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
            "text-[7px]",
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
            "text-[7px]",
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
            "text-[7px]",
          )}
        >
          Monospace
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FontStyleDropDown;
