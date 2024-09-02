import React from "react";
import { PinkButton } from "@/app/components/ui-elements/button/button";
import Link from "next/link";

export default function LandingPage() {
    return (
        <>
            <div className="flex flex-col justify-center">
                <main className="container mx-auto px-4 py-8">
                    <section className="text-center mb-16 flex flex-col items-center justify-center m-10">
                        <h1 className="md:text-6xl font-bold mb-8 text-center inline-block">
                            <span className="text-pink-500 text-6xl bg-white px-2 py-1 bg-white">
                                "
                            </span>
                            <span className="text-6xl bg-white px-2 py-1">
                                ひとりで挑戦できること
                            </span>
                            <span className="text-pink-500 text-6xl bg-white px-2 py-1 bg-white">
                                "
                            </span>
                        </h1>
                        <h1 className="md:text-6xl font-bold mb-8 text-center inline-block mt-10 mb-16">
                            <span className="text-6xl bg-white px-2 py-1">
                                はもっとある
                            </span>
                        </h1>
                        <Link href="/register">
                            <div className="inline-block">
                                <PinkButton className="text-lg px-6 py-3 rounded-full mt-8">
                                    今すぐ登録
                                </PinkButton>
                            </div>
                        </Link>
                    </section>

                    <section className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl text-pink-5000 font-semibold mb-4">
                                1. 新しいソロ活を提案
                            </h2>
                            <p className="text-gray-600">
                                今までになかった新しいソロ活のアイディアを提案します。
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl text-pink-5000 font-semibold mb-4">
                                2. 体験したソロ活をシェア
                            </h2>
                            <p className="text-gray-600">
                                あなたが体験したソロ活を色んな人とシェアして、もっとアイディアを広げましょう！
                            </p>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
