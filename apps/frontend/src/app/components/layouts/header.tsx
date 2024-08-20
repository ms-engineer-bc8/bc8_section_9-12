import React from "react";
import Link from "next/link";
import {
    CUSTOMER_NAVIGATION_LINKS,
    BUSINESS_NAVIGATION_LINKS,
} from "@/app/commons/constants/constants";
import BizIconImage from "../../commons/images/users/icon_business.png";
import CustomerIconImage from "../../commons/images/users/icon_customer.png";
import Logo from "../../commons/images/logo/soloco_logo.png";
import UserMenu from "../ui-elements/icon/page";
import Image from "next/image";

const CustomerNavigationMenu = () => (
    <nav className="h-full flex items-center">
        <ul className="flex justify-center h-full">
            {CUSTOMER_NAVIGATION_LINKS.map(({ href, label }) => (
                <li key={href} className="flex items-center px-5">
                    <Link href={href}>
                        <p className="no-underline font-semibold hover:text-pink-500 transition-all">
                            {label}
                        </p>
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
);

export const CustomerHeader = () => (
    <header className="relative">
        <div className="mx-auto">
            <div className="flex items-center justify-between px-10 py-2 h-24">
                <div className="flex-shrink-0">
                    <Link href="/">
                        <div className="text-xl font-bold">
                            <Image
                                src={Logo}
                                width={150}
                                height={50}
                                alt="Logo"
                            />
                        </div>
                    </Link>
                </div>
                <div className="flex items-center h-full text-lg">
                    <CustomerNavigationMenu />
                    <div className="ml-5">
                        <UserMenu iconSrc={CustomerIconImage} />
                    </div>
                </div>
            </div>
        </div>
    </header>
);

const BusinessNavigationMenu = () => (
    <nav className="h-full flex items-center">
        <ul className="flex justify-center h-full">
            {BUSINESS_NAVIGATION_LINKS.map(({ href, label }) => (
                <li key={href} className="flex items-center px-5">
                    <Link href={href}>
                        <p className="no-underline font-semibold hover:text-pink-500 transition-all">
                            {label}
                        </p>
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
);

export const BusinessHeader = () => (
    <header className="relative">
        <div className="mx-auto">
            <div className="flex items-center justify-between px-10 py-2 h-20">
                <div className="flex-shrink-0">
                    <Link href="/business">
                        <div className="text-xl font-bold">
                            <Image
                                src={Logo}
                                width={150}
                                height={50}
                                alt="Logo"
                            />
                        </div>
                    </Link>
                </div>
                <div className="flex items-center h-full text-lg">
                    <BusinessNavigationMenu />
                    <div className="ml-5">
                        <UserMenu iconSrc={BizIconImage} />
                    </div>
                </div>
            </div>
        </div>
    </header>
);
