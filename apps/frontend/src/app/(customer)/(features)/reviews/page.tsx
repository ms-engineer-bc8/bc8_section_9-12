"use client";

import React from "react";
import useSWR from "swr";
import { ReviewProps } from "@/app/commons/types/types";
import ReviewForm from "./addReview";  // パスは適切に調整してください

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const apiUrl = `${process.env.NEXT_PUBLIC_API_REVIEWS_URL}`;

export default function Reviews() {
    const { data: reviews, error, isLoading } = useSWR<ReviewProps[]>(apiUrl, fetcher);

    if (isLoading) return <div>ローディング中...</div>;
    if (error) return <div>エラーが発生しました</div>;
    if (!reviews) return <div>レビューが見つかりません</div>;

    return (
        <div className="container max-w-3xl mx-auto p-5">
            <div className="w-96">
                <form className="max-w-md mx-auto">
                    <label
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                        Search
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Mockups, Logos..."
                            required
                        />
                        <button
                            type="submit"
                            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Search
                        </button>
                    </div>
                </form>

                <ReviewForm apiUrl={apiUrl} />

                <div className="space-y-4">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-white shadow-md rounded-lg p-4">
                            <p className="text-lg font-semibold">{review.nickname}</p>
                            <p className="text-gray-600 mt-2">{review.text}</p>
                            <div className="flex justify-between items-center mt-4">
                                <p className="text-sm text-gray-500">更新日: {new Date(review.update_date).toLocaleDateString()}</p>
                                <div className="flex space-x-4">
                                    <span className="flex items-center">
                                        <svg className="w-5 h-5 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                        </svg>
                                        {review.likes_count}
                                    </span>
                                    <span className="flex items-center">
                                        <svg className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        {review.favorites_count}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-8 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    画像をアップロードする
                </button>
            </div>
        </div>
    );
}
