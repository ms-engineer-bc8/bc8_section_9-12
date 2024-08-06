"use client"

import React from "react";
import Heading from "@/app/components/ui-elements/heading";
import useSWR from "swr";
import Link from "next/link";

interface ApiResponse {
    message: string;
}

const ActivitiesList: React.FC = () => {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR<ApiResponse>(
        "http://localhost:8000/activities",
        fetcher
    );

    if (isLoading) return <div>ローディング中...</div>;
    if (error) return <div>エラーが発生しました: {error.message}</div>;
    if (!data) return <div>データが見つかりません</div>;

    return (
        <div>
            <Heading>スペシャル体験ソロ活</Heading>
            <p>APIからのメッセージ: {data.message}</p>
        </div>
    );
};

const SpecialCompanyList = () => {
    return (
        <div>
            <Heading>スペシャル体験ソロ活</Heading>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {specialActivities.map((activity) => (
                        <Link
                            key={activity.id}
                            href={{
                                pathname: "/activity/2",
                                query: { company: activity.company },
                            }}
                        >
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-xl font-bold mb-2">
                                    {activity.company}
                                </h2>
                                <p>時間帯: {activity.time}</p>
                                <p>レベル: {activity.level}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SpecialCompanyList;
