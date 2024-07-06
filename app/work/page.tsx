import { PageLayout } from "@/layouts/PageLayout";
import React from "react";
import prisma from "../../lib/db";
import WorkList from "./components/WorkList";
import { ThemeToggle } from "@/components/theme-toggle";
import Navbar from "../../components/Navbar";
import { headers } from "next/headers";

export type PageProps = {
  params: { [key: string]: string | string[] | undefined };
  searchParams?: { [key: string]: string | string[] | undefined };
};
const Work = async (props: PageProps) => {
  const headersList = headers();

  return (
    <PageLayout>
      <div className="h-full min-h-[100vh] w-full p-6 lg:p-8">
        <WorkList {...props} />
      </div>
    </PageLayout>
  );
};

export default Work;
