"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { PinkButton } from "@/app/components/ui-elements/button/button"

type SoloTypeResultProp = {
    solo_type: string;
}

const SoloTypeResult = () => {
    const [soloTypeData, setSoloTypeData] = useState<SoloTypeResultProp | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const fetchSoloType = async () => {
            try {
                setIsLoading(true);
                const solo_type = searchParams.get('solo_type');
                if (solo_type) {
                    setSoloTypeData({ solo_type });
                } else {
                    throw new Error('ソロ活タイプが見つかりません');
                }
            } catch (error) {
                console.error('Error:', error);
                toast.error("ソロ活タイプの取得に失敗しました。もう一度診断を行ってください。");
                router.push('/solo-type/test');
            } finally {
                setIsLoading(false);
            }
        };

        fetchSoloType();
    }, [router, searchParams]);

    const handleReturnToTop = () => {
        router.push('/');
    };

    if (isLoading) {
        return <div className="text-center py-8">読み込み中...</div>;
    }

    return (
        <div className="container mx-auto max-w-md px-4 py-8">
            <div className="bg-white p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-center mb-6">
                    あなたのソロ活タイプは
                </h2>
                {soloTypeData && soloTypeData.solo_type ? (
                    <p className="text-xl text-center mb-6">{soloTypeData.solo_type}</p>
                ) : (
                    <p className="text-center mb-6">ソロ活タイプが見つかりませんでした</p>
                )}
                <PinkButton onClick={handleReturnToTop}>
                    TOPに戻る
                </PinkButton>
            </div>
        </div>
    );
};

export default SoloTypeResult;