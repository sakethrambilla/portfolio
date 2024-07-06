import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="group flex h-[50vh] w-full flex-col items-center justify-start gap-4 rounded-3xl border-gray-500 bg-white/5 px-8 py-4 transition-all duration-100 ease-out hover:border-2 lg:h-full lg:w-[30%]">
      <div className="flex h-[40%] w-fit flex-col items-end justify-end overflow-hidden rounded-3xl bg-black/50">
        <Image
          src={"/images/profile.svg"}
          width={100}
          height={100}
          alt="Saketh  PhotoS"
          className="h-[90%] w-full"
        />
      </div>
      <p className="w-full text-center">
        {
          "Hi there! 👋 I'm a Computer Science graduate from IIIT Pune. I specialize in creating dynamic websites and innovative AI applications . "
        }
      </p>
      <Link
        href={"/contact"}
        className="rounded-full bg-primary px-6 py-2 text-xl text-primary-foreground transition-all duration-300 group-hover:px-12"
      >
        Text Me
      </Link>
    </div>
  );
};

export default About;
