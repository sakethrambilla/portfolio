import { create } from "zustand";

// Define the structure of an Image object
interface Image {
  id: string;
  name: string;
  url: string;
}

// Define the structure of the ImageStore
interface ImageStore {
  images: Image[];
  updateImage: (imageList: Image[]) => void;
}

// Create the Zustand store for managing images
export const useImageStore = create<ImageStore>((set) => ({
  // Initialize the images array as an empty array
  images: [],

  // Function to update the images array with a new list
  updateImage: (imageList) => set(() => ({ images: imageList })),
}));
