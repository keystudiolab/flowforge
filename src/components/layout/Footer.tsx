"use client";

import Link from "next/link";
import {
  ArrowUp,
  ArrowUpRight,
  MessageCircle,
  Send,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-black text-white">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          <div>
            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="flex items-center gap-2 text-2xl font-extrabold tracking-tight"
            >
              FlowForge

              <span className="rounded-lg bg-blue-600 px-2 py-1 text-xs font-bold uppercase">
                AI
              </span>
            </button>

            <p className="mt-5 max-w-md text-lg leading-8 text-zinc-400">
              AI Employees that answer customers, qualify leads, book
              appointments and automate repetitive work around the clock.
            </p>

            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-6 py-4 font-semibold transition duration-300 hover:scale-[1.03] hover:bg-blue-500"
            >
              Book a Demo
              <ArrowUpRight size={19} />
            </button>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Product
            </h3>

            <div className="mt-5 flex flex-col gap-4 text-zinc-400">
              <button
                type="button"
                onClick={() => scrollTo("employees")}
                className="w-fit transition hover:text-white"
              >
                AI Employees
              </button>

              <button
                type="button"
                onClick={() => scrollTo("industries")}
                className="w-fit transition hover:text-white"
              >
                Industries
              </button>

              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="w-fit transition hover:text-white"
              >
                Book a Demo
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Solutions
            </h3>

            <div className="mt-5 flex flex-col gap-4 text-zinc-400">
              <span>AI Dental Receptionist</span>
              <span>AI Sales Employee</span>
              <span>AI Customer Support</span>
              <span>AI Real Estate Assistant</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Connect
            </h3>

            <p className="mt-5 max-w-sm leading-7 text-zinc-400">
              Try the live AI Employee demo or contact FlowForge directly.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="https://t.me/flowforge_ai_assistant_bot"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-950 px-5 py-3 font-semibold text-zinc-300 transition hover:border-blue-500/60 hover:text-white"
              >
                <MessageCircle size={19} />
                Live Demo
              </a>

              <a
                href="https://t.me/keystudioren_ai_bot"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-950 px-5 py-3 font-semibold text-zinc-300 transition hover:border-blue-500/60 hover:text-white"
              >
                <Send size={19} />
                Telegram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-zinc-800 pt-8 text-sm text-zinc-500 md:flex-row">
          <p>
            © {currentYear} FlowForge. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="transition hover:text-white"
            >
              RU
            </Link>

            <Link
              href="/en"
              className="transition hover:text-white"
            >
              EN
            </Link>

            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              Back to top
              <ArrowUp size={17} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}