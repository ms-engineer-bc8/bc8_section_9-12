import React from "react";
import CategoryCard from "../card/card";
import ActiveImage from "../../../images/category/active.jpg";

type ActiveCardProps = {
    children: React.ReactNode;
    onClick?: () => void;
};

const tags = [
    { id: 1, name: "ボウリング" },
    { id: 2, name: "サバゲー" },
    { id: 3, name: "ナイトプール" },
    { id: 4, name: "遊園地" },
];

const ActiveCard: React.FC<ActiveCardProps> = ({ children, onClick }) => {
    return (
        <CategoryCard
            imageSrc={ActiveImage}
            title="アクティブ系ソロ活"
            description="自分だけの冒険を満喫できる！"
            tags={tags}
        />
    );
};

export default ActiveCard;
