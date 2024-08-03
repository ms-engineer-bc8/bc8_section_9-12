import React from "react";
import Link from "next/link";
import ActiveLink from "../ui-elements/category/active";
import SpecialLink from "../ui-elements/category/special";
import RelaxLink from "../ui-elements/category/relax";
import GourmetLink from "../ui-elements/category/gourmet";

const CategoryList = () => {
    return (
        <div className="flex justify-center items-center mt-1">
            <ul>
                <li className="p-2">
                    <Link href="/activity/1">
                        <ActiveLink>アクティブソロ活</ActiveLink>
                    </Link>
                </li>
                <li className="p-2">
                    <Link href="/activity/2">
                        <SpecialLink>スペシャル体験ソロ活</SpecialLink>
                    </Link>
                </li>
                <li className="p-2">
                    <Link href="/activity/3">
                        <RelaxLink>リラックス系ソロ活</RelaxLink>
                    </Link>
                </li>
                <li className="p-2">
                    <Link href="/activity/4">
                        <GourmetLink>グルメ堪能ソロ活</GourmetLink>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default CategoryList;
