"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import GroupsIcon from '@mui/icons-material/Groups';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
    // Get the current pathname using usePathname hook
    const pathname = usePathname();

    // Get the router instance using useRouter hook
    const routeNav = useRouter();

    // State to store the active path
    const [activePath, setActivePath] = useState(pathname);

    // Update activePath whenever the pathname changes
    useEffect(() => {
        setActivePath(pathname);
    }, [pathname]);

    // Define an array of route objects
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

    // Function to navigate to a different URL
    const onNavigate = (url: string, pro: boolean) => {
        // Set the active path
        setActivePath(url);
        // Use the router instance to navigate to the specified URL
        routeNav.push(url);
    };

    return (
        <div className="space-y-4 flex flex-col h-full text-primary w-full">
            <div className="">
                {/* Render the logo */}
                <Image
                    src='./Images/logo.svg'
                    alt="logo"
                    width={120}
                    height={70}
                    className="object-contain w-12 h-12 mx-auto my-6"
                />
                <div className="space-y-2">
                    {/* Map over the routes array to render navigation links */}
                    {routes.map((route) => (
                        <div
                            onClick={() => onNavigate(route.href, route.pro)}
                            className={cn(
                                "text-primary/80 text-sm group p-3 w-full cursor-pointer hover:text-primary hover:bg-greenDefault/10 transition font-medium",
                                // Apply active styles if the activePath matches the route href
                                activePath === route.href && "bg-greenDefault text-secondary"
                            )}
                            key={route.href}
                        >
                            <div className="flex flex-row gap-y-2 justify-start items-center flex-1 w-full gap-2">
                                {/* Render the icon and label */}
                                <route.icon className="h-5 w-5" />
                                {route.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Render the logout link */}
            <Link href='/' className="flex flex-row gap-y-2 text-sm justify-start items-center flex-1 gap-2 absolute bottom-4 left-4 text-greenDefault hover:text-gray-400">
                <LogoutIcon className="h-5 w-5" />
                Logout
            </Link>
        </div>
    );
};

export default Sidebar;
