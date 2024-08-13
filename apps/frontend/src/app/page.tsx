import CategoryList from "./components/ui-parts/categoryList";
import Heading from "./components/ui-elements/heading";
import { CustomerHeader } from "./components/layouts/header";

export default function Home() {
    return (
        <main>
            <CustomerHeader />
            <Heading>どんなソロ活をやってみたい？</Heading>
            <CategoryList />
        </main>
    );
}
