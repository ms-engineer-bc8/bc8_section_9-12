"use client";

import React from "react";
import { ActivityProps } from "@/app/commons/types/types";
import Heading from "@/app/components/ui-elements/heading";
import SubHeading from "@/app/components/ui-elements/subheading";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import LimousineImage from "../../../../commons/images/activities/limousine.jpg"
import DressImage from "../../../../commons/images/activities/dress.jpg";

const Limousine: React.FC = () => {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const activityId = 1;
    const apiUrl = `${process.env.NEXT_PUBLIC_API_ACTIVITY_URL}/${activityId}`;
    const {
        data: activity,
        error,
        isLoading,
    } = useSWR<ActivityProps>(apiUrl, fetcher);

    if (isLoading) return <div>ローディング中...</div>;
    if (error) return <div>エラーが発生しました</div>;
    if (!activity) return <div>アクティビティが見つかりません</div>;

    return (
        <div className="max-w-3xl mx-auto p-5">
            <Heading>{activity.provider_name}</Heading>
            <div className="relative w-full h-96 mb-6 mt-6">
                <Image
                    src={LimousineImage}
                    alt={activity.provider_name}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
                    className="rounded-xl"
                />
            </div>
            <div className="m-10">
                <SubHeading>{activity.title}</SubHeading>
                <p className="text-left mb-6 text-lg space-x-2">
                    {activity.discription}
                </p>
            </div>
            <SubHeading>おすすめのプラン</SubHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative w-full h-72">
                    <Image
                        src={DressImage}
                        alt={activity.title}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
                        className="rounded-xl"
                    />
                </div>
                <div className="flex flex-col justify-center ">
                    <p className="text-xl font-bold mb-2">
                        {activity.plan_name}
                    </p>
                    <h4 className="text-xl font-semibold font-purple-500 m-2">
                        こんなサービスが付いてくる♪
                    </h4>
                    <li className="text-lg">ウェルカムドリンク</li>
                    <li className="text-lg">ドレスコード</li>
                    <li className="text-lg">写真撮影</li>
                    <p className="text-3xl font-bold m-2">
                        {activity.price.toLocaleString()}円
                    </p>
                    <Link href="https://lalalimousine.com/" passHref>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg m-2">
                            予約する
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Limousine;
