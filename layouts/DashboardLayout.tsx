import DashboardMenu from "@/components/LayoutComponents/DashboardMenu";
import DashboardNavbar from "@/components/LayoutComponents/DashboardNavbar";
import { LayoutDashboard } from "lucide-react";
import React, { FC, ReactNode } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  heading: string;
}
const DashboardLayout: FC<DashboardLayoutProps> = ({ children, heading }) => {
  return (
    <div className="flex h-full min-h-[100vh] w-full flex-col">
      <DashboardNavbar heading={heading} />
      <div className="flex h-fit w-full flex-row">
        <DashboardMenu />

        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
