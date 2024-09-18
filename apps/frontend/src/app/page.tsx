import React from "react";
import CategoryList from "./components/ui-elements/Category/List";
import Heading from "./components/ui-elements/Heading";
import { CustomerHeader } from "./components/layouts/Header";

export default function Home() {
    return (
        <>
            <CustomerHeader />
            <Heading>どんなソロ活をやってみたい？👀</Heading>
            <CategoryList />
        </>
    );
}
