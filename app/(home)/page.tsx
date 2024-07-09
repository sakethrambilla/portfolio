import Header from "@/app/(home)/components/Header";
import ParallaxScroll from "@/app/(home)/components/ParallaxScroll";
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
