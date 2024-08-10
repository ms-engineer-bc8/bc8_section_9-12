export type CategoryTag = {
    id: number;
    name: string;
};

export type CategoryCardProps = {
    imageSrc: string;
    title: string;
    description: string;
    tags: CategoryTag[];
};
