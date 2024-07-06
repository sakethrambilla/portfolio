import Image from "next/image";
import React from "react";

const frameworks = [
  {
    image: "typescript",
    des: "TypeScript",
  },
  {
    image: "python",
    des: "Python",
  },
  {
    image: "react",
    des: "ReactJS",
  },
  {
    image: "next",
    des: "NextJS",
  },
  {
    image: "tailwind",
    des: "Tailwind CSS",
  },
  {
    image: "express",
    des: "ExpressJS",
  },
  {
    image: "nodejs",
    des: "NodeJS",
  },
  {
    image: "fastapi",
    des: "FastAPI",
  },
  {
    image: "nextauth",
    des: "Auth JS",
  },
  {
    image: "clerk",
    des: "Clerk",
  },
  {
    image: "stripe",
    des: "Stripe",
  },
  {
    image: "prisma",
    des: "Prisma",
  },
  {
    image: "supabase",
    des: "Supabase",
  },
  {
    image: "mongodb",
    des: "Mongo DB",
  },

  {
    image: "pytorch",
    des: "Pytorch",
  },
  {
    image: "tensorflow",
    des: "Tesorflow",
  },
  {
    image: "openai",
    des: "OpenAI",
  },
];
const softwares = [
  {
    image: "vscode",
    des: "VSCode",
  },
  {
    image: "brave",
    des: "Brave",
  },
  {
    image: "aws",
    des: "AWS",
  },
  {
    image: "github",
    des: "Github",
  },
  {
    image: "github_actions",
    des: "Github Actions",
  },
  {
    image: "figma",
    des: "Figma",
  },
  {
    image: "vercel",
    des: "Vercel",
  },
  {
    image: "render",
    des: "Render",
  },
  {
    image: "netlify",
    des: "Netlify",
  },
];

const MyTechStack = () => {
  return (
    <div className="flex h-full w-full flex-col items-center gap-16 px-4 py-14 lg:px-8">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h2 className="font-cormorant_garamond text-[5rem] lg:text-[7rem]">
          TechStack{" "}
        </h2>
        <p className="lg:text-2xl">Frameworks and tools. I use on regularly</p>
      </div>
      <div className="flex w-[90%] flex-col gap-4 md:w-2/3">
        <h2 className="text-semibold text-2xl">Frameworks</h2>
        <div className="grid w-full gap-8 rounded-xl border-2 bg-white/5 px-8 py-10 text-xl backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-3">
          {frameworks.map((skill, index) => {
            return (
              <div
                className="flex items-center gap-2 rounded-lg transition duration-300 hover:bg-gray-400/10"
                key={index}
              >
                <Image
                  src={`/images/${skill.image}.svg`}
                  alt="skill image"
                  width={40}
                  height={40}
                  className="h-14 w-14 rounded-xl p-2"
                />
                {skill.des}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex w-[90%] flex-col gap-4 md:w-2/3">
        <h2 className="text-semibold text-2xl">Tools</h2>
        <div className="grid w-full gap-8 rounded-xl border-2 bg-white/5 px-8 py-10 text-xl backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-3">
          {softwares.map((skill, index) => {
            return (
              <div
                className="flex items-center gap-2 rounded transition duration-300 hover:bg-gray-400/10"
                key={index}
              >
                <Image
                  src={`/images/${skill.image}.svg`}
                  alt="skill image"
                  width={40}
                  height={40}
                  className="h-14 w-14 rounded-xl p-2"
                />
                {skill.des}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyTechStack;
