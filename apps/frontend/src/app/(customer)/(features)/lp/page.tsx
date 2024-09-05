"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import FVImage from "@/app/commons/images/background/firstView.png";

const LandingPage = () => {
    return (
        <div className="relative h-screen overflow-hidden">
            <div className="absolute inset-0 flex justify-start pl-16">
                <div className="w-[80%] h-[85%] relative">
                    <Image
                        src={FVImage}
                        alt="firstView"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="left top"
                        quality={100}
                        priority
                    />
                </div>
            </div>
            <div className="relative z-10 flex flex-col items-end h-full md:pr-16 lg:pr-24 text-left">
                <div className="max-w-3xl text-right">
                    <div className="relative bg-white px-6 py-8 rounded-3xl mt-14 mb-4 text-left inline-block text-center mr-14"> {/* Added mr-12 for right margin */}
                        <h2 className="font-medium text-lg">
                            Solocoは「ソロ活」する女性が
                            <br />
                            新しい一歩を踏み出すのをお手伝いするアプリです。
                        </h2>
                        <div className="absolute -bottom-3 left-1/2 w-6 h-6 bg-white transform rotate-45 -translate-x-1/2"></div>
                    </div>
                    <h1 className="md:text-4xl lg:text-xl font-bold mt-20 mb-8">
                        <span className="text-[63px] text-pink-500 bg-white px-5 py-2">
                            ひとりで挑戦できる
                        </span>
                    </h1>
                    <h1 className="md:text-4xl lg:text-xl font-bold mt-4 mb-8 text-center">
                        <span className="text-5xl bg-white px-5 py-2">
                            ことは、もっとある
                        </span>
                    </h1>
                    <div className="mt-8 flex flex-col items-center mt-20">
                        <span className="text-lg font-bold mb-1">
                            ＼無料で会員登録／
                        </span>
                        <Link href="/register">
                            <button className="text-xl font-medium px-12 py-4 rounded-full bg-orange-400 text-white hover:bg-orange-500 transition-colors duration-300 flex flex-col items-center">
                                <span className="flex items-center text-2xl">
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