import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ActivitiesProps } from "@/app/commons/types/types";
import LikeButton from "../button/like/like";
import FavoriteButton from "../button/favorite/favorite";

type ActivityCardProps = {
    activity: ActivitiesProps;
};

const S3_BASE_URL = `https://${process.env.NEXT_PUBLIC_S3_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_REGION}.amazonaws.com/`;

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
    const getImageUrl = (image: string) => {
        if (image.startsWith('http')) {
            // 完全な URL の場合はそのまま返す
            return image;
        } else {
            // ファイル名のみの場合は S3 の URL を構築
            return `${S3_BASE_URL}${image}`;
        }
    };

    const imageUrl = getImageUrl(activity.image);

    return (
        <div className="flex-none w-72">
            <div className="bg-white rounded-2xl overflow-hidden text-center h-full flex flex-col transition-all duration-300 ease-in-out hover:shadow-lg">
                <Link
                    href={`${process.env.NEXT_PUBLIC_ACTIVITY_URL}/${activity.id}`}
                    className="block w-full h-full"
                >
                    <div className="relative h-48 w-full">
                        <Image
                            src={imageUrl}
                            alt={activity.provider_name}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </Link>
                <div className="p-4 flex-grow flex flex-col justify-between">
                    <div>
                        <h2 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                            {activity.provider_name}
                        </h2>
                    </div>
                    <div>
                        <div className="flex flex-wrap gap-2 justify-center mb-3">
                            <span className="text-tiny px-2 py-1 bg-pink-100 text-pink-500 font-semibold rounded-full">
                                時間帯⏰
                            </span>
                            <span className="font-medium">
                                {activity.time_zone}
                            </span>
                            <span className="text-tiny px-2 py-1 bg-pink-100 text-pink-500 font-semibold rounded-full">
                                レベル⬆️
                            </span>
                            <span className="font-medium">
                                {activity.solo_level}
                            </span>
                        </div>
                        <div className="flex justify-center items-center gap-2 font-medium">
                            <LikeButton initialLikes={activity.likes_count} />
                            <FavoriteButton
                                initialFavorites={activity.favorites_count}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActivityCard;