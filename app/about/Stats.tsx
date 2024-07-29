import Image from "next/image";
import Link from "next/link";
import React from "react";

const stats = [
  {
    image: "leetcode",
    desc: "1600 Rating",
    link: "https://leetcode.com/u/sakethrambilla/",
  },
  {
    image: "codechef",
    desc: "3 Star",
    link: "https://www.codechef.com/users/sakethrambilla",
  },
  {
    image: "codeforces",
    desc: "Newbie",
    link: "https://codeforces.com/profile/sakethrambilla",
  },
];
const Stats = () => {
  return (
    <div className="group flex h-fit w-full flex-col items-start justify-start rounded-3xl border-gray-500 bg-white/5 px-8 py-4 backdrop-blur-sm transition-all duration-100 ease-out hover:border-2 hover:backdrop-blur-xl lg:h-full lg:w-[30%]">
      <div className="py-2 text-xl font-bold xl:text-2xl">My Stats</div>
      <div className="flex h-fit w-full flex-col items-start justify-start gap-2 py-4 lg:flex-wrap lg:gap-4">
        {stats.map((stat, index) => {
          return (
            <Link href={stat.link} key={index}>
              <div className="flex flex-row items-end gap-2 underline">
                <Image
                  src={`/images/${stat.image}.svg`}
                  alt="skill image"
                  width={40}
                  height={40}
                  className="h-12 w-12 rounded-xl bg-gray-600 xl:h-14 xl:w-14"
                />
                <div className="font-semibold transition-all duration-500 group-hover:text-lg">
                  {" "}
                  {stat.desc}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
