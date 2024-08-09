import React from "react";
import CategoryCard from "../card/card";
import RelaxImage from "../../../images/category/relax.jpg";

type RelaxLinkProps = {
    children: React.ReactNode;
    onClick?: () => void;
};

const tags = [
    { id: 1, name: "プラネタリウム" },
    { id: 2, name: "美術館＆博物館" },
    { id: 3, name: "銭湯" },
    { id: 4, name: "夜景" },
];

const RelaxLink: React.FC<RelaxLinkProps> = ({ children, onClick }) => {
    return (
        <CategoryCard
            imageSrc={RelaxImage}
            title="リラックス系ソロ活"
            description="心がほぐれる〜"
            tags={tags}
        />
    );
};

export default RelaxLink;
