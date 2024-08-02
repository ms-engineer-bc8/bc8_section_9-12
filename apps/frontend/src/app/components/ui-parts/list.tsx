import React from "react";
import Link from "next/link";
import CategoryLink from "../ui-elements/category";

const categoryList = [
    { label: "アクティブソロ活", href: "/activity/1" },
    { label: "スペシャル体験ソロ活", href: "/activity/2" },
    { label: "リラックス系ソロ活", href: "/activity/3" },
    { label: "グルメ堪能ソロ活", href: "/activity/4" },
];

const CategoryList = () => {
    return (
        <div className="flex justify-center items-center mt-2">
            <ul>
                {categoryList.map((list) => (
                    <li key={list.href} className="p-3">
                        <Link href={list.href}>
                            <CategoryLink>{list.label}</CategoryLink>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;
