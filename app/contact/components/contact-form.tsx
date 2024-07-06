import React from "react";

const ContactForm = () => {
  return (
    <div className="flex h-fit w-full flex-col gap-4 rounded-3xl border border-gray-500 bg-black/10 p-10 backdrop-blur-xl lg:w-2/3">
      <h1 className="font-cormorant_garamond text-[3rem] text-primary lg:text-[8rem]">
        {"Let's Connect"}
      </h1>
      <div className="flex w-full flex-col items-start justify-center gap-8">
        <div className="flex w-full flex-col gap-4 lg:flex-row">
          <label className="font-cormorant_garamond text-[2rem] lg:text-[3rem]">
            Name
          </label>
          <input
            type="text"
            className="w-full border-b-8 bg-transparent text-[1rem] text-gray-400 focus:outline-none lg:text-[3rem]"
          />
        </div>
        <div className="flex w-full flex-col gap-4 lg:flex-row">
          <label className="font-cormorant_garamond text-[2rem] lg:text-[3rem]">
            Email
          </label>
          <input
            type="text"
            className="w-full border-b-8 bg-transparent text-[1rem] text-gray-400 focus:outline-none lg:text-[3rem]"
          />
        </div>
        <div className="flex w-full flex-col gap-4 lg:flex-row">
          <label className="font-cormorant_garamond text-[2rem] lg:text-[3rem]">
            Mesage
          </label>
          <textarea className="w-full border-b-8 bg-transparent text-[1rem] text-gray-400 focus:outline-none lg:text-[3rem]" />
        </div>
        <div className="flex w-full items-center justify-center">
          <button className="w-fit rounded-full bg-primary px-12 text-[2rem] text-primary-foreground lg:text-[3rem]">
            {" "}
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
