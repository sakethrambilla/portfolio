"use client";

import { Work } from "@/store/work-store";
import Image from "next/image";
import { useEffect, useState } from "react";

const ImageSlider = ({ data }: { data: any }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setTimeout(
      () => setIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1)),
      2500,
    );
  }, [index]);

  return (
    <div className="h-full w-full">
      <Image
        src={data!.images[index]}
        width={100}
        height={100}
        className="h-full w-full rounded-lg bg-transparent object-cover"
        alt="cover image"
      />
    </div>
  );
};

export default ImageSlider;
