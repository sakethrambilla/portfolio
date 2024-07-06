"use client";
import { useImageStore } from "@/store/ImageStore";
import axios from "axios";
import React, { useState } from "react";

const UploadImage: React.FC = () => {
  // State to store selected files
  const [files, setFiles] = useState<FileList | null>(null);

  //* Initializations
  const images = useImageStore((state) => state.images);
  const updateImage = useImageStore((state) => state.updateImage);

  //* Functions
  const getAllImages = async () => {
    const res = await axios.get("/api/image");
    await updateImage(res.data.data);

    // setImageList(res.data.data);
  };

  // State to indicate whether the upload is in progress
  const [uploading, setUploading] = useState<boolean>(false);

  // Handler for form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!files) return; // If no files are selected, do nothing

    setUploading(true); // Set uploading state to true
    // Append each selected file to the FormData object
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append(`file`, files[i]);
    }

    try {
      // Make an API request to upload the files
      const response = await axios.post("/api/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      await getAllImages();
      // Log the status of the response
    } catch (error) {
      // Log any errors that occur during the upload
      console.error("Error uploading files:", error);
    } finally {
      // Set uploading state to false after the upload is complete
      setUploading(false);
    }
  };

  // Handler for file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files);
    }
  };

  return (
    <div className="h-fit w-full py-10">
      <form
        onSubmit={handleSubmit}
        className="flex h-full w-full items-center justify-center gap-4"
      >
        {/* File input for selecting multiple images */}
        <input
          type="file"
          accept="/*"
          onChange={handleFileChange}
          multiple
          className="rounded bg-gray-700/50 text-white file:w-32 file:rounded file:border-0 file:bg-gray-400 file:bg-transparent file:px-4 file:py-2 file:text-sm file:text-white"
        />

        {/* Submit button */}
        <button
          type="submit"
          disabled={!files || uploading}
          className="rounded bg-green-500/50 px-4 py-2 text-sm"
        >
          {uploading ? "Uploading" : "Upload"}
        </button>
      </form>
    </div>
  );
};

export default UploadImage;
