"use client";

import React from "react";
import Heading from "@/app/components/ui-elements/heading";
import SubHeading from "@/app/components/ui-elements/subheading";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";

type ActivityDetail = {
    provider_name: string;
    image_large: string;
    title: string;
    discription: string;
    plan_name: string;
    price: number;
    image_small: string;
    coupon_discount_rate: number;
    url: string;
};

type CategoryCardProps = {
    imageSrc: string;
    title: string;
    description: string;
    tags: { id: number; name: string }[];
};

const Limousine: React.FC<CategoryCardProps> = ({
    imageSrc,
    title,
    description,
    tags,
}) => {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const activityId = 1;
    const apiUrl = `${process.env.NEXT_PUBLIC_API_ACTIVITY_URL}/${activityId}`;
    const {
        data: activity,
        error,
        isLoading,
    } = useSWR<ActivityDetail>(apiUrl, fetcher);

    if (isLoading) return <div>ローディング中...</div>;
    if (error) return <div>エラーが発生しました</div>;
    if (!activity) return <div>アクティビティが見つかりません</div>;

    return (
        <div className="container mx-auto p-5">
            <p className="text-center">{activity.title}</p>
            <Heading>{activity.provider_name}</Heading>
            <p className="text-center">{activity.discription}</p>
            <SubHeading>PLAN</SubHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <Image
                        src={activity.image_large}
                        alt={activity.title}
                        width={500}
                        height={300}
                        layout="responsive"
                    />
                </div>
                <div>
                    <p>{activity.plan_name}</p>
                    <h4>{activity.price.toLocaleString()}円</h4>
                    <Link href="https://lalalimousine.com/">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            予約する
                        </button>
                    </Link>
                    <p>{activity.coupon_discount_rate}</p>
                </div>
            </div>
        </div>
    );
};

export default Limousine;
