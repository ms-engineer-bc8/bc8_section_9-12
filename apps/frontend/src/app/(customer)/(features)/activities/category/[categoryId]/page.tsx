"use client";

import React from "react";
import Heading from "@/app/components/ui-elements/heading";
import useSWR from "swr";
import Link from "next/link";

type Activity = {
    id: number;
    subcategory: string;
    image: string;
    provider_name: string;
    time_zone: string;
    solo_level: string;
    likes_count: number;
    favorites_count: number;
};

const ActivitiesList: React.FC = () => {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const categoryId = 2;
    const apiUrl = `${process.env.NEXT_PUBLIC_API_ACTIVITIES_URL}/${categoryId}`;
    const {
        data: activities,
        error,
        isLoading,
    } = useSWR<Activity[]>(apiUrl, fetcher);

    if (isLoading) return <div>ローディング中...</div>;
    if (error) return <div>エラーが発生しました</div>;
    if (!activities || activities.length === 0)
        return <div>アクティビティが見つかりません</div>;

    return (
        <div>
            <Heading>スペシャル体験ソロ活</Heading>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activities.map((activity) => (
                        <Link
                            key={activity.id}
                            href={`${process.env.NEXT_PUBLIC_ACTIVITY_URL}/${activity.id}`}
                        >
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-xl font-bold mb-2">
                                    {activity.provider_name}
                                </h2>
                                <p>カテゴリ: {activity.subcategory}</p>
                                <p>時間帯: {activity.time_zone}</p>
                                <p>レベル: {activity.solo_level}</p>
                                <p>Likes: {activity.likes_count}</p>
                                <p>お気に入り: {activity.favorites_count}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ActivitiesList;
