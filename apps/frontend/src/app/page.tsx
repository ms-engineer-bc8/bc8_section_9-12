import CategoryLists from "./components/ui-parts/list";
import Heading from "./components/ui-elements/heading";

export default function Home() {
    return (
        <main>
            <Heading>どんなソロ活をやってみたい？</Heading>
            <CategoryLists />
        </main>
    );
}
