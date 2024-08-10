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

export type ActivitiesProps = {
    id: number;
    subcategory: string;
    image: string;
    provider_name: string;
    time_zone: string;
    solo_level: string;
    likes_count: number;
    favorites_count: number;
};