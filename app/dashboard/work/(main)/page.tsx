import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";

import WorkTable from "../Components/WorkTable";
import CategoryTable from "../Components/CategoryTable";
import FrameworkList from "../Components/FrameworkList";
const Work = async () => {
  return (
    <DashboardLayout heading="Work">
      <div className="relative flex h-full min-h-[100vh] w-full flex-col gap-4 divide-y-2 border-l p-4">
        <WorkTable />
        <CategoryTable />
        <FrameworkList />
      </div>
    </DashboardLayout>
  );
};

export default Work;
