"use client";
import axios from "axios";
import React, { useEffect } from "react";
import Image from "next/image";
import { Framework, useWorkFrameworkStore } from "@/store/work-store";
import AddTechStack from "./AddTechStack";
import { toast } from "@/components/ui/use-toast";

const FrameworkList = () => {
  const frameworks = useWorkFrameworkStore((state) => state.frameworks);
  const deleteFramework = useWorkFrameworkStore(
    (state) => state.deleteFramework,
  );
  const fetchFrameworks = useWorkFrameworkStore(
    (state) => state.fetchFrameworks,
  );

  //* Delete a Framework
  const handleDeleteFramework = async (id: string) => {
    await axios.delete("/api/work/framework", { data: { id: id } });
    await deleteFramework(id);

    toast({
      description: "Framework deleted from Database",
      variant: "destructive",
    });
  };

  useEffect(() => {
    fetchFrameworks();
  }, []);

  return (
    <div className="flex h-full w-full flex-col gap-4 py-10">
      <AddTechStack />
      <div className="flex w-2/3 flex-wrap gap-4">
        {frameworks.map((skill: Framework, i: number) => (
          <div
            className="flex w-fit cursor-pointer items-center gap-2 rounded bg-secondary px-4 py-2 text-secondary-foreground"
            key={i}
            onClick={() => handleDeleteFramework(skill.id)}
          >
            <Image
              src={skill.image}
              width={100}
              height={100}
              alt="Framework image"
              className="h-10 w-10 rounded"
            />
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrameworkList;
