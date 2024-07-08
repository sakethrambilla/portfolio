import {
  BookOpen,
  Briefcase,
  FileText,
  Image,
  LayoutDashboard,
  Package2Icon,
} from "lucide-react";
import Link from "next/link";

const DashboardMenu = ({}) => {
  return (
    <div
      className={`sticky top-0 flex h-full min-h-[100vh] w-fit flex-col gap-8 p-6`}
    >
      <div className="flex flex-row gap-4 text-xl text-primary">
        <Package2Icon size={30} /> CMS
      </div>
      <div className="item-start flex flex-col gap-5 px-2">
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

        <Link href={"/dashboard/blogs"}>
          <div className="flex flex-row items-center gap-2">
            <FileText size={25} /> Blogs
          </div>
        </Link>
        <Link href={"/dashboard/gallery"}>
          <div className="flex flex-row items-center gap-2">
            <Image size={25} /> Gallery
          </div>
        </Link>

        {/* <Link href={"/dashboard/tutorials"}>
          <div className="flex flex-row items-center gap-2">
            <BookOpen size={25} /> Tutorial
          </div>
        </Link> */}
      </div>
    </div>
  );
};

export default DashboardMenu;
