import { redirect } from "next/navigation";
import parse from "html-react-parser";
import Image from "next/image";
import prisma from "@/lib/db";
import Navbar from "@/components/Navbar";
import hljs from "highlight.js";
import CodeBlock from "../_components/code-block";

// Component to display a single post
const SinglePost = async ({ params }: { params: any }) => {
  // Fetch post data from the database based on the slug from URL params
  const data = await prisma.blog.findFirst({
    where: {
      slug: params.slug,
    },
  });

  // If no post is found, redirect to the blog page
  if (data === null) {
    redirect("/blog");
  }

  // Render the post content
  return (
    <>
      <Navbar />
      <div className="flex w-full flex-col items-center justify-center gap-4 py-10">
        <h1 className="h-fit w-[90%] text-start font-cormorant_garamond text-5xl leading-relaxed text-primary md:text-[50px] lg:text-[75px] xl:text-[100px]">
          {data!.title}
        </h1>
        <div
          className={`relative h-[700px] w-[90%] overflow-hidden rounded-2xl`}
        >
          <Image
            src={data!.image}
            width={100}
            height={100}
            className="absolute h-full w-full object-cover"
            unoptimized
            alt="cover image"
          />
        </div>
        <div className="pre prose flex w-[90%] flex-col items-start justify-start gap-1 text-wrap px-4 font-redHatDisplay text-gray-300 dark:prose-invert lg:prose-lg xl:prose-xl prose-headings:text-gray-200 prose-h2:my-6 prose-h3:my-4 prose-p:m-0 prose-p:text-white prose-strong:text-gray-100 prose-li:text-gray-200 prose-img:h-[60vh] prose-img:w-fit prose-img:rounded-xl prose-video:rounded-xl lg:w-[80%] lg:px-0">
          <CodeBlock body={data.body} />
        </div>
      </div>
    </>
  );
};

export default SinglePost;
