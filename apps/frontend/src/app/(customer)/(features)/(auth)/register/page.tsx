"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { SignUpFormProps } from "@/app/commons/types/types";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
    const { register, handleSubmit } = useForm<SignUpFormProps>();
    const router = useRouter();

    const onSubmit = async (data: SignUpFormProps) => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_USERS_URL}`,
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
            <h2 className="text-2xl font-bold text-center mb-6">ユーザ登録</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        メールアドレス
                    </label>
                    <input
                        {...register("email")}
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="abc@test.com"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        パスワード
                    </label>
                    <input
                        {...register("password")}
                        id="password"
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="●●●●●●●●"
                    />
                </div>
                <div>
                    <label htmlFor="nickname" className="block text-sm font-medium text-gray-700 mb-1">
                        ニックネーム
                    </label>
                    <input
                        {...register("nickname")}
                        id="nickname"
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="ニックネーム"
                    />
                </div>
                <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                        年齢
                    </label>
                    <select
                        {...register("age")}
                        id="age"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">選択してください</option>
                        <option value="18-20">18〜20歳</option>
                        <option value="21-25">21〜25歳</option>
                        <option value="26-30">26〜30歳</option>
                        <option value="31-35">31〜35歳</option>
                        <option value="36-40">36〜40歳</option>
                        <option value="41-45">41〜45歳</option>
                        <option value="46-50">46〜50歳</option>
                        <option value="51-55">51〜55歳</option>
                        <option value="56-60">56〜60歳</option>
                        <option value="61-65">61〜65歳</option>
                        <option value="66+">66歳以上</option>
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