import { Inter } from "next/font/google";
import './globals.css';
import NavigationWrapper from "@/components/NavigationWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'CogOps Technologies | Engineering the Future',
  description: 'Technical partner for visionary founders.',
  icons: {
    icon: '/cogops-logo.png', 
  },
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
      <body className={`${inter.className} transition-colors duration-300 bg-white text-[#0F1115] antialiased`}>
        <NavigationWrapper>
          {children}
        </NavigationWrapper>
      </body>
    </html>
  );
}