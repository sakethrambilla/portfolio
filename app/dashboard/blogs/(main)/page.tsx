import { Button } from "@/components/ui/button";
import BlogTable from "../_components/blog-table";
import BlogCategoryTable from "../_components/blog-category-table";
import Link from "next/link";

const Blogs = () => {
  return (
    <div className="relative flex h-full min-h-[100vh] flex-col gap-14 border-l-2">
      <div className="flex h-fit w-full items-center justify-between border-b-2 p-4">
        <h4 className="text-xl">Blogs</h4>
        <Link href={"/dashboard/blogs/new"}>
          <Button className="rounded text-lg">New Blog</Button>
        </Link>
      </div>

      <BlogTable />
      <BlogCategoryTable />
    </div>
  );
};

export default Blogs;
