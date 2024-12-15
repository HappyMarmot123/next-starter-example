import { Card } from "@/app/ui/dashboard/cards";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import { lusitana } from "@/app/ui/fonts";
import DashboardSkeleton, { RevenueChartSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";

const Page = () => {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <Test />
      <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Dashboard
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card title="Collected" value={12} type="collected" />
          <Card title="Pending" value={12} type="pending" />
          <Card title="Total Invoices" value={12} type="invoices" />
          <Card title="Total Customers" value={12} type="customers" />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          <p>dashboard page</p>
        </div>
      </main>
    </Suspense>
  );
};

export const Test = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <></>;
};

export default Page;
