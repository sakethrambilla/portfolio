"use client";

import { DataTable } from "@/components/data-table";
import { useBlogCategoryStore, useBlogStore } from "@/store/blog-store";
import { useEffect } from "react";
import { CategoryColumns } from "./blog-category-columns";
import AddCategory from "./add-blog-category";

const BlogCategoryTable = () => {
  const blogCategories = useBlogCategoryStore((state) => state.blogCategories);
  const fetchBlogCategory = useBlogCategoryStore(
    (state) => state.fetchBlogCategory,
  );

  useEffect(() => {
    fetchBlogCategory();
  }, []);
  return (
    <div className="flex h-full w-full flex-col gap-4 p-6">
      <AddCategory />
      <DataTable columns={CategoryColumns} data={blogCategories} />
    </div>
  );
};

export default BlogCategoryTable;
