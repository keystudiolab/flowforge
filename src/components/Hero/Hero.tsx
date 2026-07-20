"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "@/components/ui/Modal";
import FadeIn from "@/components/ui/FadeIn";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
      {/* Фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      {/* Голубое свечение */}
      <div className="absolute left-1/2 top-20 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

      {/* Сетка */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.3)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <FadeIn>
        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400"
          >
            🚀 AI Automation Studio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl"
          >
            AI который 
            <br />

            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              экономит время
            </span>

            <br />

            и увеличивает прибыль
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-zinc-400"
          >
            Мы создаём AI-агентов, Telegram-ботов и интеллектуальную
            автоматизацию, которая освобождает сотрудников от рутины,
            ускоряет процессы и помогает компаниям расти.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row"
          >
            <button
              onClick={() => setOpen(true)}
              className="rounded-2xl bg-blue-600 px-10 py-5 text-lg font-semibold transition duration-300 hover:scale-105 hover:bg-blue-500"
            >
              Получить AI-аудит
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("cases")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-2xl border border-zinc-700 px-10 py-5 text-lg font-semibold transition duration-300 hover:border-blue-500 hover:bg-white/5"
            >
              Смотреть кейсы
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.9 }}
            className="mt-20 flex flex-wrap justify-center gap-8 text-sm text-zinc-500"
          >
            <span>OpenAI</span>
            <span>Claude</span>
            <span>Telegram</span>
            <span>WhatsApp</span>
            <span>n8n</span>
            <span>Next.js</span>
          </motion.div>
        </div>
      </FadeIn>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}