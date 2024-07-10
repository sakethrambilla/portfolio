"use client";
import { toast } from "@/components/ui/use-toast";
import { useWorkCategoryStore, WorkCategory } from "@/store/work-store";

import axios from "axios";
import { Trash } from "lucide-react";

const CategoryActions = ({ category }: { category: WorkCategory }) => {
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
