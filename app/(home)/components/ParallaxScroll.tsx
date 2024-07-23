"use client";

import { cn } from "@/lib/utils";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
      className="border-box cursor-workCursor relative hidden h-[175vh] w-full gap-4 overflow-hidden bg-secondary p-4 lg:flex"
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
