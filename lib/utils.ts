import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const slugify = (str: String) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const updateCount = async (name: string) => {
  const exisitngData = await prisma.pageCount.findUnique({
    where: { name: name },
  });
  console.log(exisitngData);
  if (exisitngData == null) {
    const data = await prisma.pageCount.create({
      data: { name: name, viewCount: 0 },
    });
  } else {
    const data = await prisma.pageCount.update({
      where: { name: name },
      data: { viewCount: exisitngData?.viewCount + 1 },
    });
  }
};
