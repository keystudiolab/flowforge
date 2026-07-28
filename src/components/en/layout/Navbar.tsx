"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);

    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-3xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-white"
        >
          FlowForge

          <span className="rounded-lg bg-blue-600 px-2 py-1 text-xs font-bold uppercase">
            AI
          </span>
        </button>

        <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-400 lg:flex">
          <button
            type="button"
            onClick={() => scrollTo("about")}
            className="transition hover:text-white"
          >
            About
          </button>

          <button
            type="button"
            onClick={() => scrollTo("services")}
            className="transition hover:text-white"
          >
            Services
          </button>

          <button
            type="button"
            onClick={() => scrollTo("cases")}
            className="transition hover:text-white"
          >
            Cases
          </button>

          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="transition hover:text-white"
          >
            Contact
          </button>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center rounded-xl border border-zinc-800 bg-zinc-950/70 p-1">
            <Link
              href="/"
              className="rounded-lg px-3 py-2 text-sm text-zinc-500 transition hover:text-white"
            >
              RU
            </Link>

            <Link
              href="/en"
              className="rounded-lg bg-zinc-800 px-3 py-2 text-sm text-white"
            >
              EN
            </Link>
          </div>

          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-500"
          >
            Book a Demo
            <ArrowUpRight size={18} />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-white lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-zinc-800 bg-black/95 backdrop-blur-3xl lg:hidden">
          <div className="flex flex-col gap-2 p-6">
            <button
              type="button"
              onClick={() => scrollTo("about")}
              className="rounded-xl p-4 text-left text-zinc-300 transition hover:bg-zinc-900"
            >
              About
            </button>

            <button
              type="button"
              onClick={() => scrollTo("services")}
              className="rounded-xl p-4 text-left text-zinc-300 transition hover:bg-zinc-900"
            >
              Services
            </button>

            <button
              type="button"
              onClick={() => scrollTo("cases")}
              className="rounded-xl p-4 text-left text-zinc-300 transition hover:bg-zinc-900"
            >
              Cases
            </button>

            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="rounded-xl p-4 text-left text-zinc-300 transition hover:bg-zinc-900"
            >
              Contact
            </button>

            <div className="mt-3 flex gap-3">
              <Link
                href="/"
                className="flex-1 rounded-xl border border-zinc-800 py-3 text-center text-zinc-400"
              >
                RU
              </Link>

              <Link
                href="/en"
                className="flex-1 rounded-xl bg-zinc-800 py-3 text-center text-white"
              >
                EN
              </Link>
            </div>

            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="mt-3 rounded-2xl bg-blue-600 py-4 font-semibold text-white"
            >
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}