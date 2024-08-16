import { z } from "zod";

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

export type SoloTypeFormProps = {
  solo_level: string;
  activity_preference: string;
  time_preference: string;
  is_planned: boolean;
  weekend_plan_preference: boolean;
  after_work_preference: string;
  comfort_adventure: string;
};

export const authSchema = z.object({
  email: z
    .string()
    .email({ message: "メールアドレスの形式で入力してください" }),
  password: z.string().min(8, { message: "8文字以上で入力してください" }),
  nickname: z.string().min(1, { message: "ニックネームを入力してください" }),
  age: z.string(),
});

export type AuthSchema = z.infer<typeof authSchema>;

export type UserMenuProps = {
  iconSrc: string;
};
