import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "camply — 大学生活を、もっとスマートに",
  description: "バイト・課題・サブスク・お金をまとめて管理。大学生のための全部入りライフ管理アプリ。",
  openGraph: {
    title: "camply — 大学生活を、もっとスマートに",
    description: "バイト・課題・サブスク・お金をまとめて管理。大学生のための全部入りライフ管理アプリ。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
