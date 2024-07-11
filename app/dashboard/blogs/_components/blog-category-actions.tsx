"use client";
import { toast } from "@/components/ui/use-toast";
import { blogCategory, useBlogCategoryStore } from "@/store/blog-store";
import { useWorkCategoryStore } from "@/store/work-store";
import { WorkCategory } from "@prisma/client";

import axios from "axios";
import { Trash } from "lucide-react";
import { useState } from "react";

const CategoryActions = ({ category }: { category: blogCategory }) => {
  const deleteBlogCategory = useBlogCategoryStore(
    (state) => state.deleteBlogCategory,
  );

  //* Delete a Post and refresh the Post list state
  const handleDeletePost = async () => {
    await axios.delete("/api/blog/category", { data: category });
    await deleteBlogCategory(category.id);

    toast({
      description: "Blog Category Deleted from Storage",
      variant: "destructive",
    });
  };

  return (
    <>
      <Trash
        onClick={handleDeletePost}
        className="cursor-pointer text-destructive"
      />
    </>
  );
};

export default CategoryActions;
