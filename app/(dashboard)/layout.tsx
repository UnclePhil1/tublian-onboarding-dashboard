import Sidebar from "@/components/sidebar";
import { Suspense } from "react";

interface DashboardLayoutProps {
    children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <div className="h-auto">
            <Suspense fallback={'Loading'}>
                <div className="w-full flex h-screen">
                    <div className="hidden md:flex h-full w-60 z-50">
                        <Sidebar />
                    </div>
                    <div className="bg-[#fcfcfc] overflow-y-auto flex-1">{children}</div>
                </div>
            </Suspense>
        </div>
    );
};

export default DashboardLayout;
