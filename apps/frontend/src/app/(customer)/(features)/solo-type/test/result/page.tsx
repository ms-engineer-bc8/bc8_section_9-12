"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useToken } from "@/app/commons/contexts/contexts";
import { toast } from "react-toastify";
import { PinkButton } from "@/app/components/ui-elements/button/button";
import Image from "next/image";
import SpecialType from "../../../../../commons/images/types/special.png";

type SoloTypeResultProp = {
    solo_type: string;
    userId: string;
};

const SoloTypeResult = () => {
    const { token } = useToken();
    const router = useRouter();

    if (token === ""){
        router.push("/login");
    }

    const [soloTypeData, setSoloTypeData] = useState<SoloTypeResultProp | null>(
        null
    );
    const [isLoading, setIsLoading] = useState(true);
    const searchParams = useSearchParams();

    useEffect(() => {
        const fetchSoloType = () => {
            try {
                const solo_type = searchParams.get("solo_type");
                const userId = searchParams.get("userId");
                if (solo_type && userId) {
                    setSoloTypeData({ solo_type, userId });
                } else {
                    throw new Error(
                        "ソロ活タイプまたはユーザーIDが見つかりません"
                    );
                }
            } catch (error) {
                console.error("Error:", error);
                toast.error(
                    "ソロ活タイプの取得に失敗しました。もう一度診断を行ってください。"
                );
                router.push("/solo-type/test");
            } finally {
                setIsLoading(false);
            }
        };

        fetchSoloType();
    }, [router, searchParams]);

    const handleReturnToTop = () => {
        router.push("/");
    };

    if (isLoading) {
        return <div className="text-center py-8">読み込み中...</div>;
    }

    return (
        <div className="container mx-auto max-w-xl p-4">
            <div className="bg-white py-10 px-18 rounded-2xl">
                <h2 className="text-2xl font-bold text-center mb-6">
                    あなたのソロ活タイプは
                </h2>
                {soloTypeData && soloTypeData.solo_type ? (
                    <>
                        <h2 className="text-center mb-6 text-pink-500 font-bold">
                            {soloTypeData.solo_type}
                        </h2>
                        <div className="flex justify-center mb-6">
                            <Image
                                src={SpecialType}
                                alt={soloTypeData.solo_type}
                                width={350}
                                height={350}
                            />
                        </div>
                        <div>
                            <p className="mb-10 mt-4 px-14">
                                現代の優雅な放浪者、それがあなた！財布の中身は「一生に一度の体験」のため。
                                街でリムジンを見れば「私の車かしら」とつぶやき、休日の予定は「気球で空中ピクニック」。周りはきっと羨望の眼差し！
                                さぁ、特別な体験を求めて街へ。財布には気をつけて、次はソロ宇宙旅行かも？🚀💫
                            </p>
                        </div>
                    </>
                ) : (
                    <p className="text-center mb-6">
                        ソロ活タイプが見つかりませんでした
                    </p>
                )}
                <div className="flex justify-center px-14">
                    <PinkButton onClick={handleReturnToTop}>
                        TOPに戻る
                    </PinkButton>
                </div>
            </div>
        </div>
    );
};

export default SoloTypeResult;
