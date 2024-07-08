import Menu from "@/components/LayoutComponents/Menu";
import React from "react";
import MyTechStack from "./MyTechStack";
import { PageLayout } from "@/layouts/PageLayout";
import Navbar from "../../components/Navbar";
import { updateCount } from "@/lib/utils";

const MyStack = () => {
  updateCount("mystack");
  return (
    <PageLayout>
      <div className="h-full w-full">
        <MyTechStack />
      </div>
    </PageLayout>
  );
};

export default MyStack;
