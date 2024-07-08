"use client";
import { toast } from "@/components/ui/use-toast";
import { Work, useWorkStore } from "@/store/work-store";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import axios from "axios";
import { Ellipsis } from "lucide-react";
import Link from "next/link";
const WorkActions = ({ work }: { work: Work }) => {
  const works = useWorkStore((state) => state.works);
  const deleteWork = useWorkStore((state) => state.deleteWork);

  //* Delete a Post and refresh the Post list state
  const handleDeleteWork = async () => {
    await axios.delete("/api/work", { data: work });
    await deleteWork(work.id);

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
        <Link href={`/dashboard/work/${work.slug}`}>
          <DropdownMenuItem>Update</DropdownMenuItem>
        </Link>
        <DropdownMenuItem className="cursor-pointer" onClick={handleDeleteWork}>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WorkActions;
