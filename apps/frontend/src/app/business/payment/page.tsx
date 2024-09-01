"use client";

import { useRouter } from "next/navigation";

export default function Payment() {
  const router = useRouter();
  return (
    <div className="container mx-auto max-w-md px-6 py-10">
      <div className="bg-white p-10 rounded-2xl">

    <div className="container mx-auto px-4">
      {/* <h1>Stripe Test購入画面</h1> */}
      <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      <stripe-buy-button
        buy-button-id="buy_btn_1PsQVpRtrot4hWan7MAzTRcb"
        publishable-key="pk_test_51Pgl3DRtrot4hWanexfpBtf594N6Wc58azdYCvUF5dkxCHZrTdC6qzHZUiBGbdnv48DrIaNerPUgbX3FoXxD75Ud00M1LwyvKi"
      ></stripe-buy-button>
    </div>
    </div>
    </div>
  );
}