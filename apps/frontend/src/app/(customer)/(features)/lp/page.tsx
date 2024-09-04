"use client";

import React from 'react';
import { PinkButton } from "@/app/components/ui-elements/button/button";
import Link from "next/link";
import Image from 'next/image';
import TopImage from "@/app/commons/images/background/firstView.png"
import BottomImage from "@/app/commons/images/background/firstView02.png"

const LandingPage = () => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="absolute inset-0 flex flex-col justify-between py-12">
                <div className="w-full h-1/5 overflow-hidden">
                    <div className="w-[200%] h-full animate-scroll-left flex">
                        <div className="w-1/2 h-full flex-shrink-0 relative">
                            <Image
                                src={TopImage}
                                alt="top"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <div className="w-1/2 h-full flex-shrink-0 relative">
                            <Image
                                src={TopImage}
                                alt="top"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full h-1/5 overflow-hidden">
                    <div className="w-[200%] h-full animate-scroll-right flex">
                        <div className="w-1/2 h-full flex-shrink-0 relative">
                            <Image
                                src={BottomImage}
                                alt="bottom"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <div className="w-1/2 h-full flex-shrink-0 relative">
                            <Image
                                src={BottomImage}
                                alt="bottom"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
                <div className="text-center max-w-3xl px-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                        <span className="bg-white px-2 py-1">ひとりで挑戦できることは</span>
                    </h1>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 mt-4">
                        <span className="bg-white px-2 py-1">もっとある</span>
                    </h1>
                    <Link href="/register">
                        <div className="inline-block">
                            <PinkButton className="text-lg px-6 py-3 rounded-full mt-8">
                                今すぐ登録
                            </PinkButton>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;