import React from "react";
import Link from "next/link";

const navLinks = [
    { label: "ソロ活を探す", href: "/" },
    { label: "ソロ活をシェアする", href: "/share" },
    { label: "マイページ", href: "/user" },
];

const Header = () => {
    return (
        <header>
            <nav>
                <ul className="flex justify-center max-w-full my-5">
                    {navLinks.map((link) => (
                        <li key={link.href} className="p-5 duration-150">
                            <Link href={link.href}>
                                <p className="no-underline hover:text-pink-600 hover:underline hover:underline-offset-8 transition-all">{link.label}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;