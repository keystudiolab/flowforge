"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Target,
  UserRound,
} from "lucide-react";
import Modal from "@/components/en/ui/Modal";

const benefits = [
  {
    icon: <Clock3 size={18} />,
    text: "Works 24/7",
  },
  {
    icon: <Target size={18} />,
    text: "Never misses a lead",
  },
  {
    icon: <Sparkles size={18} />,
    text: "Launches in days",
  },
  {
    icon: <ShieldCheck size={18} />,
    text: "Built for your business",
  },
];

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

        <div className="absolute left-[-180px] top-20 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[150px]" />

        <div className="absolute right-[-120px] top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute inset-0 opacity-[0.045] bg-[linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 py-32 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.span
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400"
            >
              <Sparkles size={16} />
              AI Employees for Business
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.75 }}
              className="mt-8 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
            >
              Hire your first
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                AI Employee.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.75 }}
              className="mt-8 max-w-2xl text-xl leading-9 text-zinc-400"
            >
              AI employees that answer customers, capture leads, automate
              repetitive processes and help your business operate around the
              clock.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.75 }}
              className="mt-12 flex flex-col gap-4 sm:flex-row"
            >
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold transition duration-300 hover:scale-[1.03] hover:bg-blue-500"
              >
                Book a Demo
                <ArrowRight size={20} />
              </button>

              <a
                href="https://t.me/flowforge_ai_assistant_bot"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-zinc-700 px-8 py-4 text-lg font-semibold transition duration-300 hover:border-blue-500 hover:bg-white/5"
              >
                Watch Live Demo
                <MessageCircle size={20} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.7 }}
              className="mt-12 grid gap-4 sm:grid-cols-2"
            >
              {benefits.map((benefit) => (
                <div
                  key={benefit.text}
                  className="flex items-center gap-3 text-sm text-zinc-400"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-blue-400">
                    {benefit.icon}
                  </div>

                  <span>{benefit.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.85 }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-[40px] bg-blue-500/10 blur-3xl" />

            <div className="relative rounded-[34px] border border-zinc-800 bg-zinc-950/90 p-5 shadow-2xl shadow-black/50 backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                    <MessageCircle size={24} />
                  </div>

                  <div>
                    <p className="font-semibold">AI Employee</p>

                    <div className="mt-1 flex items-center gap-2 text-sm text-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Online 24/7
                    </div>
                  </div>
                </div>

                <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-500">
                  Live Demo
                </span>
              </div>

              <div className="mt-6 space-y-5">
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="max-w-[88%] rounded-2xl rounded-tl-md bg-zinc-800 px-5 py-4 text-sm leading-6 text-zinc-200"
                >
                  Hello! I can answer your questions, recommend a solution and
                  help you submit a request. How can I help?
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="ml-auto flex max-w-[78%] items-start gap-3 rounded-2xl rounded-tr-md bg-blue-600 px-5 py-4 text-sm leading-6 text-white"
                >
                  <UserRound size={18} className="mt-0.5 shrink-0" />
                  I want to automate lead handling in my company.
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  className="max-w-[88%] rounded-2xl rounded-tl-md bg-zinc-800 px-5 py-4 text-sm leading-6 text-zinc-200"
                >
                  Great! What type of business do you run?
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                  className="ml-auto max-w-[65%] rounded-2xl rounded-tr-md bg-blue-600 px-5 py-4 text-sm leading-6 text-white"
                >
                  A dental clinic.
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.55 }}
                className="mt-6 rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-5"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-0.5 shrink-0 text-emerald-400"
                  />

                  <div className="w-full">
                    <p className="font-semibold text-emerald-300">
                      Lead successfully captured
                    </p>

                    <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                      <div className="rounded-xl bg-black/20 p-3">
                        <p className="text-zinc-500">Company</p>
                        <p className="mt-1 text-zinc-200">Dental Clinic</p>
                      </div>

                      <div className="rounded-xl bg-black/20 p-3">
                        <p className="text-zinc-500">Solution</p>
                        <p className="mt-1 text-zinc-200">
                          AI Receptionist
                        </p>
                      </div>

                      <div className="rounded-xl bg-black/20 p-3">
                        <p className="text-zinc-500">Status</p>
                        <p className="mt-1 text-zinc-200">New lead</p>
                      </div>

                      <div className="rounded-xl bg-black/20 p-3">
                        <p className="text-zinc-500">Delivery</p>
                        <p className="mt-1 text-emerald-300">
                          Sent to Telegram
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Modal open={open} onClose={() => setOpen(false)} />
    </>
  );
}