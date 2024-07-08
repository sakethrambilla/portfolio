"use server";

import { revalidatePath } from "next/cache";

import prisma from "@/lib/db";
import { PageProps } from "@/app/work/page";
import WorkCard from "@/app/work/components/WorkCard";
import { PaginationFooter } from "@/app/work/components/Pagination";
import BlogCard from "./blog-card";

const PAGE_SIZE = 6;

const fetchPost = async ({ take = PAGE_SIZE, skip = 0 }) => {
  "use server";
  const results = await prisma.blog.findMany({
    take,
    skip,
    orderBy: {
      createdAt: "asc",
    },
    select: {
      title: true,
      slug: true,
      image: true,
      description: true,
      categories: {
        select: {
          title: true,
          color: true,
        },
      },
    },
  });
  const total = await prisma.blog.count();

  revalidatePath("/");

  return {
    data: results,
    metadata: {
      hasNextPage: skip + take < total,
      totalPages: Math.ceil(total / take),
    },
  };
};

const BlogList = async (props: PageProps) => {
  const pageNumber = Number(props?.searchParams?.page || 1);

  const take = PAGE_SIZE;
  const skip = (pageNumber - 1) * take;

  const { data, metadata } = await fetchPost({ take, skip });

  return (
    <div className="flex w-full flex-col gap-10 py-8 lg:py-24">
      {pageNumber == 1 ? (
        <h2 className="font-cormorant_garamond text-4xl text-primary">
          All Blog Posts
        </h2>
      ) : (
        <></>
      )}
      <div className="grid w-full gap-12 lg:grid-cols-3">
        {data.map((blog, i) => (
          <BlogCard blog={blog} key={i} />
        ))}
      </div>
      <PaginationFooter {...props.searchParams} {...metadata} />
    </div>
  );
};

export default BlogList;
