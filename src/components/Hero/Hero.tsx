"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_60%)]">
      {/* Фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      {/* Голубое свечение */}
      <div className="absolute top-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

      {/* Сетка */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.3)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Контент */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
          AI Automation Studio
        </span>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
          Автоматизация бизнеса
          <br />
          <span className="text-blue-500">
            с помощью AI
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-zinc-400">
          Создаем AI-ботов, AI-агентов и автоматизацию процессов,
          которые помогают бизнесу работать быстрее, снижать расходы и увеличивать прибыль.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-500">
            Бесплатная консультация
          </button>

          <button className="rounded-2xl border border-zinc-700 px-8 py-4 font-semibold transition hover:border-blue-500">
            Смотреть кейсы
          </button>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-zinc-500">
          <span>OpenAI</span>
          <span>Telegram</span>
          <span>WhatsApp</span>
          <span>n8n</span>
          <span>Claude</span>
          <span>Next.js</span>
        </div>
      </div>
    </section>
  );
}