import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const data = await prisma.framework.findMany({ include: { works: true } });
    return NextResponse.json({ status: 200, data });
  } catch (error) {
    return NextResponse.json({ status: 500, error });
  }
};

export const POST = async (request: Request) => {
  try {
    const data = await request.json();
    console.log(data);
    const stack = await prisma.framework.create({
      data,
    });
    console.log(stack);
    return NextResponse.json({ status: 200, data: stack });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error });
  }
};
export const PUT = async (request: Request) => {
  try {
    const data = await request.json();

    const stack = await prisma.framework.update({
      where: { id: data.id },
      data: { ...data },
    });
    console.log(stack);
    return NextResponse.json({ status: 200, data: stack });
  } catch (error) {
    return NextResponse.json({ status: 500, error });
  }
};

export const DELETE = async (request: Request) => {
  try {
    const data = await request.json();

    const response = await prisma.framework.delete({
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
