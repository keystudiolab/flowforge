"use client";

import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";

const auditButtonLabels = [
  "Получить AI-аудит",
  "Обсудить внедрение",
  "Book a Demo",
  "Get AI Audit",
  "Discuss Implementation",
  "Request AI Audit",
].map((label) => label.toLowerCase());

function getRequestUrl(input: RequestInfo | URL): string {
  if (typeof input === "string") {
    return input;
  }

  if (input instanceof URL) {
    return input.toString();
  }

  return input.url;
}

function getLocale(): "ru" | "en" {
  return window.location.pathname.startsWith("/en") ? "en" : "ru";
}

export default function AnalyticsEvents() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const clickable = target.closest("a, button");

      if (!clickable) {
        return;
      }

      const buttonText =
        clickable.textContent?.replace(/\s+/g, " ").trim() || "unknown";

      const pagePath = window.location.pathname;
      const locale = getLocale();

      if (
        clickable instanceof HTMLAnchorElement &&
        clickable.href.includes("t.me/flowforge_ai_assistant_bot")
      ) {
        sendGAEvent("event", "telegram_demo_click", {
          button_text: buttonText,
          page_path: pagePath,
          locale,
        });

        return;
      }

      const normalizedText = buttonText.toLowerCase();

      if (
        auditButtonLabels.some((label) =>
          normalizedText.includes(label),
        )
      ) {
        sendGAEvent("event", "audit_button_click", {
          button_text: buttonText,
          page_path: pagePath,
          locale,
        });
      }
    }

    const originalFetch = window.fetch.bind(window);

    window.fetch = async (...args: Parameters<typeof window.fetch>) => {
      const requestUrl = getRequestUrl(args[0]);
      const isLeadRequest = requestUrl.includes("/api/telegram");

      if (isLeadRequest) {
        sendGAEvent("event", "contact_form_submit", {
          page_path: window.location.pathname,
          locale: getLocale(),
        });
      }

      const response = await originalFetch(...args);

      if (isLeadRequest && response.ok) {
        sendGAEvent("event", "generate_lead", {
          page_path: window.location.pathname,
          locale: getLocale(),
        });
      }

      return response;
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      window.fetch = originalFetch;
    };
  }, []);

  return null;
}
