"use client";
import { toast } from "@/components/ui/use-toast";
import { Blog, useBlogStore } from "@/store/blog-store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import axios from "axios";
import { Ellipsis } from "lucide-react";
import Link from "next/link";
const BlogActions = ({ blog }: { blog: Blog }) => {
  const deleteBlog = useBlogStore((state) => state.deleteBlog);

  //* Delete a Post and refresh the Post list state
  const handleDeleteWork = async () => {
    await axios.delete("/api/blog", { data: blog });
    await deleteBlog(blog.id);

    toast({
      description: "Work  deleted from DB",
      variant: "destructive",
    });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <Ellipsis />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="flex flex-col gap-2 rounded-lg bg-secondary px-6 py-4 text-secondary-foreground"
      >
        <Link href={`/dashboard/blogs/${blog.slug}`}>
          <DropdownMenuItem>Update</DropdownMenuItem>
        </Link>
        <DropdownMenuItem className="cursor-pointer" onClick={handleDeleteWork}>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default BlogActions;
