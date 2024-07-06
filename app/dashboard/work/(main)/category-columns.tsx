"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import CategoryActions from "../Components/CategoryActions";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type CategoryType = {
  id: string;
  slug: string;
  name: string;
  color: string;
  createdAt: Date;
};

export const CategoryColumns: ColumnDef<CategoryType>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "slug",
    header: "Slug",
  },
  {
    accessorKey: "color",
    header: "Color",
    cell: ({ row }) => {
      return (
        <div className={`${row.original.color} w-fit rounded-full p-4`}></div>
      );
    },
  },

  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const category = row.original;
      return <CategoryActions category={category} />;
    },
  },
];
