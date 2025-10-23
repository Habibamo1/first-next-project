import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "E-commerce Website",
  description: "A simple e-commerce website built with Next.js",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} >
      <body
        className={` antialiased  bg-white text-gray-900 light`}
      >
        {children}
      </body>
    </html>
  );
}
