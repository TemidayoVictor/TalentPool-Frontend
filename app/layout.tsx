import type { Metadata } from "next";
import { Lato } from "next/font/google";
import MainLayout from "./components/MainLayout";
import "./globals.css";

const usefont = Lato({ 
  subsets: ["latin"], 
  weight: ["100", "300", "400", "700", "900"],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "TalentPool",
  description: "Platform to connect taskers to solvers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={usefont.className}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
