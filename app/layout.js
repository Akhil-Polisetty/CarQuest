import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Car Hub",
  description: "Get cars for rent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-screen ">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
