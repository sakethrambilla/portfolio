import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const data = await prisma.blogCategory.findMany({
      include: { blogs: true },
      orderBy: [{ createdAt: "desc" }],
    });
    return NextResponse.json({ status: 200, data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error });
  }
};

export const POST = async (request: Request) => {
  try {
    const data = await request.json();
    console.log(data);
    const response = await prisma.blogCategory.create({
      data,
    });

    return NextResponse.json({ status: 200, data: response });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error });
  }
};

export const PUT = async (request: Request) => {
  try {
    const data = await request.json();

    const category = await prisma.blogCategory.update({
      where: { id: data.id },
      data: { ...data },
    });

    return NextResponse.json({ status: 200, data: category });
  } catch (error) {
    return NextResponse.json({ status: 500, error });
  }
};

export const DELETE = async (request: Request) => {
  try {
    const data = await request.json();

    const response = await prisma.blogCategory.delete({
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
