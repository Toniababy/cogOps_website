import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css'
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
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              darkMode: 'class',
              theme: {
                extend: {
                  colors: {
                    cog: {
                      primary: '#0F1115',
                      secondary: '#6B7280',
                      neutral: '#E5E7EB',
                      muted: '#1F2937',
                      accent: '#2563eb'
                    }
                  }
                }
              }
            }
          `}} />
      </head>

      <body className={`${inter.className} transition-colors duration-300 bg-white dark:bg-[#0F1115] text-[#0F1115] dark:text-[#E5E7EB] antialiased`}>
        <Navbar />

        <main className="relative min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}