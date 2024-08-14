"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const UserMenu = ({ iconSrc }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none"
            >
                <Image src={iconSrc} alt="User Icon" width={32} height={32} className="rounded-full" />
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <Link href="/user/1">
                        <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">マイページ</p>
                    </Link>
                    <Link href="/logout">
                        <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">ログアウト</p>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default UserMenu;