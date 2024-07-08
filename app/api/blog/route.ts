import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: "desc" },
    });

    const data = blogs.map((blog) => ({
      id: blog.id,
      title: blog.title,
      description: blog.description,
      published: blog.published,
      createdAt: blog.createdAt,
      slug: blog.slug,
    }));

    return NextResponse.json({ status: 200, data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: "Failed to Fetch works" });
  }
};

export const POST = async (request: NextRequest) => {
  try {
    const data = await request.json();
    console.log(data);
    const blog = await prisma.blog.create({
      data: {
        ...data,

        categories: {
          connect: data.categories.map((category: string) => ({
            slug: category,
          })),
        },
      },
    });
    console.log(blog);
    return NextResponse.json({ status: 200, data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: "Failed to Fetch works" });
  }
};

export const PUT = async (request: Request) => {
  try {
    const { id, ...data } = await request.json();

    const blog = await prisma.blog.update({
      where: { id: id },
      data: {
        ...data,
        categories: {
          connect: data.categories.map((category: string) => ({
            slug: category,
          })),
        },
      },
    });
    console.log(blog);
    return NextResponse.json({ status: 200, data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: "Failed to Fetch works" });
  }
};

export const DELETE = async (request: Request) => {
  try {
    const data = await request.json();

    const response = await prisma.blog.delete({
      where: {
        id: data.id,
      },
    });

    return NextResponse.json({ status: 200, message: response });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error, message: 500 });
  }
};
