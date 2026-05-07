import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdullah Ahsen — Full Stack Web Dev",
  description:
    "Full-stack web developer specializing in AI-integrated SaaS and rapid MVPs. Available for freelance projects and full-time roles.",
  openGraph: {
    title: "Abdullah Ahsen — Full Stack Web Dev",
    description:
      "Full-stack web developer specializing in AI-integrated SaaS and rapid MVPs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased bg-bg text-text">{children}</body>
    </html>
  );
}
