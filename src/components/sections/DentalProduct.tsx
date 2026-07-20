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
    text: "Отвечает пациентам 24/7",
  },
  {
    icon: <Stethoscope size={22} />,
    text: "Помогает выбрать услугу",
  },
  {
    icon: <Clock3 size={22} />,
    text: "Принимает предварительную запись",
  },
  {
    icon: <ShieldCheck size={22} />,
    text: "Передаёт готовую заявку администратору",
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
              Готовый AI-продукт
            </span>

            <h2 className="mt-8 text-4xl font-extrabold leading-tight md:text-6xl">
              AI-администратор
              <span className="text-blue-500"> для стоматологии</span>
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
              Виртуальный администратор отвечает пациентам,
              консультирует по услугам, принимает предварительную запись
              и отправляет готовые заявки сотруднику клиники.
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
                Попробовать демо
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
                Обсудить внедрение
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
                      AI-администратор
                    </p>
                    <p className="text-sm text-emerald-400">
                      Онлайн 24/7
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-5">
                  <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-zinc-800 px-5 py-4 text-sm leading-6 text-zinc-200">
                    Здравствуйте! Помогу выбрать услугу и оформить
                    предварительную запись. Что вас интересует?
                  </div>

                  <div className="ml-auto max-w-[75%] rounded-2xl rounded-tr-md bg-blue-600 px-5 py-4 text-sm leading-6 text-white">
                    Хочу записаться на профессиональную чистку.
                  </div>

                  <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-zinc-800 px-5 py-4 text-sm leading-6 text-zinc-200">
                    Хорошо. Как вас зовут?
                  </div>

                  <div className="ml-auto max-w-[60%] rounded-2xl rounded-tr-md bg-blue-600 px-5 py-4 text-sm leading-6 text-white">
                    Иван
                  </div>

                  <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-zinc-800 px-5 py-4 text-sm leading-6 text-zinc-200">
                    Приятно познакомиться, Иван. Напишите номер телефона
                    или Telegram для подтверждения записи.
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
                        Заявка передана администратору
                      </p>

                      <p className="mt-2 text-sm leading-6 text-zinc-400">
                        Имя, контакт, услуга и желаемое время приходят
                        сотруднику клиники в Telegram.
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