import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialConnect = () => {
  return (
    <div className="h-fit rounded-3xl border border-gray-500 bg-black/10 p-10 backdrop-blur-xl lg:w-1/3">
      {" "}
      <Link
        href={"https://www.linkedin.com/in/sakethrambilla/"}
        target="_blank"
      >
        <div className="flex flex-row items-center gap-4 text-xl lg:text-[2rem]">
          <Image
            src="/images/linkedin.svg"
            alt="linkedin 3d logo"
            width={10}
            height={10}
            className="h-12 w-12 lg:h-24 lg:w-24"
          />
          <span>/sakethrambilla</span>
        </div>
      </Link>
      <Link href={"https://x.com/SakethRamBilla"} target="_blank">
        <div className="flex flex-row items-center gap-4 text-xl lg:text-[2rem]">
          <Image
            src="/images/twitter.svg"
            alt="linkedin 3d logo"
            width={10}
            height={10}
            className="h-12 w-12 lg:h-24 lg:w-24"
          />
          <span>@sakethrambilla</span>
        </div>
      </Link>
    </div>
  );
};

export default SocialConnect;
