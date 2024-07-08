import WorkForm from "@/app/dashboard/work/_components/work-form";
import { initalWork } from "@/store/work-store";
import BlogForm from "../_components/blog-form";
import { initialBlog } from "@/store/blog-store";

const DashboardWork = () => {
  return (
    <div className="h-full min-h-[100vh] w-full border-l p-10">
      <BlogForm selectedBlog={initialBlog} />
    </div>
  );
};

export default DashboardWork;
