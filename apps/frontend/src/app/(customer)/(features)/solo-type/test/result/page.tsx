"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useToken } from "@/app/commons/contexts/contexts";
import { toast } from "react-toastify";
import { getImageUrl } from "@/app/commons/utils/imageUtils";
import { PinkButton } from "@/app/components/ui-elements/button/button";
import { soloTypeDataList } from "./soloTypeData";

const SpecialType = getImageUrl("special.png");

export default function SoloTypeResult() {
    const { token } = useToken();
    const router = useRouter();

    if (token === "") {
        router.push("/login");
    }

    const searchParams = useSearchParams();
    const solo_type = searchParams.get("solo_type");
    const userId = searchParams.get("userId");

    if(!solo_type || !userId) {
        toast.error(
            "ソロ活タイプの取得に失敗しました。もう一度診断を行ってください。"
        );
        router.push("/solo-type/test");
    };

    const typeData = soloTypeDataList.find(data => data.type == solo_type);

    const handleReturnToTop = () => {
        router.push("/");
    };

    return (
        <div className="container mx-auto max-w-xl p-4">
            <div className="bg-white py-10 px-18 rounded-2xl">
                <h2 className="text-2xl font-bold text-center mb-6">
                    あなたのソロ活タイプは
                </h2>
                {typeData ? (
                    <>
                        <h2 className="text-center mb-6 text-pink-500 font-bold">
                            「{typeData.type}」
                        </h2>
                        <div className="flex justify-center mb-6">
                            <Image
                                src={getImageUrl(typeData.imageSrc)}
                                alt={typeData.type}
                                width={350}
                                height={350}
                            />
                        </div>
                        <p className="mb-10 mt-4 px-14 text-base text-center">
                            {typeData.description.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </p>
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
}

