"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);

    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Логотип */}

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-2xl font-extrabold tracking-tight text-white"
        >
          FlowForge<span className="text-blue-500">.</span>
        </button>

        {/* Desktop меню */}

        <nav className="hidden items-center gap-10 text-sm text-zinc-300 md:flex">

          <button
            onClick={() => scrollTo("about")}
            className="transition hover:text-white"
          >
            О нас
          </button>

          <button
            onClick={() => scrollTo("services")}
            className="transition hover:text-white"
          >
            Услуги
          </button>

          <button
            onClick={() => scrollTo("cases")}
            className="transition hover:text-white"
          >
            Кейсы
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="transition hover:text-white"
          >
            Контакты
          </button>

        </nav>

        {/* Desktop кнопка */}

        <button
          onClick={() => scrollTo("contact")}
          className="hidden rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-500 md:block"
        >
          Обсудить проект
        </button>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Мобильное меню */}

      {open && (
        <div className="border-t border-zinc-800 bg-black/95 backdrop-blur-xl md:hidden">

          <div className="flex flex-col p-6">

            <button
              onClick={() => scrollTo("about")}
              className="py-4 text-left text-zinc-300"
            >
              О нас
            </button>

            <button
              onClick={() => scrollTo("services")}
              className="py-4 text-left text-zinc-300"
            >
              Услуги
            </button>

            <button
              onClick={() => scrollTo("cases")}
              className="py-4 text-left text-zinc-300"
            >
              Кейсы
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="py-4 text-left text-zinc-300"
            >
              Контакты
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="mt-6 rounded-xl bg-blue-600 py-4 font-semibold text-white"
            >
              Обсудить проект
            </button>

          </div>

        </div>
      )}
    </header>
  );
}