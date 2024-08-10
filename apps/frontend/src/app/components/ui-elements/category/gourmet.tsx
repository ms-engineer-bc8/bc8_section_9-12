import React from "react";
import CategoryCard from "../card/commonCard";
import GourmetCategoryImage from "../../../images/category/gourmet.jpg";

const gourmetCategoryTags = [
    { id: 1, name: "焼肉" },
    { id: 2, name: "寿司" },
    { id: 3, name: "中華料理" },
    { id: 4, name: "フレンチ" },
];

const GourmetCategoryCard: React.FC = () => {
    return (
        <CategoryCard
            imageSrc={GourmetCategoryImage}
            title="グルメ堪能ソロ活"
            description="自分の五感と向き合う..."
            tags={gourmetCategoryTags}
        />
    );
};

export default GourmetCategoryCard;
