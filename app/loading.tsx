import { Code } from "lucide-react";
import React from "react";

const loading = () => {
  return (
    <div className="flex h-[100vh] w-full items-center justify-center">
      <Code className="h-1/4 w-1/4 animate-spin text-primary repeat-infinite" />
    </div>
  );
};

export default loading;
