export type Tag = {
    id: number;
    name: string;
};

export type CategoryCardProps = {
    imageSrc: string;
    title: string;
    description: string;
    tags: Tag[];
};
