import Menu from "@/components/LayoutComponents/Menu";
import React from "react";
import MyTechStack from "./MyTechStack";
import { PageLayout } from "@/layouts/PageLayout";
import Navbar from "../../components/Navbar";

const MyStack = () => {
  return (
    <PageLayout>
      <div className="h-full w-full">
        <MyTechStack />
      </div>
    </PageLayout>
  );
};

export default MyStack;
