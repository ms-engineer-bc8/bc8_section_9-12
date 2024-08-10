import React from "react";
import CategoryCard from "../card/commonCard";
import RelaxCategoryImage from "../../../commons/images/category/relax.jpg"

const relaxCategoryTags = [
    { id: 1, name: "プラネタリウム" },
    { id: 2, name: "美術館＆博物館" },
    { id: 3, name: "銭湯" },
    { id: 4, name: "夜景" },
];

const RelaxCategoryCard: React.FC = () => {
    return (
        <CategoryCard
            imageSrc={RelaxCategoryImage}
            title="リラックス系ソロ活"
            description="心がほぐれる〜"
            tags={relaxCategoryTags}
        />
    );
};

export default RelaxCategoryCard;
