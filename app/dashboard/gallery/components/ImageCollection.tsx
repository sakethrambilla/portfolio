import React from "react";
import UploadImage from "./UploadImage";
import ImageDisplay from "./ImageDisplay";

const ImageCollection = () => {
  return (
    <div className="flex w-full flex-col">
      <UploadImage />
      <ImageDisplay />
    </div>
  );
};

export default ImageCollection;
