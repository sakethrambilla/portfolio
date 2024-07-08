"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Blog } from "@/store/blog-store";
import { cn } from "@/lib/utils";
import BlogActions from "../_components/blog-actions";
import { Button } from "@/components/ui/button";

export const BlogColumns: ColumnDef<Blog>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      return (
        <div className="">{row.original.description.substring(0, 140)}</div>
      );
    },
  },
  {
    accessorKey: "published",
    header: "Published",
    cell: ({ row }) => {
      return (
        <div
          className={cn(
            row.original.published ? "bg-green-500" : "bg-orange-500",
            "w-fit rounded-full p-2 text-xs",
          )}
        >
          {row.original.published ? "Published" : "Saved"}
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Updated At",
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
      } as const;
      const formatted = date.toLocaleDateString("en-US", options);
      return <div className="">{formatted}</div>;
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const blog = row.original;
      //   return <WorkActions work={work} />;
      return <BlogActions blog={blog} />;
    },
  },
];
