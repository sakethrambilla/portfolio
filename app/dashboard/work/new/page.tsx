import WorkForm from "../_components/work-form";
import { initalWork } from "@/store/work-store";

const DashboardWork = () => {
  return (
    <div className="h-full min-h-[100vh] w-full border-l p-10">
      <WorkForm currentWork={initalWork} />
    </div>
  );
};

export default DashboardWork;
