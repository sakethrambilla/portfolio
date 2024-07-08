import React from "react";
import UploadImage from "./upload-image";
import ImageDisplay from "./image-display";

const ImageCollection = () => {
  return (
    <div className="flex w-full flex-col">
      <UploadImage />
      <ImageDisplay />
    </div>
  );
};

export default ImageCollection;
