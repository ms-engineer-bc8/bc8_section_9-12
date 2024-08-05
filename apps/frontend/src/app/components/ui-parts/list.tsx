import React from "react";
import Link from "next/link";
import ActiveLink from "../ui-elements/category/active";
import SpecialLink from "../ui-elements/category/special";
import RelaxLink from "../ui-elements/category/relax";
import GourmetLink from "../ui-elements/category/gourmet";

const CategoryList = () => {
    return (
        <div className="container mx-auto px-2 sm:px-3 mt-10">
            <ul className="flex flex-wrap justify-center gap-4">
                <li className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.667rem)] lg:w-[calc(25%-0.75rem)]">
                    <Link href="/category/1" className="block w-full h-full">
                        <ActiveLink>アクティブソロ活</ActiveLink>
                    </Link>
                </li>
                <li className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.667rem)] lg:w-[calc(25%-0.75rem)]">
                    <Link href="/category/2" className="block w-full h-full">
                        <SpecialLink>スペシャル体験ソロ活</SpecialLink>
                    </Link>
                </li>
                <li className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.667rem)] lg:w-[calc(25%-0.75rem)]">
                    <Link href="/category/3" className="block w-full h-full">
                        <RelaxLink>リラックス系ソロ活</RelaxLink>
                    </Link>
                </li>
                <li className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.667rem)] lg:w-[calc(25%-0.75rem)]">
                    <Link href="/category/4" className="block w-full h-full">
                        <GourmetLink>グルメ堪能ソロ活</GourmetLink>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default CategoryList;