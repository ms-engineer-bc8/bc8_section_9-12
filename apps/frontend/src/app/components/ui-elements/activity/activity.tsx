import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ActivitiesProps } from "@/app/commons/types/types";
import Balloon from "../../../../../commons/images/activities/balloon.jpg";

interface ActivityCardProps {
    activity: ActivitiesProps;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
    return (
        <Link
            href={`${process.env.NEXT_PUBLIC_ACTIVITY_URL}/${activity.id}`}
            className="w-full"
        >
            <div className="block w-full h-full bg-white rounded-2xl overflow-hidden text-center">
                <div className="transition-all duration-300 ease-in-out transform hover:scale-105">
                    <div className="relative h-56 w-full overflow-hidden">
                        <Image
                            src={Balloon}
                            alt={activity.provider_name}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="p-3 flex-grow flex flex-col justify-between ">
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
                                    <span className="text-red-500 mr-1">♡</span>
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
                å
            </div>
        </Link>
    );
};

export default ActivityCard;
