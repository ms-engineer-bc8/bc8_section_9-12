import React from "react";
import CategoryList from "./components/ui-parts/categorylist";
import Heading from "./components/ui-elements/heading";
import { CustomerHeader } from "./components/layouts/header";

export default function Home() {
    return (
        <>
            <CustomerHeader />
            <Heading>どんなソロ活をやってみたい？</Heading>
            <CategoryList />
        </>
    );
}