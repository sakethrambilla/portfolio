"use server";

import { revalidatePath } from "next/cache";
import { PageProps } from "../page";

import prisma from "@/lib/db";
import WorkCard from "./WorkCard";
import { PaginationFooter } from "./Pagination";

const PAGE_SIZE = 10;

const fetchPost = async ({ take = PAGE_SIZE, skip = 0 }) => {
  "use server";
  const results = await prisma.work.findMany({
    take,
    skip,
    orderBy: {
      createdAt: "asc",
    },
    select: {
      title: true,
      slug: true,
      images: true,
      description: true,
      categories: {
        select: {
          name: true,
          color: true,
        },
      },
    },
  });
  const total = await prisma.work.count();

  revalidatePath("/");

  return {
    data: results,
    metadata: {
      hasNextPage: skip + take < total,
      totalPages: Math.ceil(total / take),
    },
  };
};

const WorkList = async (props: PageProps) => {
  const pageNumber = Number(props?.searchParams?.page || 1);

  const take = PAGE_SIZE;
  const skip = (pageNumber - 1) * take;

  const { data, metadata } = await fetchPost({ take, skip });

  return (
    <div className="flex w-full flex-col gap-10">
      <div className="flex w-full flex-wrap gap-4">
        {data.map((work, i) => (
          <WorkCard work={work} key={i} />
        ))}
      </div>
      <PaginationFooter {...props.searchParams} {...metadata} />
    </div>
  );
};

export default WorkList;
