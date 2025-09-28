import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Vansh Patel - Full Stack Developer",
  description: "I'm a passionate full-stack developer who crafts exceptional digital experiences with modern web technologies. Specializing in React, Next.js, TypeScript, and creating scalable applications.",
  keywords: [
    "Vansh Patel",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio"
  ],
  authors: [{ name: "Vansh Patel" }],
  creator: "Vansh Patel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vanshpatel.dev",
    title: "Vansh Patel - Full Stack Developer",
    description: "I'm a passionate full-stack developer who crafts exceptional digital experiences with modern web technologies.",
    siteName: "Vansh Patel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vansh Patel - Full Stack Developer",
    description: "I'm a passionate full-stack developer who crafts exceptional digital experiences with modern web technologies.",
    creator: "@vansh_patel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
