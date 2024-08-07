import React from "react";
import Link from "next/link";
import { NAVIGATION_LINKS } from "@/app/commons/constants/constants";

export const NavigationMenu = () => {
    return (
        <nav>
            <ul className="flex justify-end">
                {NAVIGATION_LINKS.map((link) => (
                    <li key={link.href} className="p-5">
                        <Link href={link.href}>
                            <p className="no-underline hover:underline hover:underline-offset-8 transition-all">
                                {link.label}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export const Header = () => {
    return (
        <header className="flex items-center justify-between px-12 py-4">
            <Link href="/">
                <h3 className="text-xl">LOGO</h3>
            </Link>
            <NavigationMenu />
        </header>
    );
};

export default Header;
