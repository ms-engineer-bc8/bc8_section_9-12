"use client";

import { useRouter } from "next/navigation";

export const Payment = () => {
    const router = useRouter();
  return (
    <div className="container mx-auto px-4">
      <h1>Stripe Test購入画面</h1>
      <button
        onClick={async () => {
          const response = await fetch("/api/checkout_api", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              customer_id: "cus_QjsI5fGonXREo7",
              price_id: "prod_QjrwbAgm6RMZt2",
            }),
          }).then((data) => data.json());
          router.push(response.checkout_url);
        }}
      >
        商品購入ボタン
      </button>
    </div>
  );
};
export default Payment;
