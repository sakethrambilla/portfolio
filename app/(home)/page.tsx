import Header from "@/app/(home)/components/Header";
import ParallaxScroll from "@/app/(home)/components/ParallaxScroll";
import TextMask from "@/app/(home)/components/TextMask";

export default function Home() {
  return (
    <div className="cursor-bcursor">
      <Header />
      {/* <div className="h-[50vh] w-full"></div> */}
      <TextMask />
      <ParallaxScroll />
      {/* <TechStack /> */}
      {/* <Blog /> */}
    </div>
  );
}
