import React from "react";
import CategoryCard from "../card/commonCard";
import ActiveImage from "../../../images/category/active.jpg";

const categoryTags = [
    { id: 1, name: "ボウリング" },
    { id: 2, name: "サバゲー" },
    { id: 3, name: "ナイトプール" },
    { id: 4, name: "遊園地" },
];

const ActiveCategoryCard: React.FC = () => {
    return (
        <CategoryCard
            imageUrl={ActiveImage}
            title="アクティブ系ソロ活"
            description="自分だけの冒険を満喫できる！"
            categoryTags={categoryTags}
        />
    );
};

export default ActiveCategoryCard;
