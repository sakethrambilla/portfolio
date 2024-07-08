import React from "react";
import ImageList from "./image-list";

const ImageDisplay = () => {
  return (
    <div className="flex w-full flex-row justify-between gap-4 px-4">
      <ImageList />
    </div>
  );
};

export default ImageDisplay;
