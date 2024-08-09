"use client";

import React from "react";
import Heading from "@/app/components/ui-elements/heading";
import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import Balloon from "../../../../../images/activities/balloon.jpg";

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

type CategoryCardProps = {
    imageSrc: string;
    title: string;
    description: string;
    tags: { id: number; name: string }[];
};

const ActivitiesList: React.FC<CategoryCardProps> = ({
    imageSrc,
    title,
    description,
    tags,
}) => {
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
            <div className="container mx-auto px-4 mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {activities.map((activity) => (
                        <Link
                            key={activity.id}
                            href={`${process.env.NEXT_PUBLIC_ACTIVITY_URL}/${activity.id}`}
                            className="w-full"
                        >
                            <div className="bg-white rounded-2xl border border-gray-900 overflow-hidden text-center h-full flex flex-col w-full">
                                <div className="relative h-56 w-full">
                                    <Image
                                        src={Balloon}
                                        alt={activity.provider_name}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="p-3 flex-grow flex flex-col justify-between">
                                    <div>
                                        <h2 className="text-2xl font-bold mb-1 line-clamp-2">
                                            {activity.provider_name}
                                        </h2>
                                        <p className="text-base mb-2">
                                            カテゴリ: {activity.subcategory}
                                        </p>
                                    </div>
                                    <div>
                                        <div className="flex flex-wrap justify-center items-center gap-2 mb-2">
                                            <div className="flex items-center">
                                                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-base font-semibold">
                                                    時間帯
                                                </span>
                                                <span className="text-base ml-1">
                                                    {activity.time_zone}
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-base font-semibold">
                                                    レベル
                                                </span>
                                                <span className="text-base ml-1">
                                                    {activity.solo_level}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center space-x-4">
                                            <div className="flex items-center">
                                                <span className="text-red-500 mr-1">
                                                    ♡
                                                </span>
                                                <span className="text-base">
                                                    {activity.likes_count}
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-yellow-500 mr-1">
                                                    ★
                                                </span>
                                                <span className="text-base">
                                                    {activity.favorites_count}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ActivitiesList;