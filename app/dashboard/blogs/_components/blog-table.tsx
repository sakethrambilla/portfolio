"use client";
import React, { useEffect } from "react";
import { BlogColumns } from "../(main)/blog-columns";
import { useBlogStore } from "@/store/blog-store";
import { DataTable } from "@/components/data-table";

const BlogTable = () => {
  const blogs = useBlogStore((state) => state.blogs);
  const fetchBlogs = useBlogStore((state) => state.fetchBlogs);

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="h-full w-full p-6">
      <DataTable columns={BlogColumns} data={blogs} />
    </div>
  );
};

export default BlogTable;
