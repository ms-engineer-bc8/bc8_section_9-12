import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import { BusinessHeader } from "../components/layouts/header";
import "../commons/styles/globals.css";

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
    weight: ["400", "500", "700", "900"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "ソロ活アプリ",
    description:
        "ソロの女性が新しいソロ活に出会い、お互いのソロ活をシェアするためのアプリです。",
};

export default function BusinessLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <BusinessHeader />
            {children}
        </>
    );
}
