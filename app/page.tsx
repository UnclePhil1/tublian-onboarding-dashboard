import CardComponent from "@/components/card";
import Navbar from "@/components/navbar";
import Performance from "@/components/performance";
import GridContainer from '@/components/chart/chartGirdLayout'

export default function RootHome() {
  return (
    <main className="w-full">
      <Navbar />
      <div className="px-4 lg:px-6 pb-20 h-screen overflow-y-auto custom-scrollbar">
        <Performance />
        <CardComponent />
        <GridContainer />
      </div>
    </main>
  );
}
