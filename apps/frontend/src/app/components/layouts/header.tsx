import React from "react";
import Link from "next/link";

export default function Header() {
    return (
        <div>
            <header>
                <nav>
                    <ul className="flex justify-center max-w-full">
                        <li className="my-6">
                            <Link href="/">
                                <p className="p-4 text-lg font-semibold hover:bg-gray-100 hover:rounded-lg duration-150">
                                    ホーム
                                </p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
