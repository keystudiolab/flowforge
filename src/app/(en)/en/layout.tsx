import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FlowForge — AI Employees and Business Automation",

  description:
    "We build AI employees, Telegram bots and business process automation systems for sales, customer support and lead management.",

  keywords: [
    "AI employees",
    "AI business automation",
    "Telegram bots",
    "sales automation",
    "customer support automation",
    "AI chatbot development",
    "FlowForge",
  ],

  alternates: {
    canonical: "/en",
    languages: {
      "ru-RU": "/",
      "en-US": "/en",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ru_RU"],
    url: "/en",
    siteName: "FlowForge",
    title: "FlowForge — AI Employees and Business Automation",
    description:
      "AI employees, Telegram bots and automation systems built for modern businesses.",
  },

  twitter: {
    card: "summary_large_image",
    title: "FlowForge — AI Employees and Business Automation",
    description:
      "AI employees, Telegram bots and automation systems for business.",
  },
};

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}