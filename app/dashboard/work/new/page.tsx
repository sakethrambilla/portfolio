import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";
import WorkForm from "../Components/WorkForm";
import { initalWork } from "@/store/WorkStore";

const DashboardWork = () => {
  return (
    <DashboardLayout heading="Add Work">
      <div className="h-full min-h-[100vh] w-full border-l p-10">
        <WorkForm currentWork={initalWork} />
      </div>
    </DashboardLayout>
  );
};

export default DashboardWork;
