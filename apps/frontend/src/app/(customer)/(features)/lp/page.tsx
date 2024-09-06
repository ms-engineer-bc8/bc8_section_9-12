"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import FVImage from "@/app/commons/images/background/firstView.png";
import { Heading } from "lucide-react";

const LandingPage = () => {
    return (
        <div className="relative h-screen overflow-hidden">
            <div className="absolute inset-0 flex justify-end pr-14">
                <div className="w-[78%] h-[83%] relative">
                    <Image
                        src={FVImage}
                        alt="firstView"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="right top"
                        quality={100}
                        priority
                    />
                </div>
            </div>
            <div className="relative z-10 flex flex-col items-start h-full md:pl-16 lg:pl-24 text-left">
                <div className="max-w-3xl text-left">
                    <h1 className="md:text-4xl lg:text-xl font-bold mt-48 mb-7">
                        <span className="text-[57px] text-pink-500 bg-white px-5 py-2">
                            ひとりで挑戦できる
                        </span>
                    </h1>
                    <h1 className="md:text-4xl lg:text-xl font-bold mt-4 mb-14 text-left">
                        <span className="text-5xl bg-white px-5 py-2">
                            ことは、もっとある
                        </span>
                    </h1>
                    <div className="mt-8 flex flex-col items-start">
                        <span className="text-xl font-medium mb-3 ml-32">
                            ＼ 無料でユーザ登録 ／
                        </span>
                        <Link href="/register">
                            <button className="text-xl font-medium px-12 py-6 ml-20 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white hover:from-orange-500 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center">
                                <span className="text-2xl">
                                    Solocoを使ってみる
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;