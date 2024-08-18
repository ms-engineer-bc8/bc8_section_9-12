"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const SoloTypeResult = () => {
    const [soloType, setSoloType] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchSoloType = async () => {
            const userId = localStorage.getItem('userId');
            if (!userId) {
                toast.error("ユーザーIDが見つかりません。再度ログインしてください。");
                router.push('/login');
                return;
            }

            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_SOLO_TYPE_URL}?userId=${userId}`);
                const data = await response.json();
                if (data.soloType) {
                    setSoloType(data.soloType);
                } else {
                    toast.error("ソロ活タイプの取得に失敗しました。もう一度診断を行ってください。");
                    router.push('/solo-type/test');
                }
            } catch (error) {
                console.error('Error:', error);
                toast.error("エラーが発生しました。もう一度お試しください。");
            }
        };

        fetchSoloType();
    }, [router]);

    const handleReturnToTop = () => {
        router.push('/');
    };

    return (
        <div className="container mx-auto max-w-md px-4 py-8">
            <div className="bg-white p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-center mb-6">
                    あなたのソロ活タイプは
                </h2>
                {soloType ? (
                    <p className="text-xl text-center mb-6">{soloType}</p>
                ) : (
                    <p className="text-center mb-6">読み込み中...</p>
                )}
                <div>
                    <button
                        onClick={handleReturnToTop}
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        TOPに戻る
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SoloTypeResult;