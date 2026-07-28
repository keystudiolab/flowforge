"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function EnglishNavbar() {
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
            onClick={() => scrollTo("employees")}
            className="transition hover:text-white"
          >
            AI Employees
          </button>

          <button
            type="button"
            onClick={() => scrollTo("process")}
            className="transition hover:text-white"
          >
            How It Works
          </button>

          <button
            type="button"
            onClick={() => scrollTo("industries")}
            className="transition hover:text-white"
          >
            Industries
          </button>

          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="transition hover:text-white"
          >
            Contact
          </button>

          <div className="flex items-center gap-2 rounded-xl border border-zinc-800 p-1">
            <Link
              href="/"
              className="rounded-lg px-3 py-2 text-zinc-500 transition hover:text-white"
            >
              RU
            </Link>

            <Link
              href="/en"
              className="rounded-lg bg-zinc-800 px-3 py-2 text-white"
            >
              EN
            </Link>
          </div>
        </nav>

        <button
          type="button"
          onClick={() => scrollTo("contact")}
          className="hidden items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500 xl:flex"
        >
          Book a Demo
          <ArrowUpRight size={18} />
        </button>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label="Open menu"
          className="text-white lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-zinc-800 bg-black/95 lg:hidden">
          <div className="flex flex-col gap-2 p-6">
            <button
              type="button"
              onClick={() => scrollTo("employees")}
              className="rounded-xl p-4 text-left text-zinc-300"
            >
              AI Employees
            </button>

            <button
              type="button"
              onClick={() => scrollTo("process")}
              className="rounded-xl p-4 text-left text-zinc-300"
            >
              How It Works
            </button>

            <button
              type="button"
              onClick={() => scrollTo("industries")}
              className="rounded-xl p-4 text-left text-zinc-300"
            >
              Industries
            </button>

            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="rounded-xl p-4 text-left text-zinc-300"
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