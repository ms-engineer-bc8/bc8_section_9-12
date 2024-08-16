import React from "react";
import CategoryCard from "../card/commonCard";
import SpecialCategoryImage from "../../../commons/images/category/special.jpg";

const specialCategoryTags = [
    { id: 1, name: "シティホテル🏨" },
    { id: 2, name: "気球🌌" },
    { id: 3, name: "リムジン🚖" },
    { id: 4, name: "ヘリクルーズ🚢" },
];

const SpecialCategoryCard: React.FC = () => {
    return (
        <CategoryCard
            imageSrc={SpecialCategoryImage}
            title="スペシャル体験ソロ活"
            description="あなたのためだけのスペシャル♡"
            tags={specialCategoryTags}
        />
    );
};

export default SpecialCategoryCard;
