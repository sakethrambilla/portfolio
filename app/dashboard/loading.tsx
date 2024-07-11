import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <div className="flex h-[100vh] w-full items-center justify-center">
      <div className="h-1/2 w-1/2">
        <Image
          src="/images/loading.svg"
          fill
          alt="loading image"
          className="h-32 w-32"
        />
      </div>
    </div>
  );
};

export default loading;
