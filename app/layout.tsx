"use client";

import { inter } from "./ui/fonts";
import "./globals.css";
import Navbar from "./ui/components/Navbar";
import Footer from "./ui/components/Footer";
import { Provider } from "react-redux";
import { store } from "@/app/lib/redux/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <Provider store={store}>{children}</Provider>
        <Footer />
      </body>
    </html>
  );
}
