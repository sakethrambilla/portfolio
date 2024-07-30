import Header from "@/app/(home)/components/Header";
import ParallaxScroll from "@/app/(home)/components/ParallaxScroll";
import TextMask from "@/app/(home)/components/TextMask";

import dynamic from "next/dynamic";
// import Dummy from "./components/dummy";

// const ImageScroll = dynamic(() => import("./components/image-scroll"), {
//   ssr: false,
// });
const Dummy = dynamic(() => import("./components/dummy"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="">
      <Header />
      {/* <div className="h-[50vh] w-full"></div> */}
      <TextMask />
      {/* <ParallaxScroll /> */}
      {/* <ImageScroll /> */}
      <Dummy />
      {/* <TechStack /> */}
      {/* <Blog /> */}
    </div>
  );
}
