import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Loading from "@/components/loading";
import { Suspense } from "react";
import Sidebar from '@/components/sidebar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tublian User Dashboard",
  description: "User Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-auto">
          <Suspense fallback={<Loading />}>
            <div className="w-full flex h-screen">
              <div className="hidden md:flex h-full w-60 z-50">
                <Sidebar />
              </div>
              <div className="bg-[#fcfcfc] overflow-hidden flex-1">{children}</div>
            </div>
          </Suspense>
        </div></body>
    </html>
  );
}
