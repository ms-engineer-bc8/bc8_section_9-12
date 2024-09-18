"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "../../commons/utils/imageUtils";
import { LandingPageHeader } from "../../components/layouts/Header";

// S3から画像取得
const FVImage = getImageUrl("firstView.png");
const FeatureOne = getImageUrl("feature01.jpg");
const FeatureTwo = getImageUrl("feature02.jpg");
const Logo = getImageUrl("soloco_logo.png");

export default function LandingPage() {
    return (
        <div>
            <LandingPageHeader />
            <div className="min-h-screen flex flex-col">
                <div className="relative flex flex-col lg:flex-row overflow-hidden mb-6">
                    <div className="lg:w-2/5 z-10 flex flex-col items-start md:pl-16 lg:pl-18 text-left">
                        <div className="max-w-3xl text-left mt-24 lg:mt-48">
                            <h1 className="md:text-4xl lg:text-xl font-bold mb-7">
                                <span className="text-[54px] text-pink-500 bg-white px-5 py-2">
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

                    <div className="lg:w-3/5 flex justify-center pr-14">
                        <Image
                            src={FVImage}
                            alt="firstView"
                            className="object-contain"
                            priority
                            quality={100}
                            width={850}
                            height={650}
                        />
                    </div>
                </div>

                <div className="py-16 px-5">
                    <div className="container mx-auto max-w-6xl rounded-lg overflow-hidden">
                        <div className="bg-white rounded-2xl p-20">
                            <h2 className="text-3xl font-bold mb-12 text-center">
                                Solocoって何？
                            </h2>
                            <div className="mb-16">
                                <div className="flex flex-wrap items-center">
                                    <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
                                        <Image
                                            src={Logo}
                                            alt="Soloco Image"
                                            width={420}
                                            height={220}
                                            className="rounded-lg"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 md:pl-6">
                                        <p className="text-2xl mb-8 font-bold text-pink-500">
                                            「ソロ活」を楽しむ女性が新しい一歩を踏み出すのをお手伝いするアプリです。
                                        </p>
                                        <p className="text-lg">
                                            想像もしなかった驚きのソロ活との出会いや、仲間たちとのワクワクする体験のシェアを通じて、あなたの人生をもっとカラフルに、もっとドラマチックに彩りましょう✨さあ、あなただけの特別な物語の始まりです🛫
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="my-18">
                                <h2 className="text-3xl font-bold mt-4 mb-12 text-center text-gray-800">
                                    Solocoの特徴
                                </h2>
                                <div className="bg-pink-50 rounded-2xl overflow-hidden mb-12">
                                    <div className="flex flex-wrap items-stretch">
                                        <div className="w-full md:w-1/2 order-2 md:order-1">
                                            <Image
                                                src={FeatureOne}
                                                alt="Soloco Features"
                                                width={500}
                                                height={300}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-12 order-1 md:order-2 flex flex-col justify-center">
                                            <p className="font-bold text-pink-400 text-lg mb-3">
                                                特徴①
                                            </p>
                                            <h3 className="text-pink-500 font-bold text-2xl md:text-2xl mb-6">
                                                様々なソロ活を提案してくれる！
                                            </h3>
                                            <p className="text-gray-700 text-lg md:text-lg leading-relaxed">
                                                ソロ活といえば「映画」「ショッピング」「旅行」「カラオケ」...。
                                                そんなイメージがありませんか？実はシチュエーションに応じた様々なソロ活があるんです！
                                                Solocoはあなたが想像してもみなかった新しいソロ活を提案します🙌
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-pink-50 rounded-2xl overflow-hidden">
                                    <div className="flex flex-wrap items-stretch">
                                        <div className="w-full md:w-1/2 order-2 md:order-1 md:order-2">
                                            <Image
                                                src={FeatureTwo}
                                                alt="Share your solo activities"
                                                width={500}
                                                height={300}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-12 order-1 md:order-1 flex flex-col justify-center">
                                            <p className="font-bold text-pink-400 text-lg mb-3">
                                                特徴②
                                            </p>
                                            <h3 className="text-pink-500 font-bold text-2xl md:text-2xl mb-6">
                                                体験したソロ活をシェアできる！
                                            </h3>
                                            <p className="text-gray-700 text-lg md:text-lg leading-relaxed">
                                                「新しいソロ活を体験したけど、その感動をどこでシェアいいかわからない...」。
                                                そんな経験はありませんか？Solocoなら大丈夫！シェアできる内容はソロ活だけ。周りのことを気にする必要はありません😊
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="py-4">
                    <div className="container mx-auto max-w-6xl">
                        <div className="my-2 text-center">
                            <p className="text-lg">
                                &copy; 2024 Soloco. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
