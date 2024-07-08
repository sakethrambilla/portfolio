import WorkForm from "../_components/work-form";
import prisma from "@/lib/db";
import { Work } from "@/store/work-store";

const DashboardWork = async ({ params }: { params: { slug: string } }) => {
  const data = (await prisma.work.findFirst({
    where: { slug: params.slug },
  })) as Work;

  return (
    <div className="h-full min-h-[100vh] w-full border-l p-10">
      <WorkForm currentWork={data} />
    </div>
  );
};

export default DashboardWork;
