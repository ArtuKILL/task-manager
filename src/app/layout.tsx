import type { Metadata } from "next";
import { Geist, Geist_Mono, Sono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import AppFooter from "./components/footer";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const sono = Sono({
  variable: "--font-sono-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `Home - ${process.env.APP_NAME}`,
  description: "Task manager home, can create a new task.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sono.className}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
