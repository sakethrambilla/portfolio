import Image from "next/image";
import React from "react";

const Experience = () => {
  return (
    <div className="group flex w-full flex-col items-start justify-start gap-6 rounded-3xl border-gray-500 bg-white/5 px-8 py-4 backdrop-blur-sm transition-all duration-100 ease-out hover:border-2 hover:backdrop-blur-xl lg:w-[70%]">
      <h2 className="text-xl font-semibold xl:text-3xl">Experience</h2>
      <div className="flex w-full flex-row items-end justify-between gap-4">
        <div className="flex w-full flex-col items-start justify-between gap-2 lg:flex-row">
          <span className="text-xl font-semibold transition-all duration-500 ease-out group-hover:text-xl">
            ML Research Intern{" "}
          </span>
          <span className="font-semibold transition-all duration-500 group-hover:text-lg">
            May 2023 - July 2023
          </span>
        </div>
      </div>
      <p className="transition-all duration-500 group-hover:text-lg">
        TCS Research and Innovation, Pune
      </p>
      <ul className="flex w-full flex-col gap-2 text-gray-400 transition-all duration-500 ease-linear group-hover:text-gray-200 lg:w-[90%]">
        <li className="list-disc">
          Built facial emotion detection, employing feature extraction
          techniques like Dlib, Haar Cascade, further used ML models and
          advanced deep learning techniques, including transfer learning for
          model building.
        </li>
        <li className="list-disc">
          By systematically evaluating various models, The most accurate model
          integrated it into a server-side API using FastAPI
        </li>
        <li className="list-disc">
          The accompanying frontend web application, developed with React and
          Tailwind CSS, ensures a user-friendly experience.
        </li>
      </ul>
    </div>
  );
};

export default Experience;
