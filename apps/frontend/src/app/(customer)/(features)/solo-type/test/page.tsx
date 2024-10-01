"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { SoloTypeFormProps } from "@/app/commons/types/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useToken } from "@/app/commons/contexts/contexts";
import { PinkButton } from "@/app/components/ui-elements/button/button";
import { questions } from "./questions";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SoloTypeForm: React.FC = () => {
    const { token } = useToken();
    const router = useRouter();

    if (token === "") {
        router.push("/login");
    }

    const { handleSubmit, setValue, watch } = useForm<SoloTypeFormProps>();
    const watchedFields = watch();
    const [swiperInstance, setSwiperInstance] = useState<any>(null);
    const searchParams = useSearchParams();
    const userIdFromParams = searchParams.get("userId");
    const [userId, setUserId] = useState<string | null>(userIdFromParams);

    // 回答を送付
    const onSubmit: SubmitHandler<SoloTypeFormProps> = async (data) => {
        if (!userId) {
            console.error("ユーザIDが空です");
            return;
        }
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_USERS_TYPETEST_URL}/${userId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );
            const result = await response.json();
            const queryParams = new URLSearchParams({
                solo_type: result.solo_type,
                userId: userId,
            }).toString();
            router.push(`/solo-type/test/result?${queryParams}`);
        } catch (error) {
            console.error("エラー:", error);
        }
    };

    // 全ての項目を選択したかチェック
    const isFormComplete = questions.every(
        (question) =>
            watchedFields[question.id as keyof SoloTypeFormProps] !== undefined
    );

    // 回答を選択したら自動で次の画面に遷移
    const handleOptionSelect = (
        questionId: keyof SoloTypeFormProps,
        value: string | boolean
    ) => {
        setValue(questionId, value);
        if (swiperInstance && swiperInstance.slideNext) {
            swiperInstance.slideNext();
        }
    };

    return (
        <div className="container mx-auto my-5 max-w-xl bg-white p-10 rounded-2xl">
            <h2 className="text-center mb-4 mt-2">あなたのソロ活タイプを診断🔍</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => setSwiperInstance(swiper)}
                    className="custom-swiper"
                >
                    {questions.map((question, index) => (
                        <SwiperSlide key={question.id}>
                            <div className="mb-8">
                                <h3 className="font-semibold m-6 text-pink-500 text-center">
                                    「{question.question}」
                                </h3>
                                <div className="flex justify-center items-center mb-6">
                                    <div className="text-6xl">
                                        {question.icon}
                                    </div>
                                </div>
                                <div className="space-y-4 items-center mx-16 mt-8">
                                    {question.options.map((option) => (
                                        <button
                                            key={option.value.toString()}
                                            type="button"
                                            onClick={() =>
                                                handleOptionSelect(
                                                    question.id as keyof SoloTypeFormProps,
                                                    option.value
                                                )
                                            }
                                            className={`w-full py-3 px-4 border ${
                                                watchedFields[
                                                    question.id as keyof SoloTypeFormProps
                                                ] === option.value
                                                    ? "bg-pink-100 border-pink-500 text-pink-500"
                                                    : "border-pink-300 text-pink-500 bg-white hover:bg-pink-100"
                                            } rounded-full shadow-sm text-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors duration-200`}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            {index === questions.length - 1 && (
                                <div className="flex justify-center m-8">
                                    <PinkButton
                                        type="submit"
                                        disabled={!isFormComplete}
                                        className={
                                            !isFormComplete ? "opacity-50" : ""
                                        }
                                    >
                                        診断する
                                    </PinkButton>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </form>
        </div>
    );
};

export default SoloTypeForm;
