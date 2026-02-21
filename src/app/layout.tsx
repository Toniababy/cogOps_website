'use client';
import { usePathname } from 'next/navigation';
import { Inter } from "next/font/google";
import './globals.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideNavbarRoutes = ['/login', '/signup'];
  const shouldHideNavbar = hideNavbarRoutes.includes(pathname);

  return (
    <html lang="en" className="scroll-smooth">
      
      <body className={`${inter.className} transition-colors duration-300 bg-white text-[#0F1115] antialiased`}>
<script src="https://cdn.tailwindcss.com"></script>
        
        {!shouldHideNavbar && <Navbar />}

        <main className="relative min-h-screen">
          {children}
        </main>

        {!shouldHideNavbar && <Footer />}
        
      </body>
    </html>
  );
}