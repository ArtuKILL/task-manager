import type { Metadata } from "next";
import { Sono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";


const sono = Sono({
  variable: "--font-sono-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s - ${process.env.APP_NAME || "Task Manager"}`,
    default: process.env.APP_NAME || "Task Manager"
  },
  description: "Task manager App",
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
