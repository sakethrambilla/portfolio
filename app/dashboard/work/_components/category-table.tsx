"use client";
import { CategoryColumns } from "./category-columns";

import { useWorkCategoryStore } from "@/store/work-store";
import { useEffect } from "react";
import { DataTable } from "@/components/data-table";
import AddCategory from "@/app/dashboard/work/_components/AddCategory";

const CategoryTable = () => {
  const workCategories = useWorkCategoryStore((state) => state.workCategories);
  const fetchWorkCategory = useWorkCategoryStore(
    (state) => state.fetchWorkCategory,
  );

  useEffect(() => {
    fetchWorkCategory();
  }, []);

  return (
    <div className="flex h-full w-full flex-col gap-4 py-10">
      <AddCategory />
      <DataTable columns={CategoryColumns} data={workCategories} />
    </div>
  );
};

export default CategoryTable;
