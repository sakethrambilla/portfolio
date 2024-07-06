import DashboardLayout from "@/layouts/DashboardLayout";
import ImageCollection from "./components/ImageCollection";

const Gallery = () => {
  return (
    <DashboardLayout heading="Gallery">
      <div className="h-full min-h-[92vh] w-full border-l border-gray-500">
        <ImageCollection />
      </div>
    </DashboardLayout>
  );
};

export default Gallery;
