import { Zap, Clock3, ShieldCheck, TrendingUp } from "lucide-react";

export default function WhyUs() {
  return (
    <section className="py-28 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Почему выбирают нас
        </h2>

        <p className="mt-6 text-center text-zinc-400 max-w-2xl mx-auto">
          Мы внедряем искусственный интеллект и автоматизацию,
          которые действительно экономят деньги и время бизнеса.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          <div className="rounded-3xl bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 p-8 hover:border-blue-500 transition-all duration-500">

            <Zap className="text-blue-500 mb-6" size={42} />

            <h3 className="text-2xl font-bold">
              Быстрый запуск
            </h3>

            <p className="mt-4 text-zinc-400">
              Большинство проектов запускаются за несколько дней.
            </p>

          </div>

          <div className="rounded-3xl bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 p-8 hover:border-blue-500 transition-all duration-500">

            <Clock3 className="text-blue-500 mb-6" size={42} />

            <h3 className="text-2xl font-bold">
              Экономия времени
            </h3>

            <p className="mt-4 text-zinc-400">
              Автоматизация снимает рутинные задачи с сотрудников.
            </p>

          </div>

          <div className="rounded-3xl bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 p-8 hover:border-blue-500 transition-all duration-500">

            <ShieldCheck className="text-blue-500 mb-6" size={42} />

            <h3 className="text-2xl font-bold">
              Надёжность
            </h3>

            <p className="mt-4 text-zinc-400">
              Используем современные технологии и проверенные решения.
            </p>

          </div>

          <div className="rounded-3xl bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 p-8 hover:border-blue-500 transition-all duration-500">

            <TrendingUp className="text-blue-500 mb-6" size={42} />

            <h3 className="text-2xl font-bold">
              Рост прибыли
            </h3>

            <p className="mt-4 text-zinc-400">
              Помогаем бизнесу зарабатывать больше благодаря AI.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}