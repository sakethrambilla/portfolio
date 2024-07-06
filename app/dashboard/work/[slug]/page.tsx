import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";
import WorkForm from "../Components/WorkForm";
import prisma from "@/lib/db";
import { Work } from "@/store/WorkStore";

const DashboardWork = async ({ params }: { params: { slug: string } }) => {
  const data = (await prisma.work.findFirst({
    where: { slug: params.slug },
  })) as Work;

  return (
    <DashboardLayout heading="Add Work">
      <div className="h-full min-h-[100vh] w-full border-l p-10">
        <WorkForm currentWork={data} />
      </div>
    </DashboardLayout>
  );
};

export default DashboardWork;
