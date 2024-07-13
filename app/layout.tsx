import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adopt Gabù",
  description: "Give little Gabù a new home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <meta property="og:title" content="Adopt Gabù" />
        <meta property="og:description" content="Help give little Gabù a new home" />
        {/* <meta property="og:url" content="https://www.example.com" /> */}
        <meta property="og:site_name" content="Adopt Gabu" />
        <meta property="og:image" content="/g10.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
