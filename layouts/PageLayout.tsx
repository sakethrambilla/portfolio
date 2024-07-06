import { PropsWithChildren } from "react";
import Menu from "../components/LayoutComponents/Menu";
import Navbar from "@/components/Navbar";
type PageLayoutProps = PropsWithChildren;

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="relative flex h-full min-h-[100vh] w-full flex-col">
      <Navbar />
      <div className="flex h-full w-full flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
};
