"use client";
import { Workcolumns } from "../(main)/work-columns";
import { Button } from "@/components/ui/button";
import { CategoryColumns } from "../(main)/category-columns";
import AddCategory from "./AddCategory";
import { useWorkCategoryStore } from "@/store/WorkStore";
import { useEffect } from "react";
import { DataTable } from "@/components/data-table";

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
