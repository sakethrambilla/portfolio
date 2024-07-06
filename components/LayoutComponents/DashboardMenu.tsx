import {
  BookOpen,
  Briefcase,
  FileText,
  Image,
  LayoutDashboard,
} from "lucide-react";
import Link from "next/link";

const DashboardMenu = ({}) => {
  return (
    <div className={`flex h-full min-h-[92vh] w-fit flex-col gap-5 px-6 py-12`}>
      <Link href={"/dashboard"}>
        <div className="flex flex-row items-center gap-2">
          <LayoutDashboard size={25} /> Dashboard
        </div>
      </Link>

      <Link href={"/dashboard/work"}>
        <div className="flex flex-row items-center gap-2">
          <Briefcase size={25} /> Work
        </div>
      </Link>

      <Link href={"/dashboard/posts"}>
        <div className="flex flex-row items-center gap-2">
          <FileText size={25} /> Posts
        </div>
      </Link>
      <Link href={"/dashboard/gallery"}>
        <div className="flex flex-row items-center gap-2">
          <Image size={25} /> Gallery
        </div>
      </Link>

      <Link href={"/dashboard/tutorials"}>
        <div className="flex flex-row items-center gap-2">
          <BookOpen size={25} /> Tutorial
        </div>
      </Link>
    </div>
  );
};

export default DashboardMenu;
