"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { cn, slugify } from "@/lib/utils";
import { useWorkCategoryStore } from "@/store/work-store";
import axios from "axios";
import { X } from "lucide-react";
import React, { useState } from "react";

const colors = [
  "bg-slate-500",
  "bg-stone-500",
  "bg-red-500",
  "bg-orange-500",
  "bg-yellow-500",
  "bg-lime-500",
  "bg-green-500",
  "bg-emerald-500",
  "bg-teal-500",
  "bg-cyan-500",
  "bg-sky-500",
  "bg-blue-500",
  "bg-indigo-500",
  "bg-violet-500",
  "bg-purple-500",
  "bg-fuchsia-500",
  "bg-pink-500",
  "bg-rose-500",
];

export interface ModelProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddCategory = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex h-fit w-full flex-row items-end justify-between">
      <h1 className="font-redHatDisplay text-2xl">Category </h1>
      <Button className="rounded" onClick={() => setModalOpen(!modalOpen)}>
        Add Category
      </Button>
      {modalOpen ? (
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      ) : (
        <></>
      )}
    </div>
  );
};

const Modal = ({ setModalOpen, modalOpen }: ModelProps) => {
  const [categoryName, setCategoryName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const fetchWorkCategory = useWorkCategoryStore(
    (state) => state.fetchWorkCategory,
  );

  const handleSubmit = async () => {
    const response = await axios.post("/api/work/category", {
      title: categoryName,
      slug: slugify(categoryName),
      color: selectedColor,
    });
    if (response.data.status == 200) {
      toast({ description: "Category Added", variant: "destructive" });
      fetchWorkCategory();
      setModalOpen(!modalOpen);
    }
  };
  return (
    <div className="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black/40">
      <div className="flex h-fit w-96 flex-col gap-4 rounded bg-secondary px-4 py-10 text-secondary-foreground">
        <div className="flex w-full items-end justify-end">
          <X
            onClick={() => setModalOpen(!modalOpen)}
            className="cursor-pointer"
          />
        </div>
        <Input
          type="text"
          className="rounded"
          placeholder="Add Category"
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <div className="flex flex-wrap gap-2 py-4">
          {colors.map((color: string, i: number) => {
            return (
              <div
                onClick={(e) => setSelectedColor(color)}
                className={cn(
                  ` ${color} rounded-full border-4 p-4`,
                  selectedColor == color
                    ? "border-gray-200"
                    : "border-gray-500",
                )}
                key={i}
              ></div>
            );
          })}
        </div>
        <Button className="rounded" onClick={handleSubmit}>
          Submit Category
        </Button>
      </div>
    </div>
  );
};
export default AddCategory;
