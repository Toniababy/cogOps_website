import type { Metadata } from "next";
import { Inter } from "next/font/google";

// import "./globals.css"; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CogOps | Build Products, Grow Brands, Learn Skills",
  description: "A tech-savvy agency and learning institution for founders and professionals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
     
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}