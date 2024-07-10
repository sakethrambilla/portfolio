import { redirect } from "next/navigation";

import Image from "next/image";

import { PageLayout } from "@/layouts/PageLayout";
import prisma from "@/lib/db";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import ImageSlider from "../components/ImageSlider";

// Component to display a single post
const SinglePost = async ({ params }: { params: any }) => {
  // Fetch post data from the database based on the slug from URL params
  const data = await prisma.work.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      frameworks: {
        select: {
          image: true,
          title: true,
        },
      },
      categories: {
        select: {
          title: true,
        },
      },
    },
  });

  // If no post is found, redirect to the blog page
  if (data === null) {
    redirect("/blog");
  }

  // Render the post content
  return (
    <PageLayout>
      <div className="flex h-full min-h-[100vh] w-full flex-col items-start justify-start gap-14 px-4 py-8 lg:p-20">
        <h1 className="flex w-[90%] items-start justify-start text-center font-cormorant_garamond text-3xl font-semibold lg:text-6xl">
          {data!.title}
        </h1>
        <div className="flex h-full w-full flex-col items-center justify-center gap-14 lg:flex-row lg:items-start">
          <ImageSlider data={data} />
          <div className="flex h-full w-[90%] flex-col gap-8 lg:w-[50%]">
            <p className="text-lg lg:text-2xl">{data.description}</p>
            <div className="flex flex-row justify-start gap-4 lg:text-xl">
              <div
                className={cn(
                  "flex-row items-center gap-4 rounded-lg bg-white/10 px-6 py-3 text-secondary-foreground",
                  data.githubLink ? "flex" : "hidden",
                )}
              >
                <Github size={40} className="h-6 w-6" />
                GitHub
              </div>
              <Link href={data.liveLink} target="_blank">
                <div className="flex flex-row items-center gap-4 rounded-lg bg-white/10 px-6 py-3 text-secondary-foreground">
                  <ExternalLink size={35} className="h-6 w-6" />
                  Live
                </div>
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl">Category</h3>
              <div className="flex flex-wrap gap-4 lg:text-lg">
                {data.categories.map((category, index) => (
                  <div className="rounded bg-white/5 px-4 py-2" key={index}>
                    {category.title}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-xl">TechStack</h3>
                <div className="flex flex-wrap gap-6 text-lg">
                  {data.frameworks.map((framework, index) => (
                    <Image
                      src={framework.image}
                      alt="framework image"
                      width={30}
                      height={30}
                      className="h-16 w-16 rounded-xl bg-transparent"
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SinglePost;
