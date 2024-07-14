"use client";
import Header from "@/app/(home)/components/Header";
import ParallaxScroll from "@/app/(home)/components/ParallaxScroll";
import TextMask from "@/app/(home)/components/TextMask";
import Navbar from "@/components/Navbar";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export default function Home() {
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();

      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      });

      t1.from(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "30",
        stagger: 0.5,
      }).to(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "-30",
        delay: 0.3,
        stagger: 0.3,
      });

      t1.to("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
      });
      t1.from("#home", {
        opacity: 0,
        duration: 0.5,
      });
    }, comp);

    return () => ctx.revert();
  });
  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="absolute z-10 flex h-screen w-full flex-col items-start justify-center bg-foreground p-14 font-cormorant_garamond tracking-tight text-background"
      >
        <h1 id="title-1" className="text-9xl">
          Software Engineer
        </h1>
        <h1 id="title-2" className="text-9xl">
          Computer Science Grad
        </h1>
        <h1 id="title-3" className="text-9xl">
          Freelancer
        </h1>
      </div>

      <Header />
      {/* <div className="h-[50vh] w-full"></div> */}
      <TextMask />
      <ParallaxScroll />
      {/* <TechStack /> */}
      {/* <Blog /> */}
    </div>
  );
}
