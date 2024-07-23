import prisma from "@/lib/db";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const RecentBlogs = async () => {
  const data = await prisma.blog.findMany({
    take: 4,
    orderBy: { createdAt: "desc" },

    select: {
      title: true,
      slug: true,
      image: true,
      published: true,
      description: true,
      categories: {
        select: {
          title: true,
          color: true,
        },
      },
    },
  });
  // console.log(data);
  if (!data[0]) {
    return <></>;
  }

  return (
    <div className="flex flex-col gap-8 py-10">
      <h1 className="w-full text-start font-cormorant_garamond text-4xl text-primary">
        Recent Blogs
      </h1>

      {/* First Three  */}
      <div className="h-fullw-full flex flex-col items-start justify-center gap-8 lg:flex-row lg:gap-12 xl:h-[60vh]">
        {/*  First Blog*/}
        <Link href={`/blog/${data[0].slug}`} className="h-full lg:w-1/2">
          <div className="flex h-full w-full flex-col items-start justify-start gap-12">
            <Image
              src={data[0].image}
              alt="Blog Post Image"
              width={100}
              height={100}
              className="h-2/3 w-full rounded object-cover object-center"
            />
            <div className="flex h-1/3 flex-col items-start justify-start gap-8">
              <h2 className="text-xl font-bold lg:text-3xl">{data[0].title}</h2>
              <p className="text-lg text-secondary-foreground">
                {data[1].description.substring(1, 150)}
              </p>
              <div className="flex flex-wrap gap-2">
                {data[0].categories.map((category, index) => (
                  <div
                    className={cn(
                      category.color,
                      "rounded-full p-2 text-sm opacity-90",
                    )}
                    key={index}
                  >
                    {category.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Link>
        <div className="flex h-full flex-col items-start justify-start gap-8 lg:w-1/2">
          <Link href={`/blog/${data[0].slug}`} className="h-1/3 w-full">
            <div className="flex h-full w-full flex-col items-start justify-start gap-2 lg:flex-row">
              <Image
                src={data[1].image}
                alt="Blog Post Image"
                width={100}
                height={100}
                className="h-full w-full rounded object-cover object-center lg:w-1/2"
              />
              <div className="flex flex-col items-start justify-start gap-1">
                <h1 className="text-xl font-bold">{data[1].title}</h1>
                <p className="">{data[1].description.substring(1, 150)}</p>
                <div className="flex flex-wrap gap-2">
                  {data[1].categories.map((category, index) => (
                    <div
                      className={cn(category.color, "rounded-full p-2 text-sm")}
                      key={index}
                    >
                      {category.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>

          {/* Third Blog */}
          <Link href={`/blog/${data[0].slug}`} className="h-1/3 w-full">
            <div className="flex h-full w-full flex-col items-start justify-start gap-2 lg:flex-row">
              <Image
                src={data[2].image}
                alt="Blog Post Image"
                width={100}
                height={100}
                className="h-full w-full rounded object-cover object-center lg:w-1/2"
              />
              <div className="flex flex-col items-start justify-start gap-1">
                <h1 className="text-xl font-bold">{data[2].title}</h1>
                <p className="">{data[2].description.substring(1, 150)}</p>
                <div className="flex flex-wrap gap-2">
                  {data[2].categories.map((category, index) => (
                    <div
                      className={cn(category.color, "rounded-full p-2 text-sm")}
                      key={index}
                    >
                      {category.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>

          {/* Fourth Blog */}
          <Link href={`/blog/${data[0].slug}`} className="h-1/3 w-full">
            <div className="flex h-full w-full flex-col items-start justify-start gap-2 lg:flex-row">
              <Image
                src={data[2].image}
                alt="Blog Post Image"
                width={100}
                height={100}
                className="h-full w-full rounded object-cover object-center lg:w-1/2"
              />
              <div className="flex flex-col items-start justify-start gap-1">
                <h1 className="text-xl font-bold">{data[2].title}</h1>
                <p className="">{data[2].description.substring(1, 150)}</p>
                <div className="flex flex-wrap gap-2">
                  {data[2].categories.map((category, index) => (
                    <div
                      className={cn(category.color, "rounded-full p-2 text-sm")}
                      key={index}
                    >
                      {category.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentBlogs;
