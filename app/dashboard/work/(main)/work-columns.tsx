"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import WorkActions from "../Components/WorkActions";
import { Work } from "@/store/WorkStore";

export const Workcolumns: ColumnDef<Work>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
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
