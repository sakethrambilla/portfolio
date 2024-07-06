import React from "react";
import Navbar from "../../../components/Navbar";
import Image from "next/image";

const Header = () => {
  return (
    <div className="relative flex h-[100vh] min-h-[100vh] w-full flex-col items-center justify-start">
      <div className="flex h-[80%] w-full flex-col items-center justify-center gap-8 p-4 text-center">
        <h1 className="w-ful w-2/3 font-redHatDisplay text-xl text-white lg:text-3xl">
          Hi 👋, my name is Saketh Ram Billa and I am a
        </h1>
        <h3 className="font-cormorant_garamond flex flex-col items-center text-[3rem] text-primary lg:flex-row lg:gap-12 xl:text-[6rem] 2xl:text-[7rem]">
          Web Developer
          <span className="text-white">{"&"}</span> ML Engineer
        </h3>
      </div>
    </div>
  );
};

export default Header;
