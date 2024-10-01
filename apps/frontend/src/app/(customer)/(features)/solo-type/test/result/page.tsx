import React from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getImageUrl } from "@/app/commons/utils/imageUtils";
import { PinkButton } from "@/app/components/ui-elements/button/button";
import { SoloTypeResultProp } from "@/app/commons/types/types";
import { soloTypeDataList, SoloTypeData } from "./soloTypeData";

async function getSoloType(solo_type: string | null, userId: string | null): Promise<SoloTypeResultProp | null> {
    if (solo_type && userId) {
        return { solo_type, userId };
    }
    return null;
}

export default async function SoloTypeResult({
    searchParams,
}: {
    searchParams: { solo_type: string; userId: string };
}) {
    const soloTypeData = await getSoloType(searchParams.solo_type, searchParams.userId);

    if (!soloTypeData) {
        redirect("/solo-type/test");
    }

    const typeData = soloTypeDataList.find(data => data.type === soloTypeData.solo_type);

    if (!typeData) {
        redirect("/solo-type/test");
    }

    return (
        <div className="container mx-auto max-w-xl p-4">
            <div className="bg-white py-10 px-18 rounded-2xl">
                <h2 className="text-2xl font-bold text-center mb-6">
                    あなたのソロ活タイプは
                </h2>
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
                <div>
                    <p className="mb-10 mt-4 px-14 text-base text-center">
                        {typeData.description.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                </div>
                <div className="flex justify-center px-14">
                    <PinkButton href="/">TOPに戻る</PinkButton>
                </div>
            </div>
        </div>
    );
}
