import type { Metadata } from "next";
import "./globals.css";

import Script from "next/script";
import 'bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
        <Nav/>
        {children}
        <Footer/>
        
        </body>
      <Script src = '../public/lib/jquery/jquery.min.js'/>
      <Script src = '../public/lib/bootstrap/js/bootstrap.min.js'/>
      <Script src = '../public/js/main.js'/>
    </html>
  );
}
