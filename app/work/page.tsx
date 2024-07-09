import { PageLayout } from "@/layouts/PageLayout";
import WorkList from "./components/WorkList";

export type PageProps = {
  params: { [key: string]: string | string[] | undefined };
  searchParams?: { [key: string]: string | string[] | undefined };
};

const Work = async (props: PageProps) => {
  return (
    <PageLayout>
      <div className="h-full min-h-[100vh] w-full p-6 lg:p-8">
        <WorkList {...props} />
      </div>
    </PageLayout>
  );
};

export default Work;
