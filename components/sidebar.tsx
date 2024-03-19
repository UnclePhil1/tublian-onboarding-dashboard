"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";

import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import GroupsIcon from '@mui/icons-material/Groups';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SettingsIcon from '@mui/icons-material/Settings';

import { cn } from "@/lib/utils";
import Image from "next/image";

const Sidebar = () => {
    const pathname = usePathname();
    const [activePath, setActivePath] = useState(pathname || '/dashboard');

    const routes = [
        {
            icon: DashboardIcon,
            href: "/dashboard",
            label: "Dashboard",
            pro: false
        },
        {
            icon: BarChartIcon,
            href: "/analysis",
            label: "Analysis",
            pro: true

        },
        {
            icon: GroupsIcon,
            href: "/communities",
            label: "Communities",
            pro: true

        },
        {
            icon: NotificationsIcon,
            href: "/notifications",
            label: "Notifications",
            pro: true

        },
        {
            icon: PermMediaIcon,
            href: "/media",
            label: "Media",
            pro: false

        },
        {
            icon: ContactSupportIcon,
            href: "/support",
            label: "Support",
            pro: true

        },
        {
            icon: SettingsIcon,
            href: "/settings",
            label: "Settings",
            pro: true

        },
    ];

    const onNavigate = (url:string, pro: boolean) => {
        // Prevent the default action and just set the active path
        setActivePath(url);
    };


    return (
        <div className="space-y-4 flex flex-col h-full text-primary w-full">
            <div className="">
                <Image
                    src='/Images/logo.svg'
                    alt="logo"
                    width={120}
                    height={70}
                    className="object-contain w-12 h-12 mx-auto my-6"
                />
                <div className="space-y-2">
                    {routes.map((route) => (
                        <div
                            onClick={() => onNavigate(route.href, route.pro)}
                            className={cn(
                                "text-primary/60 text-sm group p-3 w-full cursor-pointer hover:text-primary hover:bg-greenDefault/10 transition font-medium",
                                activePath === route.href && "bg-greenDefault text-secondary"
                            )}
                            key={route.href}
                        >
                            <div className="flex flex-row gap-y-2 justify-start items-center flex-1 w-full gap-2">
                                <route.icon className="h-5 w-5" />
                                {route.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
