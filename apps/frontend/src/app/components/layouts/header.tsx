import React from "react";
import Link from "next/link";
import {
    CUSTOMER_NAVIGATION_LINKS,
    BUSINESS_NAVIGATION_LINKS,
} from "@/app/commons/constants/constants";
import BizIconImage from "../../commons/images/users/icon_business.png";
import CustomerIconImage from "../../commons/images/users/icon_business.png";
import UserMenu from "../ui-elements/icon/page";

const CustomerNavigationMenu = () => {
    return (
        <nav>
            <ul className="flex justify-end">
                {CUSTOMER_NAVIGATION_LINKS.map((link) => (
                    <li key={link.href} className="p-5">
                        <Link href={link.href}>
                            <p className="no-underline font-semibold hover:underline hover:underline-offset-8 transition-all">
                                {link.label}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export const CustomerHeader = () => {
    return (
        <header className="relative m-4 z-10 px-2 py-4 sm:px-4 lg:px-4">
            <div className="mx-auto max-w-7xl">
                <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-[0_1px_60px_-15px_rgba(0,0,0,0.2)]">
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <h3 className="text-xl font-bold">LOGO</h3>
                        </Link>
                    </div>
                    <div className="hidden sm:block flex-grow mx-4">
                        <CustomerNavigationMenu />
                    </div>
                    <div className="flex-shrink-0">
                        <UserMenu iconSrc={CustomerIconImage} />
                    </div>
                </div>
            </div>
        </header>
    );
};

const BusinessNavigationMenu = () => {
    return (
        <nav>
            <ul className="flex justify-end">
                {BUSINESS_NAVIGATION_LINKS.map((link) => (
                    <li key={link.href} className="p-5">
                        <Link href={link.href}>
                            <p className="no-underline font-semibold hover:underline hover:underline-offset-8 transition-all">
                                {link.label}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export const BusinessHeader = () => {
    return (
        <header className="flex items-center justify-between px-16 py-4">
            <div>
                <Link href="/">
                    <h3 className="text-xl">LOGO</h3>
                </Link>
            </div>
            <div>
                <BusinessNavigationMenu />
            </div>
            <div>
                <UserMenu iconSrc={BizIconImage} />
            </div>
        </header>
    );
};
