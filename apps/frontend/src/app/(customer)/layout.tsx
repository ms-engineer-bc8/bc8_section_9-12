import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import { CustomerHeader } from "../components/layouts/Header";
import "../commons/styles/globals.css";

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
    weight: ["400", "500", "700", "900"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Soloco",
    description:
        "「ソロ活」する女性が新しい一歩を踏み出すのをお手伝いするアプリです。",
};

export default function CustomerLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <CustomerHeader />
            {children}
        </>
    );
}
