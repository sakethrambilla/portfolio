"use client";

import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { use, useEffect, useRef, useState } from "react";

// const images = [
//   "https://sakethrambilla.s3.ap-south-1.amazonaws.com/ddefef64-b9b2-4b79-b5f5-c9445bb0330a",
//   "https://sakethrambilla.s3.ap-south-1.amazonaws.com/5cb92705-6692-44e2-bc0d-b18fadf873a9",
//   "https://sakethrambilla.s3.ap-south-1.amazonaws.com/7675500c-3397-4d04-aa3f-f218c0d767f2",
//   "https://sakethrambilla.s3.ap-south-1.amazonaws.com/b5a9979e-c482-488b-8d3c-c91efc86af99",
//   "https://sakethrambilla.s3.ap-south-1.amazonaws.com/fa595428-26f1-4ea2-b9e0-7aa97641e52e",
//   "https://sakethrambilla.s3.ap-south-1.amazonaws.com/929de598-115a-407c-ace7-a503aede9d32",
//   "https://sakethrambilla.s3.ap-south-1.amazonaws.com/f758cd6b-02f5-41a5-8769-d78b8cfecef0",
//   "https://sakethrambilla.s3.ap-south-1.amazonaws.com/554e50d9-e759-4256-824e-51c8ec8bef5f",
//   "https://sakethrambilla.s3.ap-south-1.amazonaws.com/e1cdf663-50f3-4bee-a3c1-6db894590bd6",
//   "https://sakethrambilla.s3.ap-south-1.amazonaws.com/641e1e30-f853-4cf5-a747-da9ffbe92b8c",
//   "https://sakethrambilla.s3.ap-south-1.amazonaws.com/ccf3eb76-7512-4aa6-b538-dbeb534d3791",
//   "https://sakethrambilla.s3.ap-south-1.amazonaws.com/46ebb90b-c507-4bac-ae5c-b70475e3293b",
// ];
const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
];

const ParallaxScroll = () => {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      className="border-box cursor-wcursor relative hidden h-[175vh] w-full gap-4 overflow-hidden bg-secondary p-4 lg:flex"
      ref={gallery}
    >
      <Column
        images={[images[0], images[1], images[2]]}
        y={y}
        className="top-[-45%]"
      />
      <Column
        images={[images[3], images[4], images[5]]}
        y={y2}
        className="top-[-95%]"
      />
      <Column
        images={[images[6], images[7], images[8]]}
        y={y3}
        className="top-[-45%]"
      />
      <Column
        images={[images[9], images[10], images[11]]}
        y={y4}
        className="top-[-75%]"
      />
    </div>
  );
};

export default ParallaxScroll;

const Column = ({
  images,
  y,
  className,
}: {
  images: string[];
  y: MotionValue<number>;
  className: string;
}) => {
  return (
    <motion.div
      style={{ y }}
      className={cn(
        "relative flex h-full w-[25%] min-w-[250px] flex-col gap-4 overflow-hidden",
        className,
      )}
    >
      {images.map((src, i) => {
        return (
          <div
            className="s relative h-full w-full overflow-hidden rounded-xl"
            key={i}
          >
            {/* <Image src={`${src}`} alt="image" className="object-cover" fill /> */}

            <Image
              src={`/images/${src}`}
              alt="image"
              className="object-cover"
              fill
            />
          </div>
        );
      })}
    </motion.div>
  );
};
