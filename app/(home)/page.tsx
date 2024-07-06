"use client";

import Blog from "@/app/(home)/components/Blog";
import Header from "@/app/(home)/components/Header";
import ParallaxScroll from "@/app/(home)/components/ParallaxScroll";
import TechStack from "@/app/(home)/components/TechStack";
import TextMask from "@/app/(home)/components/TextMask";
import { PageLayout } from "@/layouts/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      <Header />
      {/* <div className="h-[50vh] w-full"></div> */}
      <TextMask />
      <ParallaxScroll />
      {/* <TechStack /> */}
      {/* <Blog /> */}
    </PageLayout>
  );
}
