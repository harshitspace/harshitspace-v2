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
      <body className="flex min-h-screen">
        <Sidebar />
        <main className="ml-[320px] w-full max-w-[900px] p-16 box-border transition-all duration-300">
          {children}
        </main>
      </body>
    </html>
  );
}
