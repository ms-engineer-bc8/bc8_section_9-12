"use client";

import React from "react";
import Heading from "@/app/components/ui-elements/heading";
import useSWR from "swr";
import { ActivitiesProps } from "@/app/commons/types/types";
import ActivityCard from "@/app/components/ui-elements/activity/activity";

const ActivitiesList: React.FC = () => {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const categoryId = 2;
    const apiUrl = `${process.env.NEXT_PUBLIC_API_ACTIVITIES_URL}/${categoryId}`;
    const {
        data: activities,
        error,
        isLoading,
    } = useSWR<ActivitiesProps[]>(apiUrl, fetcher);

    if (isLoading) return <div>ローディング中...</div>;
    if (error) return <div>エラーが発生しました</div>;
    if (!activities) return <div>アクティビティが見つかりません</div>;

    return (
        <div>
            <Heading>スペシャル体験ソロ活✨</Heading>
            <div className="container mx-auto px-4 mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {activities.map((activity) => (
                        <ActivityCard key={activity.id} activity={activity} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ActivitiesList;