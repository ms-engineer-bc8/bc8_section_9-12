import React from "react";
import CategoryCard from "../card/card";
import GourmetImage from "../../../images/category/gourmet.jpg";

type GourmetLinkProps = {
    children: React.ReactNode;
    onClick?: () => void;
};

const Tags = [
    { id: 1, name: "焼肉" },
    { id: 2, name: "寿司" },
    { id: 3, name: "中華料理" },
    { id: 4, name: "フレンチ" },
];

const GourmetLink: React.FC<GourmetLinkProps> = ({ children, onClick }) => {
    return (
        <CategoryCard
            imageSrc={GourmetImage}
            title="グルメ堪能ソロ活"
            description="自分の五感と向き合う..."
            tags={Tags}
        />
    );
};

export default GourmetLink;
