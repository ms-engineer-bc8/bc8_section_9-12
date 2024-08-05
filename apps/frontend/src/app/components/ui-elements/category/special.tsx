import React from "react";
import CategoryCard from "../card";
import SpecialImage from "../../../images/special.jpg"

type SpecialLinkProps  = {
    children: React.ReactNode;
    onClick?: () => void;
}

const tags = [
    { id: 1, name: "シティホテル" },
    { id: 2, name: "気球" },
    { id: 3, name: "リムジン" },
    { id: 4, name: "ヘリクルーズ" },
];

const SpecialLink: React.FC<SpecialLinkProps> = ({ children, onClick }) => {
    return (
        <CategoryCard
            imageSrc={SpecialImage}
            title="スペシャル体験ソロ活"
            description="あなたの夢が叶う♡"
            tags={tags}
        />
    );
};

export default SpecialLink;


