"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

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
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-white"
        >
          FlowForge
          <span className="rounded-lg bg-blue-600 px-2 py-1 text-xs font-bold uppercase">
            AI
          </span>
        </button>

        <nav className="hidden items-center gap-10 text-sm font-medium text-zinc-400 lg:flex">
          <button
            onClick={() => scrollTo("employees")}
            className="transition hover:text-white"
          >
            AI Employees
          </button>

          <button
            onClick={() => scrollTo("industries")}
            className="transition hover:text-white"
          >
            Industries
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="transition hover:text-white"
          >
            Contact
          </button>
        </nav>

        <button
          onClick={() => scrollTo("contact")}
          className="hidden items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-500 lg:flex"
        >
          Book Demo
          <ArrowUpRight size={18} />
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-zinc-800 bg-black/95 backdrop-blur-3xl lg:hidden">
          <div className="flex flex-col gap-2 p-6">
            <button
              onClick={() => scrollTo("employees")}
              className="rounded-xl p-4 text-left text-zinc-300 transition hover:bg-zinc-900"
            >
              AI Employees
            </button>

            <button
              onClick={() => scrollTo("industries")}
              className="rounded-xl p-4 text-left text-zinc-300 transition hover:bg-zinc-900"
            >
              Industries
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="rounded-xl p-4 text-left text-zinc-300 transition hover:bg-zinc-900"
            >
              Contact
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="mt-4 rounded-2xl bg-blue-600 py-4 font-semibold text-white"
            >
              Book Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}