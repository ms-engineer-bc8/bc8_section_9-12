import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ActivitiesProps } from "@/app/commons/types/types";
import Balloon from "../../../commons/images/activities/balloon.jpg";
import LikeButton from "../button/like/like";
import FavoriteButton from "../button/favorite/favorite";

type ActivityCardProps = {
    activity: ActivitiesProps;
};

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
    return (
        <div className="flex-none w-72">
            <Link
                href={`${process.env.NEXT_PUBLIC_ACTIVITY_URL}/${activity.id}`}
                className="block w-full h-full"
            >
                <div className="bg-white rounded-2xl overflow-hidden text-center h-full flex flex-col transition-all duration-300 ease-in-out hover:shadow-lg">
                    <div className="relative h-40 w-full">
                        <Image
                            src={Balloon}
                            alt={activity.provider_name}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="p-3 flex-grow flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2 line-clamp-2">
                                {activity.provider_name}
                            </h2>
                        </div>
                        <div>
                            <div className="flex flex-wrap gap-2 justify-center mb-3">
                                <span className="px-2 py-1 bg-pink-100 text-pink-500 text-sm font-medium rounded-full">
                                    時間帯⏰
                                </span>
                                {activity.time_zone}
                                <span className="px-2 py-1 bg-pink-100 text-pink-500 text-sm font-medium rounded-full">
                                    レベル⬆️
                                </span>
                                {activity.solo_level}
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <LikeButton
                                    initialLikes={activity.likes_count}
                                />
                                <FavoriteButton
                                    initialFavorites={activity.favorites_count}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ActivityCard;
