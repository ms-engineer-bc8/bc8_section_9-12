"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { SoloTypeFormProps } from "@/app/commons/types/types";
import { useParams } from "next/navigation";

const SoloTypeForm: React.FC<SoloTypeFormProps> = (data) => {
    const { register, handleSubmit } = useForm<SoloTypeFormProps>();
    const params = useParams();

    const onSubmit = async (data: SoloTypeFormProps) => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_USERS_TYPETEST_URL}`,
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );
            const result = await response.json();
            console.log("成功", result);
        } catch (error) {
            console.error("エラー:", error);
        }
    };

    return (
        <div className="container mx-auto max-w-md px-4 py-8">
            <h2 className="text-2xl font-bold text-center mb-6">
                あなたのソロ活タイプを診断！
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <label
                        htmlFor="solo_level"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        ソロ活の経験は？
                    </label>
                    <select
                        {...register("solo_level")}
                        id="solo_level"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">選択してください</option>
                        <option value="初心者">初心者</option>
                        <option value="経験者">経験者</option>
                    </select>
                </div>
                <div>
                    <label
                        htmlFor="activity_preference"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        インドア派？アウトドア派？
                    </label>
                    <select
                        {...register("activity_preference")}
                        id="activity_preference"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">選択してください</option>
                        <option value="インドア派">インドア派</option>
                        <option value="アウトドア派">アウトドア派</option>
                    </select>
                </div>
                <div>
                    <label
                        htmlFor="time_preference"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        朝型？夜型？
                    </label>
                    <select
                        {...register("time_preference")}
                        id="time_preference"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">選択してください</option>
                        <option value="朝型">朝型</option>
                        <option value="夜型">夜型</option>
                    </select>
                </div>
                <div>
                    <label
                        htmlFor="is_planned"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        計画的？
                    </label>
                    <select
                        {...register("is_planned")}
                        id="is_planned"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">選択してください</option>
                        <option value="計画的である">計画的である</option>
                        <option value="計画的ではない">計画的ではない</option>
                        計画的である
                    </select>
                </div>
                <div>
                    <label
                        htmlFor="weekend_plan_preference"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        週末は必ず予定を入れたい？
                    </label>
                    <select
                        {...register("weekend_plan_preference")}
                        id="weekend_plan_preference"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">選択してください</option>
                        <option value="入れたい">入れたい</option>
                        <option value="入れたくない">入れたくない</option>
                        計画的である
                    </select>
                </div>
                <div>
                    <label
                        htmlFor="after_work_preference"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        仕事帰りは、 ①おいしいものを食べて帰る？
                        ②癒しとリフレッシュを求める？
                    </label>
                    <select
                        {...register("after_work_preference")}
                        id="after_work_preference"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">選択してください</option>
                        <option value="おいしいものを食べて帰る">
                            ①おいしいものを食べて帰る
                        </option>
                        <option value="癒しとリフレッシュを求める">
                            ②癒しとリフレッシュを求める
                        </option>
                    </select>
                </div>
                <div>
                    <label
                        htmlFor="comfort_adventure"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        安定より刺激を求める？
                    </label>
                    <select
                        {...register("comfort_adventure")}
                        id="age"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">選択してください</option>
                        <option value="安定を求める">安定を求める</option>
                        <option value="刺激を求める">刺激を求める</option>
                    </select>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        登録する
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SoloTypeForm;