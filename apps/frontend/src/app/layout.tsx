import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import Background from "./components/layouts/background";
import "./commons/styles/globals.css";
import ToastProvider from "./components/layouts/toastProvider";
import { TokenProvider } from "./commons/contexts/contexts";

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soloco",
  description:
    "ソロの女性が新しいソロ活に出会い、お互いのソロ活をシェアするためのアプリです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={zenKakuGothicNew.className}>
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            <Background />
            <ToastProvider>
              <TokenProvider>{children}</TokenProvider>
            </ToastProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
