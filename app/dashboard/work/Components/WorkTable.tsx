"use client";
import { DataTable } from "@/components/data-table";
import axios from "axios";
import React, { useEffect } from "react";
import { Workcolumns } from "../(main)/work-columns";
import { Button } from "@/components/ui/button";
import { useWorkStore } from "@/store/WorkStore";
import Link from "next/link";

const WorkTable = () => {
  const works = useWorkStore((state) => state.works);
  const fetchWorks = useWorkStore((state) => state.fetchWorks);

  useEffect(() => {
    fetchWorks();
  }, []);

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="flex h-fit w-full flex-row items-end justify-between">
        <h1 className="font-redHatDisplay text-2xl">Work </h1>

        <Link href="/dashboard/work/new">
          <Button className="rounded">Add Work</Button>
        </Link>
      </div>
      <DataTable columns={Workcolumns} data={works} />
    </div>
  );
};

export default WorkTable;
