import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WorkCard = ({ work }: { work: any }) => {
  return (
    <Link
      href={`/work/${work.slug}`}
      className="flex h-fit w-full flex-col gap-2 lg:w-80"
    >
      <Image
        src={work.images[0]}
        alt="Blog Post Image"
        width={100}
        height={100}
        className="h-full w-full rounded-lg lg:h-[210px] lg:w-[320px]"
      />
      <div className="flex flex-col gap-1">
        <h2 className="font-cormorant_garamond text-2xl">{work.title}</h2>
        <div className="flex flex-wrap gap-2">
          {work.categories.map(
            (category: { title: string; color: string }, index: number) => (
              <div
                className={cn(
                  "flex w-fit flex-col rounded-full px-2 py-1 text-sm",
                  category.color,
                )}
                key={index}
              >
                {category.title}
              </div>
            ),
          )}
        </div>
        <p className="text-gray-400">{work.description.substring(0, 100)}</p>
      </div>
    </Link>
  );
};

export default WorkCard;
