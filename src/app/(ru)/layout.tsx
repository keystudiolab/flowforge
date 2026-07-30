import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const siteUrl = "https://flowforge-roan-three.vercel.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "FlowForge — AI-сотрудники и автоматизация бизнеса",
    template: "%s | FlowForge",
  },

  description:
    "Разрабатываем AI-сотрудников, Telegram-ботов и автоматизацию бизнес-процессов для продаж, поддержки клиентов и обработки заявок.",

  keywords: [
    "AI автоматизация бизнеса",
    "AI сотрудники",
    "Telegram боты",
    "автоматизация продаж",
    "искусственный интеллект для бизнеса",
    "разработка AI ботов",
    "FlowForge",
  ],

  authors: [
    {
      name: "FlowForge",
    },
  ],

  creator: "FlowForge",
  publisher: "FlowForge",

  alternates: {
    canonical: "/",
    languages: {
      "ru-RU": "/",
      "en-US": "/en",
    },
  },

  openGraph: {
    type: "website",
    locale: "ru_RU",
    alternateLocale: ["en_US"],
    url: "/",
    siteName: "FlowForge",
    title: "FlowForge — AI-сотрудники и автоматизация бизнеса",
    description:
      "Разрабатываем AI-сотрудников, Telegram-ботов и автоматизацию бизнес-процессов.",
  },

  twitter: {
    card: "summary_large_image",
    title: "FlowForge — AI-сотрудники и автоматизация бизнеса",
    description:
      "AI-сотрудники, Telegram-боты и автоматизация процессов для бизнеса.",
  },

  verification: {
    google: "gtZ3XLL20VYvUIviE5NB29mUpuyOtylNvR810962FJ8",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}