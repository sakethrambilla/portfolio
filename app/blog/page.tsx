import { PageLayout } from "@/layouts/PageLayout";
import RecentBlogs from "./_components/recent-blogs";
import BlogList from "./_components/blog-list";
import { PageProps } from "../work/page";

const BlogPage = (props: PageProps) => {
  return (
    <PageLayout>
      <div className="flex h-full min-h-[100vh] flex-col gap-12 px-8 lg:gap-32 lg:px-24">
        {props.searchParams?.page == "1" ||
        props.searchParams?.page == undefined ? (
          <RecentBlogs />
        ) : (
          <></>
        )}
        <BlogList {...props} />
      </div>
    </PageLayout>
  );
};

export default BlogPage;
