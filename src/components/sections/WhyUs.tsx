import {
  Zap,
  Clock3,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-black py-32 text-white">

      {/* Фоновое свечение */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

      <FadeIn>
        <div className="relative mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
              Наши преимущества
            </span>

            <h2 className="mt-8 text-5xl font-extrabold leading-tight">
              Почему компании
              <br />
              выбирают <span className="text-blue-500">AI Studio</span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
              Мы создаем AI-решения, которые внедряются быстро,
              окупаются в короткие сроки и продолжают приносить
              пользу бизнесу каждый день.
            </p>

          </div>

          {/* Карточки */}

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="group rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-500">

              <Zap
                size={46}
                className="text-blue-400 transition duration-300 group-hover:scale-110"
              />

              <h3 className="mt-8 text-2xl font-bold">
                Быстрый запуск
              </h3>

              <p className="mt-5 leading-8 text-zinc-400">
                Большинство проектов запускаются
                менее чем за две недели.
              </p>

            </div>

            <div className="group rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-500">

              <Clock3
                size={46}
                className="text-blue-400 transition duration-300 group-hover:scale-110"
              />

              <h3 className="mt-8 text-2xl font-bold">
                Экономия времени
              </h3>

              <p className="mt-5 leading-8 text-zinc-400">
                Автоматизация освобождает сотрудников
                от ежедневной рутины.
              </p>

            </div>

            <div className="group rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-500">

              <ShieldCheck
                size={46}
                className="text-blue-400 transition duration-300 group-hover:scale-110"
              />

              <h3 className="mt-8 text-2xl font-bold">
                Надёжность
              </h3>

              <p className="mt-5 leading-8 text-zinc-400">
                Используем современные AI-модели,
                безопасные интеграции и проверенную архитектуру.
              </p>

            </div>

            <div className="group rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-500">

              <TrendingUp
                size={46}
                className="text-blue-400 transition duration-300 group-hover:scale-110"
              />

              <h3 className="mt-8 text-2xl font-bold">
                Рост прибыли
              </h3>

              <p className="mt-5 leading-8 text-zinc-400">
                AI помогает увеличить скорость работы,
                качество обслуживания и доход компании.
              </p>

            </div>

          </div>

          {/* Статистика */}

          <div className="mt-24 grid grid-cols-2 gap-8 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-10 backdrop-blur-xl md:grid-cols-4">

            <div className="text-center">
              <div className="text-5xl font-extrabold text-blue-400">
                50+
              </div>
              <p className="mt-3 text-zinc-400">
                AI-проектов
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-extrabold text-blue-400">
                3000+
              </div>
              <p className="mt-3 text-zinc-400">
                часов автоматизации
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-extrabold text-blue-400">
                98%
              </div>
              <p className="mt-3 text-zinc-400">
                довольных клиентов
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-extrabold text-blue-400">
                24/7
              </div>
              <p className="mt-3 text-zinc-400">
                поддержка AI
              </p>
            </div>

          </div>

        </div>
      </FadeIn>

    </section>
  );
}