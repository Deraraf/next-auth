import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Signup from "./signup/page";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "asking work",
  description: "developed by derara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >
        
        
          {children}
        
      </body>
    </html>
  );
}
