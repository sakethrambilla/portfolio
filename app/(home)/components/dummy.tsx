"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";

export default function Dummy() {
  const container = useRef(null);
  const lastcard = useRef(null);
  const footer = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const pinnedSections = gsap.utils.toArray(
        ".pinned",
      ) as Array<HTMLElement>;
      pinnedSections.forEach((section) => {
        gsap.to(section, {
          scale: 0.5,
          duration: 3,
          scrollTrigger: {
            trigger: section as gsap.DOMTarget,
            // markers: true,
            start: "top 20%",
            end: () =>
              footer.current
                ? `${footer.current.offsetTop - window.innerHeight}`
                : "bottom bottom",

            scrub: 3,
            pin: true,
            pinSpacing: false,
          },
        });
      });
    },
    { scope: container },
  );
  return (
    <div
      ref={container}
      className="container flex min-h-screen w-full flex-col items-center justify-center gap-24 py-24"
    >
      <section className="hero">
        <h1 className="font-cormorant_garamond text-[5rem]">Work</h1>
      </section>
      <div className="pinned">
        <Image
          src="https://sakethrambilla.s3.ap-south-1.amazonaws.com/554e50d9-e759-4256-824e-51c8ec8bef5f"
          width={100}
          height={100}
          className="h-fit w-[60vw] object-cover"
          alt="Work Image"
        />
      </div>

      <div className="pinned">
        <Image
          src="https://sakethrambilla.s3.ap-south-1.amazonaws.com/ddefef64-b9b2-4b79-b5f5-c9445bb0330a"
          width={100}
          height={100}
          className="h-fit w-[60vw] object-cover"
          alt="Work Image"
        />
      </div>

      <div className="z-20" ref={lastcard}>
        <Image
          src="https://sakethrambilla.s3.ap-south-1.amazonaws.com/b5a9979e-c482-488b-8d3c-c91efc86af99"
          width={100}
          height={100}
          className="h-fit w-[60vw] object-cover"
          alt="Work Image"
        />
      </div>

      <section
        ref={footer}
        className="footer flex h-[50vh] items-center justify-center text-[5rem]"
      ></section>
    </div>
  );
}
