import DashboardMenu from "@/components/LayoutComponents/DashboardMenu";
import { FC } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-full min-h-[100vh] flex-row">
      <DashboardMenu />
      {children}
    </div>
  );
};

export default DashboardLayout;
