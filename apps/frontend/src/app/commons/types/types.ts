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

export type ActivityProps = {
    provider_name: string;
    image_large: string;
    title: string;
    discription: string;
    plan_name: string;
    price: number;
    image_small: string;
    coupon_discount_rate: number;
    url: string;
};

export type ReviewProps = {
    id: number;
    nickname: string;
    text: string;
    image: string;
    likes_count: number;
    favorites_count: number;
    update_date: string;
};

export type ReviewItem = {
    user_id: number;
    text: string;
    image: string;
};

export type ReviewFormProps = {
    apiUrl: string;
};

export type SignUpFormProps = {
    email: string;
    password: string;
    nickname: string;
    age: string;
};

