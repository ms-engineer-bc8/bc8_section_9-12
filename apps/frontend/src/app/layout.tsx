import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import Header from "./components/layouts/header";
import "./commons/styles/globals.css";

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
    weight: ["400", "500", "700", "900"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "ソロ活アプリ",
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
                <Header />
                {children}
            </body>
        </html>
    );
}
