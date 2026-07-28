"use client";

import { ArrowUp, Send } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-800 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <button
              type="button"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="text-2xl font-extrabold tracking-tight"
            >
              FlowForge<span className="text-blue-500">.</span>
            </button>

            <p className="mt-4 max-w-sm leading-7 text-zinc-400">
              AI-автоматизация бизнеса: Telegram-боты, AI-агенты
              и интеллектуальные системы, которые экономят время
              и помогают компаниям расти.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Навигация
            </h3>

            <div className="mt-5 flex flex-col gap-4 text-zinc-400">
              <button
                type="button"
                onClick={() => scrollTo("about")}
                className="w-fit transition hover:text-white"
              >
                О нас
              </button>

              <button
                type="button"
                onClick={() => scrollTo("services")}
                className="w-fit transition hover:text-white"
              >
                Услуги
              </button>

              <button
                type="button"
                onClick={() => scrollTo("cases")}
                className="w-fit transition hover:text-white"
              >
                Кейсы
              </button>

              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="w-fit transition hover:text-white"
              >
                Контакты
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Связаться
            </h3>

            <p className="mt-5 max-w-sm leading-7 text-zinc-400">
              Расскажите о задаче — мы предложим конкретный вариант
              автоматизации.
            </p>

            <a
              href="https://t.me/keystudioren_ai_bot"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-blue-500/30 bg-blue-500/10 px-5 py-3 font-semibold text-blue-400 transition hover:border-blue-400 hover:bg-blue-500/20"
            >
              <Send size={19} />
              Написать в Telegram
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-zinc-800 pt-8 text-sm text-zinc-500 md:flex-row">
          <p>
            © {currentYear} FlowForge. Все права защищены.
          </p>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 transition hover:text-white"
          >
            Наверх
            <ArrowUp size={17} />
          </button>
        </div>
      </div>
    </footer>
  );
}