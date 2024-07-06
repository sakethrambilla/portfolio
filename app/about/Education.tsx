import Image from "next/image";
import React from "react";

const Education = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border-gray-500 bg-white/5 p-4 backdrop-blur-sm transition-all duration-100 ease-out hover:border-2 hover:backdrop-blur-xl lg:w-[70%] lg:px-8 lg:py-4">
      <div className="group flex h-fit w-full flex-col items-start justify-center gap-2 rounded-xl bg-white/5 p-4 backdrop-blur-sm">
        <div className="flex w-full flex-col items-start gap-2 lg:flex-row lg:items-end">
          <Image
            src={"/images/iiitpune.svg"}
            width={50}
            height={100}
            alt=" IIIT Pune College Logo"
            className="w-10 rounded-xl"
          />
          <h3 className="flex w-full flex-col justify-between text-lg lg:flex-row">
            {" "}
            Indian Institute of Information Technology, Pune{" "}
            <span className="text-sm text-gray-400"> 2020 – 2024</span>
          </h3>
        </div>

        <p className="flex w-full flex-col justify-between gap-2 lg:flex-row">
          {" "}
          Bachelor of Technology in Computer Science and Engineering{" "}
          <span className="text-sm text-gray-400">GPA: 8.14/10</span>
        </p>
      </div>
      <div className="flex h-fit w-full flex-col items-start justify-center gap-2 rounded-xl bg-white/5 p-4">
        <div className="flex w-full flex-col items-start gap-2 lg:flex-row lg:items-end">
          <Image
            src={"/images/srichaitanya.svg"}
            width={50}
            height={100}
            alt=" Sri Chaitanyas College Logo"
            className="w-10 rounded-xl"
          />
          <h3 className="flex w-full flex-col justify-between gap-2 lg:flex-row">
            {" Sri Chaitanya  College, Khammam"}
            <span className="text-sm text-gray-400"> {"2018 - 2020 "}</span>
          </h3>
        </div>

        <p className="flex w-full flex-col justify-between lg:flex-row">
          {"  Intermediate Education"}
          <span className="text-sm text-gray-400">{" GPA: 9.78/10 "}</span>
        </p>
      </div>
    </div>
  );
};

export default Education;
