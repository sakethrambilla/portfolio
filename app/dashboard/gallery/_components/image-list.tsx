"use client";
import axios from "axios";
import { useEffect } from "react";
import Image from "next/image";
import { Copy, Trash } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { useImageStore } from "@/store/ImageStore";
interface imageList {
  id: string;
  name: string;
  url: string;
}
const ImageList = () => {
  //* Access images and update function from the Zustand store
  const images = useImageStore((state) => state.images);
  const updateImage = useImageStore((state) => state.updateImage);

  //* Fetch all images from the API and update the state
  const getAllImages = async () => {
    const res = await axios.get("/api/image");
    await updateImage(res.data.data);
  };

  //* Delete an image and refresh the image list state
  const handleDeleteImage = async (image: imageList) => {
    await axios.delete("/api/image", { data: image });
    await getAllImages();
    toast({
      description: "Image deleted from Storage",
      variant: "destructive",
    });
  };

  //* Fetch images on component mount
  useEffect(() => {
    getAllImages();
  }, []);
  return (
    <div className="flex h-[80vh] w-full flex-wrap justify-start overflow-auto px-4">
      {images.map((image, index) => (
        <div
          className="relative h-[200px] w-[200px] overflow-hidden"
          key={index}
        >
          <div className="absolute z-10 flex w-full justify-between p-4">
            {/* Image actions (copy URL and delete) */}
            <Copy
              className="cursor-pointer rounded bg-white/80 text-green-500 backdrop-blur-sm"
              onClick={() => {
                navigator.clipboard.writeText(image.url);
                toast({ description: "URL is copied to clipboard" });
              }}
            />
            <Trash
              className="cursor-pointer rounded bg-white/80 text-destructive backdrop-blur-sm"
              onClick={() => {
                handleDeleteImage(image);
              }}
            />
          </div>

          {/* Image display */}
          <Image
            src={image.url}
            alt="images from gallery"
            fill
            className="absolute z-0 h-fit w-full rounded object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageList;
