import React from "react";
import ImageList from "./ImageList";

const ImageDisplay = () => {
  return (
    <div className="flex w-full flex-row justify-between gap-4 px-4">
      <ImageList />
    </div>
  );
};

export default ImageDisplay;
