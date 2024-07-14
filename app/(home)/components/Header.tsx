import React from "react";
import Navbar from "../../../components/Navbar";
import Image from "next/image";

const Header = () => {
  return (
    <div
      id="home"
      className="relative flex h-[100vh] min-h-[100vh] w-full flex-col items-center justify-start"
    >
      <Navbar />
      <div className="flex h-[80%] w-full flex-col items-center justify-center gap-8 p-14 text-center">
        <h1 className="w-full text-left font-redHatDisplay text-xl leading-[1.0] text-white lg:text-[4rem] xl:text-[8rem]">
          Transforming Ideas into Code.
          <br />{" "}
          <span className="font-cormorant_garamond text-primary lg:text-[5rem] xl:text-[10rem]">
            One Line of Code at a Time
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
