import React from "react";
import CategoryCard from "../card/commonCard";
import ActiveCategoryImage from "../../../images/category/active.jpg";

const activeCategoryTags = [
    { id: 1, name: "ボウリング" },
    { id: 2, name: "サバゲー" },
    { id: 3, name: "ナイトプール" },
    { id: 4, name: "遊園地" },
];

const ActiveCategoryCard: React.FC = () => {
    return (
        <CategoryCard
            imageUrl={ActiveCategoryImage}
            title="アクティブ系ソロ活"
            description="自分だけの冒険を満喫できる！"
            categoryTags={activeCategoryTags}
        />
    );
};

export default ActiveCategoryCard;
