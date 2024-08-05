"use client";

import React from "react";
import useSWR from "swr";
import Heading from "@/app/components/ui-elements/heading";

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
    if (!data) return <div>データが見つかりません。</div>;

    return (
        <div>
            <Heading>スペシャル体験ソロ活</Heading>
            <p>APIからのメッセージ: {data.message}</p>
        </div>
    );
};

export default ActivitiesList;
