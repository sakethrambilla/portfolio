import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const works = await prisma.work.findMany({
      orderBy: { createdAt: "desc" },
    });

    const data = works.map((work) => ({
      id: work.id,
      title: work.title,
      description: work.description,
      createdAt: work.createdAt,
      slug: work.slug,
    }));

    return NextResponse.json({ status: 200, data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: "Failed to Fetch works" });
  }
};

export const POST = async (request: Request) => {
  try {
    const data = await request.json();
    console.log(data);
    const post = await prisma.work.create({
      data: {
        ...data,
        frameworks: {
          connect: data.frameworks.map((stack: string) => ({ slug: stack })),
        },
        categories: {
          connect: data.categories.map((category: string) => ({
            slug: category,
          })),
        },
      },
    });
    console.log(post);
    return NextResponse.json({ status: 200, data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: "Failed to Fetch works" });
  }
};

export const PUT = async (request: Request) => {
  try {
    const { id, ...data } = await request.json();

    const post = await prisma.work.update({
      where: { id: id },
      data: {
        ...data,
        frameworks: {
          connect: data.frameworks.map((stack: string) => ({ slug: stack })),
        },
        categories: {
          connect: data.categories.map((category: string) => ({
            slug: category,
          })),
        },
      },
    });
    console.log(post);
    return NextResponse.json({ status: 200, data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: "Failed to Fetch works" });
  }
};

export const DELETE = async (request: Request) => {
  try {
    const data = await request.json();

    const response = await prisma.work.delete({
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
