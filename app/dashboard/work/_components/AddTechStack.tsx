"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import {
  useWorkCategoryStore,
  useWorkFrameworkStore,
} from "@/store/work-store";
import axios from "axios";
import { X } from "lucide-react";
import React, { useState } from "react";

export interface ModelProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddTechStack = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex h-fit w-full flex-row items-end justify-between">
      <h1 className="font-redHatDisplay text-2xl">Tech Stack </h1>
      <Button className="rounded" onClick={() => setModalOpen(!modalOpen)}>
        Add TechStack
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
  const framework = useWorkFrameworkStore((state) => state.framework);
  const updateFramework = useWorkFrameworkStore(
    (state) => state.updateFramework,
  );

  const fetchFrameworks = useWorkFrameworkStore(
    (state) => state.fetchFrameworks,
  );

  const handleSubmit = async () => {
    const response = await axios.post("/api/work/framework", {
      title: framework.title,
      slug: framework.slug,
      image: framework.image,
    });
    if (response.data.status == 200) {
      fetchFrameworks();
      setModalOpen(!modalOpen);
      toast({ description: "Framework is Added" });
    }
  };
  return (
    <div className="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black/40">
      <div className="flex h-fit w-96 flex-col gap-4 rounded bg-secondary p-4 text-secondary-foreground">
        <div className="flex w-full items-end justify-end">
          <X
            onClick={() => setModalOpen(!modalOpen)}
            className="cursor-pointer"
          />
        </div>
        <h3>Add Framework</h3>
        <Input
          type="text"
          className="rounded"
          placeholder="Add Name"
          onChange={(e) => updateFramework("title", e.target.value)}
        />
        <Input
          type="text"
          className="rounded"
          placeholder="Add Image Link"
          onChange={(e) => updateFramework("image", e.target.value)}
        />
        <Button className="rounded" onClick={handleSubmit}>
          Submit Framework
        </Button>
      </div>
    </div>
  );
};
export default AddTechStack;
