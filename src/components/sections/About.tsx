import FadeIn from "@/components/ui/FadeIn";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-zinc-950 py-32 text-white"
    >
      {/* Свечение */}
      <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      <FadeIn>
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          {/* Левая колонка */}

          <div>

            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
              О компании
            </span>

            <h2 className="mt-8 text-5xl font-extrabold leading-tight">
              Мы создаём
              <span className="text-blue-500"> AI-решения </span>
              для современного бизнеса
            </h2>

            <p className="mt-8 text-lg leading-8 text-zinc-400">
              FlowForge помогает компаниям автоматизировать продажи,
              поддержку клиентов и внутренние процессы с помощью
              искусственного интеллекта.
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Мы разрабатываем AI-ботов, интеграции и интеллектуальные
              системы, которые работают круглосуточно, уменьшают
              расходы и позволяют бизнесу масштабироваться быстрее.
            </p>

          </div>

          {/* Правая колонка */}

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-10 backdrop-blur-xl">

            <h3 className="text-3xl font-bold">
              Что вы получите
            </h3>

            <div className="mt-10 space-y-6">

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 text-blue-400" size={26} />
                <p className="text-zinc-300">
                  Автоматизацию рутинных процессов без увеличения штата.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 text-blue-400" size={26} />
                <p className="text-zinc-300">
                  AI-ассистентов, которые работают 24/7 без выходных.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 text-blue-400" size={26} />
                <p className="text-zinc-300">
                  Интеграцию Telegram, CRM, OpenAI, WhatsApp и других сервисов.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 text-blue-400" size={26} />
                <p className="text-zinc-300">
                  Экономию времени сотрудников и рост прибыли компании.
                </p>
              </div>

            </div>

          </div>

        </div>
      </FadeIn>
    </section>
  );
}