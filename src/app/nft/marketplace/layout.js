'use client'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">

        <body>
        <main> <Navbar /></main>
        <main>{children}</main>
        <main> <Footer /></main>
        </body>
       
    </html>
  );
}