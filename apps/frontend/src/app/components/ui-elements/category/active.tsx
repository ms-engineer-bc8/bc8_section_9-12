import React from "react";
import CategoryCard from "../card/commonCard";
import ActiveCategoryImage from "../../../commons/images/category/active.jpg";

const activeCategoryTags = [
    { id: 1, name: "ボウリング🎳" },
    { id: 2, name: "サバゲー💪" },
    { id: 3, name: "ナイトプール👙" },
    { id: 4, name: "遊園地🎡" },
];

const ActiveCategoryCard: React.FC = () => {
    return (
        <CategoryCard
            imageSrc={ActiveCategoryImage}
            title="アクティブ系ソロ活"
            description="冒険の主人公はYOU！"
            tags={activeCategoryTags}
        />
    );
};

export default ActiveCategoryCard;
