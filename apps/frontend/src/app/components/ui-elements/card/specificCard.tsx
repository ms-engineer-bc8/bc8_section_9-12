import React from "react";
import Link from "next/link";
import CategoryCard from "./commonCard";

type CategorySpecificCardProps = {
    href: string;
    imageSrc: string;
    title: string;
    description: string;
    tags: { id: number; name: string }[];
};

const CategorySpecificCard: React.FC<CategorySpecificCardProps> = ({
    href,
    imageSrc,
    title,
    description,
    tags,
}) => {
    return (
        <li className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.667rem)] lg:w-[calc(25%-0.75rem)]">
            <Link href={href} className="block w-full h-full">
                <CategoryCard
                    imageSrc={imageSrc}
                    title={title}
                    description={description}
                    tags={tags}
                />
            </Link>
        </li>
    );
};

export default CategorySpecificCard;
