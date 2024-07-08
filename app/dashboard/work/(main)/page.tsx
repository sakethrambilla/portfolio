import WorkTable from "../_components/work-table";
import FrameworkList from "../_components/FrameworkList";
import CategoryTable from "../_components/category-table";

const Work = async () => {
  return (
    <div className="relative flex h-full min-h-[100vh] w-full flex-col gap-4 divide-y-2 border-l p-6">
      <WorkTable />
      <CategoryTable />
      <FrameworkList />
    </div>
  );
};

export default Work;
