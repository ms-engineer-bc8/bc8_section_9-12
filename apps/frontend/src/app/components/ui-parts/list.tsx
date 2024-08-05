import React from "react";
import Link from "next/link";
import ActiveLink from "../ui-elements/category/active";
import SpecialLink from "../ui-elements/category/special";
import RelaxLink from "../ui-elements/category/relax";
import GourmetLink from "../ui-elements/category/gourmet";

const CategoryList = () => {
    return (
        <div className="py-12">
            <ul className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 px-4">
                <li className="w-full sm:w-auto">
                    <Link href="/category/1" className="block w-full">
                        <ActiveLink>アクティブソロ活</ActiveLink>
                    </Link>
                </li>
                <li className="w-full sm:w-auto">
                    <Link href="/category/2" className="block w-full">
                        <SpecialLink>スペシャル体験ソロ活</SpecialLink>
                    </Link>
                </li>
                <li className="w-full sm:w-auto">
                    <Link href="/category/3" className="block w-full">
                        <RelaxLink>リラックス系ソロ活</RelaxLink>
                    </Link>
                </li>
                <li className="w-full sm:w-auto">
                    <Link href="/category/4" className="block w-full">
                        <GourmetLink>グルメ堪能ソロ活</GourmetLink>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default CategoryList;