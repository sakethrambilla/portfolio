"use client";
import React, { useRef } from "react";
import Navbar from "../../../components/Navbar";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  const comp = useRef(null);
  useGSAP(
    () => {
      const t1 = gsap.timeline();

      t1.to("#starter", {
        opacity: 0,
        // xPercent: "-100",
        zIndex: 0,
        delay: 0.3,
      });
      t1.from("#intro-slider", {
        xPercent: "-100",

        duration: 1.3,
        delay: 0.3,
      });

      t1.from(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,

        y: "30",
        delay: 0.5,
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
    },
    { scope: comp },
  );

  return (
    <div ref={comp} className="relative">
      <div
        id="starter"
        className="starter absolute z-20 flex h-screen w-full items-center justify-center bg-background font-cormorant_garamond text-4xl text-foreground lg:text-6xl"
      >
        Saketh Ram Billa
      </div>
      <div
        id="intro-slider"
        className="absolute z-10 flex h-screen w-full flex-col items-start justify-center bg-primary p-14 font-cormorant_garamond tracking-tight text-background"
      >
        <h1 id="title-1" className="text-3xl lg:text-9xl">
          Software Engineer
        </h1>
        <h1 id="title-2" className="text-3xl lg:text-9xl">
          Computer Science Grad
        </h1>
        <h1 id="title-3" className="text-3xl lg:text-9xl">
          Freelancer
        </h1>
      </div>
      <div
        id="home"
        className="relative flex h-[100vh] min-h-[100vh] w-full flex-col items-center justify-start"
      >
        <Navbar />
        <div className="flex h-full w-full flex-col items-center justify-center gap-8 p-14 text-center">
          <h1 className="w-full text-center font-redHatDisplay text-xl leading-[1.1] text-white lg:text-[4rem]">
            Transforming Ideas into Code.
            <br />{" "}
            <span className="font-cormorant_garamond text-primary lg:text-[5rem]">
              One Line of Code at a Time
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
