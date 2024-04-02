'use client'

import React, { useState } from "react";
import { usePathname } from "next/navigation";

import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import GroupsIcon from '@mui/icons-material/Groups';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

import Link from "next/link";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import MenuIcon from '@mui/icons-material/Menu';

import { cn } from "@/lib/utils";


export function SheetMenu() {
    // defining some constants for the sidebar navigations
    const pathname = usePathname();
    const [activePath, setActivePath] = useState(pathname || '/dashboard');

    // the sidebar link array
    const routes = [
        {
            icon: DashboardIcon,
            href: "/",
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

    // Function to define the routing when a link is clicked on in the sidebar on a smallScreen
    const onNavigate = (url: string, pro: boolean) => {
        // Prevent the default action and just set the active path
        setActivePath(url);
    };
    return (
        <Sheet>
            <SheetTrigger asChild>
                <MenuIcon className="w-8 h-10" />
            </SheetTrigger>
            <SheetContent>
                <div className="space-y-2 mt-10">
                    {/* Rendering the array using .map() */}
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
                <Link href='/' className="flex flex-row gap-y-2 text-sm justify-start items-center flex-1 gap-2 absolute bottom-5 left-4 text-greenDefault hover:text-gray-400">
                    <LogoutIcon className="h-5 w-5" />
                    Logout
                </Link>
            </SheetContent>
        </Sheet>
    )
}
