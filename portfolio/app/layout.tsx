import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "冯梦莹 — 体验设计总监",
  description: "专注于用户体验设计，致力于打造有温度的产品。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="py-8 px-6 text-center text-sm text-muted border-t border-border">
          <p>© 2024 冯梦莹. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}