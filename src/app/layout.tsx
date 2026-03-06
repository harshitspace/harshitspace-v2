import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  metadataBase: new URL("https://harshitspace.in"),
  title: "Harshit Raj | ./portfolio.sh",
  description:
    "Full-Stack Developer & Data Science Student at IIT Madras. Specializing in the MERN stack, Python, and scalable web architectures.",
  keywords: [
    "Harshit Raj",
    "Full-Stack Developer",
    "Software Engineer",
    "MERN Stack",
    "Python",
    "React",
    "IIT Madras",
  ],
  authors: [{ name: "Harshit Raj", url: "https://harshitspace.in" }],
  openGraph: {
    title: "Harshit Raj | ./portfolio.sh",
    description: "Full-Stack Developer & Data Science Student at IIT Madras.",
    url: "https://harshitspace.in",
    siteName: "Harshit Raj Portfolio",
    locale: "en_US",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshit Raj | ./portfolio.sh",
    description: "Full-Stack Developer & Data Science Student at IIT Madras.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
