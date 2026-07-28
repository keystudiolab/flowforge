"use client";

import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MessageCircle,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const features = [
  {
    icon: <MessageCircle size={22} />,
    text: "Answers patients 24/7",
  },
  {
    icon: <Stethoscope size={22} />,
    text: "Helps patients choose the right service",
  },
  {
    icon: <Clock3 size={22} />,
    text: "Accepts preliminary appointment requests",
  },
  {
    icon: <ShieldCheck size={22} />,
    text: "Sends qualified leads to the clinic administrator",
  },
];

export default function DentalProduct() {
  return (
    <section className="relative overflow-hidden bg-black py-28 text-white">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[170px]" />

      <FadeIn>
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
              Ready-to-Use AI Product
            </span>

            <h2 className="mt-8 text-4xl font-extrabold leading-tight md:text-6xl">
              AI Receptionist
              <span className="text-blue-500"> for Dental Clinics</span>
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
              A virtual receptionist answers patients, explains available
              services, accepts preliminary appointment requests and sends
              qualified leads directly to the clinic team.
            </p>

            <div className="mt-10 space-y-4">
              {features.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-4 text-zinc-300"
                >
                  <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
                    {feature.icon}
                  </div>

                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://t.me/flowforge_ai_assistant_bot"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 font-semibold transition hover:scale-105 hover:bg-blue-500"
              >
                Try the Demo
                <ArrowRight size={20} />
              </a>

              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-2xl border border-zinc-700 px-8 py-4 font-semibold transition hover:border-blue-500 hover:bg-white/5"
              >
                Discuss Implementation
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[32px] border border-zinc-800 bg-zinc-900/70 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="rounded-3xl border border-zinc-800 bg-black p-6">
                <div className="flex items-center gap-3 border-b border-zinc-800 pb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                    <Stethoscope size={25} />
                  </div>

                  <div>
                    <p className="font-semibold">
                      AI Receptionist
                    </p>

                    <p className="text-sm text-emerald-400">
                      Online 24/7
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-5">
                  <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-zinc-800 px-5 py-4 text-sm leading-6 text-zinc-200">
                    Hello! I can help you choose a service and submit a
                    preliminary appointment request. What are you interested
                    in?
                  </div>

                  <div className="ml-auto max-w-[75%] rounded-2xl rounded-tr-md bg-blue-600 px-5 py-4 text-sm leading-6 text-white">
                    I would like to book a professional dental cleaning.
                  </div>

                  <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-zinc-800 px-5 py-4 text-sm leading-6 text-zinc-200">
                    Great. What is your name?
                  </div>

                  <div className="ml-auto max-w-[60%] rounded-2xl rounded-tr-md bg-blue-600 px-5 py-4 text-sm leading-6 text-white">
                    John
                  </div>

                  <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-zinc-800 px-5 py-4 text-sm leading-6 text-zinc-200">
                    Nice to meet you, John. Please send your phone number or
                    Telegram username so the clinic can confirm your
                    appointment.
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      size={22}
                      className="mt-0.5 shrink-0 text-emerald-400"
                    />

                    <div>
                      <p className="font-semibold text-emerald-300">
                        Request sent to the administrator
                      </p>

                      <p className="mt-2 text-sm leading-6 text-zinc-400">
                        The patient name, contact details, selected service
                        and preferred time are delivered to the clinic team
                        in Telegram.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-blue-500/20 blur-3xl" />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}