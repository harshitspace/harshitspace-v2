import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Harshit Raj | ./portfolio.sh",
  description: "Full-Stack Developer & Data Science Student at IIT Madras",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen" suppressHydrationWarning>
        <Sidebar />
        <main className="transition-all duration-300 w-full max-w-[900px] p-6 md:p-16 box-border ml-[80px] md:peer-[.expanded]:ml-[320px] md:peer-[.collapsed]:ml-[80px]">
          {children}
        </main>
      </body>
    </html>
  );
}
