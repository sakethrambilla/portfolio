import { cn } from "@/lib/utils";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface WorkCardProps {}

const BlogCard = ({ blog }: { blog: any }) => {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="flex h-full w-full flex-col gap-8"
    >
      <Image
        src={blog.image}
        alt="Blog Post Image"
        width={100}
        height={100}
        className="h-full w-full rounded-lg object-cover lg:h-[400px]"
      />
      <div className="flex flex-col gap-4">
        <div className="flex w-full flex-row items-center justify-between pr-5">
          <h2 className="font-cormorant_garamond text-3xl">{blog.title}</h2>
          <MoveUpRight size={30} />
        </div>
        <div className="flex flex-wrap gap-2">
          {blog.categories.map(
            (category: { title: string; color: string }, index: number) => (
              <div
                className={cn(
                  "flex w-fit flex-col rounded-full px-2 py-1 text-sm opacity-90",
                  category.color,
                )}
                key={index}
              >
                {category.title}
              </div>
            ),
          )}
        </div>
        <p className="text-gray-400">{blog.description.substring(0, 100)}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
