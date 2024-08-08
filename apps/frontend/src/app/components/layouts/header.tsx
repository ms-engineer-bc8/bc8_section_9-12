import React from "react";
import Link from "next/link";

const navLinks = [
    { label: "ソロ活を探す", href: "/" },
    { label: "ソロ活をシェアする", href: "/share" },
    { label: "マイページ", href: "/user" },
];

export default function Header() {
    return (
        <header>
            <nav>
                <ul className="flex justify-center max-w-full my-5">
                    {navLinks.map((link) => (
                        <li key={link.href} className="p-5">
                            <Link href={link.href}>
                                <p className="no-underline hover:underline hover:underline-offset-8 transition-all font-semibold">
                                    {link.label}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
