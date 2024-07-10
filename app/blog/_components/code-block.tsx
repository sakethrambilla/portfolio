"use client";
import hljs from "highlight.js";
import parse from "html-react-parser";
import { useEffect } from "react";

const CodeBlock = ({ body }: { body: string }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <div className="pre h-full w-full lg:prose-code:text-xl">{parse(body)}</div>
  );
};

export default CodeBlock;
