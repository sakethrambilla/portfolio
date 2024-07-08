"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import WorkActions from "./work-actions";
import { Work } from "@/store/work-store";

export const Workcolumns: ColumnDef<Work>[] = [
  {
    accessorKey: "title",
    header: "Title",
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
      const work = row.original;
      return <WorkActions work={work} />;
    },
  },
];
