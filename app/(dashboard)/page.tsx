import CardComponent from "@/components/card";
import Navbar from "@/components/navbar";
import Performance from "@/components/performance";
import GridContainer from '@/components/chart/chartGirdLayout'

export default function RootHome() {
  return (
    <main className="w-full">
      <Navbar />
      <div className="p-4">
        <Performance />
        <CardComponent />
        <GridContainer />
      </div>
    </main>
  );
}
