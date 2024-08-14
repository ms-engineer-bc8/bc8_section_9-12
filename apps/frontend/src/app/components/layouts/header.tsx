import React from "react";
import Link from "next/link";
import { CUSTOMER_NAVIGATION_LINKS, BUSINESS_NAVIGATION_LINKS } from "@/app/commons/constants/constants";

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
        <header className="flex items-center justify-between px-12 py-4">
            <Link href="/">
                <h3 className="text-xl">LOGO</h3>
            </Link>
            <CustomerNavigationMenu />
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
        <header className="flex items-center justify-between px-12 py-4">
            <Link href="/">
                <h3 className="text-xl">LOGO</h3>
            </Link>
            <BusinessNavigationMenu />
        </header>
    );
};


