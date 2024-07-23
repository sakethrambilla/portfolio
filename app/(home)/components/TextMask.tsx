import TextRevealByWord from "@/components/text-reveal";
import React from "react";

const text =
  "I'm a computer science graduate who loves diving into web development and machine learning. Creating applications that solve real-world problems is my passion. Coding isn't just a job for me—it's a habit that I thoroughly enjoy, especially when it comes to solving data structures and algorithms. I’m always excited to take on new challenges and find innovative solutions, blending creativity with technology to make a positive impact.";

const TextMask = () => {
  return (
    <div className="cursor-pointer">
      <TextRevealByWord text={text} />
    </div>
  );
};

export default TextMask;
