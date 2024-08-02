import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/layouts/header";
import "./commons/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ソロ活アプリ",
  description: "ソロの女性が新しいソロ活に出会い、お互いにソロ活をシェアするためのアプリです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
