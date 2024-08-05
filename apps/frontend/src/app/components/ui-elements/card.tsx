import React from "react";
import Image from "next/image";

type Tag = {
    id: number;
    name: string;
};

type CategoryCardProps = {
    imageSrc: string;
    title: string;
    description: string;
    tags: Tag[];
};

const CategoryCard: React.FC<CategoryCardProps> = ({
    imageSrc,
    title,
    description,
    tags,
}) => {
    return (
        <div className="bg-white rounded-2xl border border-gray-900 border-t overflow-hidden text-center h-full flex flex-col">
            <div className="relative h-56 w-full">
                <Image
                    src={imageSrc}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2 truncate">
                        {title}
                    </h2>
                    <p className="text-base text-gray-600 mb-3 line-clamp-2">
                        {description}
                    </p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                    {tags.map((tag) => (
                        <span
                            key={tag.id}
                            className="px-2 py-1 border border-gray-900 border-t bg-pink-100 text-pink-800 text-sm font-medium rounded-full"
                        >
                            {tag.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;