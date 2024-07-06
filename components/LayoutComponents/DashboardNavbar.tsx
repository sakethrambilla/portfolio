import { LayoutDashboard, Plus } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";

interface DashboardNavbarProps {
  heading: string;
}

const DashboardNavbar = ({ heading }: DashboardNavbarProps) => {
  return (
    <div className="flex h-fit w-full items-center justify-between border-b bg-black/10 px-4 py-6">
      <div className="flex flex-row items-center gap-2">
        <LayoutDashboard size={25} /> {heading}
      </div>
    </div>
  );
};

export default DashboardNavbar;
