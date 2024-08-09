import React from "react";
import CategoryCard from "../card/card";
import SpecialImage from "../../../images/category/special.jpg";

type SpecialCardProps = {
    children: React.ReactNode;
    onClick?: () => void;
};

const tags = [
    { id: 1, name: "シティホテル" },
    { id: 2, name: "気球" },
    { id: 3, name: "リムジン" },
    { id: 4, name: "ヘリクルーズ" },
];

const SpecialCard: React.FC<SpecialCardProps> = ({ children, onClick }) => {
    return (
        <CategoryCard
            hre
            imageSrc={SpecialImage}
            title="スペシャル体験ソロ活"
            description="あなたの夢が叶う♡"
            tags={tags}
        />
    );
};

export default SpecialCard;
