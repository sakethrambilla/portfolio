import { cn } from "@/lib/utils";
import {
  Briefcase,
  FileText,
  Info,
  Layers,
  AtSign,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";

const Menu = ({ color }: { color: string }) => {
  return (
    <div
      className={`flex h-full min-h-[100vh] w-fit flex-col justify-between font-redHatDisplay`}
    >
      <div className="sticky top-0 flex w-full flex-col gap-5 px-4 py-16 lg:px-6 lg:text-lg xl:px-8">
        <Link href={"/"}>
          <div
            className={cn(
              `group flex w-full flex-row items-center gap-4 transition-all duration-500`,
              color,
            )}
          >
            <UserRound
              className={cn(
                `flex rounded-lg border p-1 transition-all duration-500 group-hover:scale-110`,
                color,
              )}
              size={30}
            />
            <p className="hidden lg:flex">Home</p>
          </div>
        </Link>
        <Link href={"/about"}>
          <div
            className={cn(
              `group flex w-full flex-row items-center gap-4 transition-all duration-500`,
              color,
            )}
          >
            <Info
              className={cn(
                `flex rounded-lg border p-1 transition-all duration-500 group-hover:scale-110`,
                color,
              )}
              size={30}
            />
            <p className="hidden lg:flex">About Me</p>
          </div>
        </Link>
        <Link href={"/mytechstack"}>
          <div
            className={cn(
              `group flex w-full flex-row items-center gap-4 transition-all duration-500`,
              color,
            )}
          >
            <Layers
              className={cn(
                `flex rounded-lg border p-1 transition-all duration-500 group-hover:scale-110`,
                color,
              )}
              size={30}
            />
            <p className="hidden lg:flex">My Stack</p>
          </div>
        </Link>
        <Link href={"/work"}>
          <div
            className={cn(
              `group flex w-full flex-row items-center gap-4 transition-all duration-500`,
              color,
            )}
          >
            <Briefcase
              className={cn(
                `flex rounded-lg border p-1 transition-all duration-500 group-hover:scale-110`,
                color,
              )}
              size={30}
            />
            <p className="hidden lg:flex">Work</p>
          </div>
        </Link>
        {/* <Link href={"/tutorials"}>
          <div
            className={cn(
              `group flex w-full flex-row items-center gap-4 transition-all duration-500`,
              color,
            )}
          >
            <BookOpen
              className={cn(
                `flex rounded-lg border p-1 transition-all duration-500 group-hover:scale-110`,
                color,
              )}
              size={30}
            />
            Tutorials
          </div>
        </Link> */}
        <Link href={"/blog"}>
          <div
            className={cn(
              `group flex w-full flex-row items-center gap-4 transition-all duration-500`,
              color,
            )}
          >
            <FileText
              className={cn(
                `flex rounded-lg border p-1 transition-all duration-500 group-hover:scale-110`,
                color,
              )}
              size={30}
            />
            <p className="hidden lg:flex">Blog</p>
          </div>
        </Link>
        <Link href={"/contact"}>
          <div
            className={cn(
              `group flex w-full flex-row items-center gap-4 transition-all duration-500 group-hover:scale-110`,
              color,
            )}
          >
            <AtSign
              className={cn(
                `flex rounded-lg border p-1 transition-all duration-500 group-hover:scale-110`,
                color,
              )}
              size={30}
            />
            <p className="hidden lg:flex">Contact Me</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
