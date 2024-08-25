"use client";

import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { SoloTypeFormProps } from "@/app/commons/types/types";
import { useRouter, useSearchParams } from "next/navigation";
import { PinkButton } from "@/app/components/ui-elements/button/button";

const SoloTypeForm: React.FC = () => {
    const { register, handleSubmit } = useForm<SoloTypeFormProps>();
    const router = useRouter();
    const searchParams = useSearchParams();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        const userIdFromParams = searchParams.get('userId');
        if (userIdFromParams) {
            setUserId(userIdFromParams);
        } else {
            console.error('ユーザIDが見つかりません');
        }
    }, [searchParams, router]);

    const onSubmit: SubmitHandler<SoloTypeFormProps> = async (data) => {
        if (!userId) {
            console.error('ユーザIDが空です');
            return;
        }

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_USERS_TYPETEST_URL}/1`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            if (!response.ok) {
                const errorBody = await response.json();
                console.error("Server error response:", errorBody);
                setErrorMessage(JSON.stringify(errorBody, null, 2));
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log("成功", result);

            const queryParams = new URLSearchParams({
                solo_type: result.solo_type,
                userId: userId,
            }).toString();

            router.push(`/solo-type/test/result?${queryParams}`);
        } catch (error) {
            console.error("エラー:", error);
        }
    };

    return (
        <div className="container mx-auto max-w-md px-4 py-8">
            <div className="bg-white p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-center mb-6">
                    あなたのソロ活タイプを診断！
                </h2>
                {errorMessage && (
                    <div
                        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
                        role="alert"
                    >
                        <strong className="font-bold">エラー:</strong>
                        <pre className="mt-2 whitespace-pre-wrap">
                            {errorMessage}
                        </pre>
                    </div>
                )}
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
                            {...register("is_planned", {
                                setValueAs: (value: string) => value === "true",
                            })}
                            id="is_planned"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">選択してください</option>
                            <option value="true">計画的である</option>
                            <option value="false">計画的ではない</option>
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
                            {...register("weekend_plan_preference", {
                                setValueAs: (value: string) => value === "true",
                            })}
                            id="weekend_plan_preference"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">選択してください</option>
                            <option value="true">入れたい</option>
                            <option value="false">入れたくない</option>
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
                        <PinkButton type="submit">診断する</PinkButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SoloTypeForm;

// "use client";

// import React, { useState, useEffect } from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { SoloTypeFormProps } from "@/app/commons/types/types";
// import { useRouter, useSearchParams } from "next/navigation";
// import { PinkButton } from "@/app/components/ui-elements/button/button";
// import { questions } from "../solo-type/test/questions";

// const SoloTypeForm: React.FC = () => {
//     const { register, handleSubmit, setValue } = useForm<SoloTypeFormProps>();
//     const router = useRouter();
//     const searchParams = useSearchParams();
//     const [errorMessage, setErrorMessage] = useState<string | null>(null);
//     const [userId, setUserId] = useState<string | null>(null);
//     const [currentQuestion, setCurrentQuestion] = useState(0);

//     useEffect(() => {
//         const userIdFromParams = searchParams.get("userId");
//         if (userIdFromParams) {
//             setUserId(userIdFromParams);
//         } else {
//             console.error("ユーザIDが見つかりません");
//         }
//     }, [searchParams, router]);

//     const onSubmit: SubmitHandler<SoloTypeFormProps> = async (data) => {
//         if (!userId) {
//             console.error("ユーザIDが空です");
//             return;
//         }

//         try {
//             const response = await fetch(
//                 `${process.env.NEXT_PUBLIC_API_USERS_TYPETEST_URL}/1`,
//                 {
//                     method: "PUT",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify(data),
//                 }
//             );
//             if (!response.ok) {
//                 const errorBody = await response.json();
//                 console.error("Server error response:", errorBody);
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             const result = await response.json();
//             console.log("成功", result);

//             const queryParams = new URLSearchParams({
//                 solo_type: result.solo_type,
//                 userId: userId,
//             }).toString();

//             router.push(`/solo-type/test/result?${queryParams}`);
//         } catch (error) {
//             console.error("エラー:", error);
//         }
//     };

//     const handleNext = () => {
//         if (currentQuestion < questions.length - 1) {
//             setCurrentQuestion(currentQuestion + 1);
//         }
//     };

//     const handlePrev = () => {
//         if (currentQuestion > 0) {
//             setCurrentQuestion(currentQuestion - 1);
//         }
//     };

//     const handleOptionSelect = (value: string) => {
//         setValue(questions[currentQuestion].id, value);
//         if (currentQuestion < questions.length - 1) {
//             handleNext();
//         }
//     };

//     return (
//         <div className="container bg-white mx-auto my-5 max-w-md px-4 py-8 rounded-2xl">
//             <h2 className="text-center mb-6">
//                 あなたのソロ活タイプを診断🔍
//             </h2>
//             <div>
//                 <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//                     <div className="mb-8">
//                         <h3 className="font-semibold mb-4 text-pink-500 text-center">
//                             {questions[currentQuestion].question}
//                         </h3>

//                         <div className="space-y-4">
//                             {questions[currentQuestion].options.map(
//                                 (option) => (
//                                     <button
//                                         key={option.value}
//                                         type="button"
//                                         onClick={() =>
//                                             handleOptionSelect(option.value)
//                                         }
//                                         className="w-full py-3 px-4 border-2 border-purple-300 rounded-full shadow-sm text-sm font-medium text-purple-700 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
//                                     >
//                                         {option.label}
//                                     </button>
//                                 )
//                             )}
//                         </div>
//                     </div>
//                     <div className="flex justify-between">
//                         <button
//                             type="button"
//                             onClick={handlePrev}
//                             disabled={currentQuestion === 0}
//                             className="px-4 py-2 border-2 border-pink-300 rounded-full shadow-sm text-sm font-medium text-pink-700 hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50 transition-colors duration-200"
//                         >
//                             ← 前へ
//                         </button>
//                         {currentQuestion === questions.length - 1 ? (
//                             <PinkButton type="submit">診断する 🎊</PinkButton>
//                         ) : (
//                             <button
//                                 type="button"
//                                 onClick={handleNext}
//                                 className="px-4 py-2 border-2 border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
//                             >
//                                 次へ →
//                             </button>
//                         )}
//                     </div>
//                 </form>
//             </div>
//             {errorMessage && (
//                 <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md animate-bounce">
//                     😅 {errorMessage}
//                 </div>
//             )}
//             <div className="mt-6 text-center text-sm text-gray-500">
//                 あと {questions.length - currentQuestion - 1} 問で診断完了！ 🏁
//             </div>
//         </div>
//     );
// };

// export default SoloTypeForm;

