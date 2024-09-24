import Stripe from "stripe";

const stripeSecretKey = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  throw new Error("NEXT_PUBLIC_STRIPE_SECRET_KEYが設定されていません。");
}

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2024-06-20",
});