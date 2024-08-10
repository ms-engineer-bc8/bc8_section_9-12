import CategoryList from "./components/ui-parts/categoryList";
import Heading from "./components/ui-elements/heading";

export default function Home() {
    return (
        <main>
            <Heading>どんなソロ活をやってみたい？</Heading>
            <CategoryList />
        </main>
    );
}
