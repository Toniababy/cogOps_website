'use client';
import { usePathname } from 'next/navigation';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NavigationWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideNavbarRoutes = ['/login', '/signup', '/forgot'];
  const shouldHideNavbar = hideNavbarRoutes.includes(pathname) || pathname.startsWith('/dashboard');

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      
      <main className="relative min-h-screen">
        {children}
      </main>

      {!shouldHideNavbar && <Footer />}
    </>
  );
}