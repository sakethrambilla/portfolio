import Image from "next/image";
import Link from "next/link";

import Experience from "@/app/about/Experience";
import Education from "./Education";
import About from "./About";
import Stats from "./Stats";

import Menu from "@/components/LayoutComponents/Menu";
import { PageLayout } from "@/layouts/PageLayout";
import Navbar from "../../components/Navbar";

const AboutPage = () => {
  return (
    <PageLayout>
      <div className="flex h-full flex-col gap-4 p-4 lg:w-3/4">
        <div className="flex h-full w-full flex-col gap-4 lg:h-fit lg:flex-row">
          <About />

          <Experience />
        </div>
        <div className="flex h-fit w-full flex-col gap-4 lg:flex-row">
          <Stats />
          <Education />
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutPage;
