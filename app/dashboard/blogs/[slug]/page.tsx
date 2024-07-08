import WorkForm from "@/app/dashboard/work/_components/work-form";
import prisma from "@/lib/db";
import { Work } from "@/store/work-store";
import BlogForm from "../_components/blog-form";
import { Blog } from "@/store/blog-store";

const BlogUpdate = async ({ params }: { params: { slug: string } }) => {
  const data = (await prisma.blog.findUnique({
    where: { slug: params.slug },
  })) as Blog;

  return (
    <div className="h-full min-h-[100vh] w-full border-l p-10">
      <BlogForm selectedBlog={data} />
    </div>
  );
};

export default BlogUpdate;
