"use client";
import { toast } from "@/components/ui/use-toast";
import { blogCategory } from "@/store/blog-store";
import { useWorkCategoryStore } from "@/store/work-store";
import { WorkCategory } from "@prisma/client";

import axios from "axios";
import { Trash } from "lucide-react";
import { useState } from "react";

const CategoryActions = ({ category }: { category: blogCategory }) => {
  const deletePost = useWorkCategoryStore((state) => state.deleteWorkCategory);

  //* Delete a Post and refresh the Post list state
  const handleDeletePost = async () => {
    await axios.delete("/api/work/category", { data: category });
    await deletePost(category.id);

    toast({
      description: "Post deleted from Storage",
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
