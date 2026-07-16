import { ArrowUpRight, Bot, Workflow, Brain } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function Cases() {
  const cases = [
    {
      icon: <Bot size={42} />,
      title: "AI-консультант для Telegram",
      description:
        "ИИ отвечает клиентам 24/7, квалифицирует заявки и передает менеджеру только горячих лидов.",
      result: "+80% обращений обрабатываются автоматически",
      stack: ["Telegram", "OpenAI", "n8n"],
    },
    {
      icon: <Workflow size={42} />,
      title: "Автоматизация отдела продаж",
      description:
        "CRM, AI и Telegram объединены в единую систему обработки клиентов.",
      result: "−70% времени на обработку заявок",
      stack: ["CRM", "AI", "API"],
    },
    {
      icon: <Brain size={42} />,
      title: "AI для интернет-магазина",
      description:
        "ИИ помогает подобрать товар, отвечает на вопросы покупателей и оформляет заказ.",
      result: "+37% рост конверсии",
      stack: ["OpenAI", "Telegram", "Analytics"],
    },
  ];

  return (
    <section
      id="cases"
      className="relative overflow-hidden bg-black py-32 text-white"
    >
      {/* Голубое свечение */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[150px]" />

      <FadeIn>
        <div className="relative mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
              Кейсы
            </span>

            <h2 className="mt-8 text-5xl font-extrabold">
              Реальные AI-решения
              <br />
              для бизнеса
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
              Мы создаем AI-системы, которые уменьшают количество
              ручной работы, увеличивают продажи и делают бизнес
              быстрее.
            </p>

          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">

            {cases.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-500"
              >
                <div className="flex items-center justify-between">

                  <div className="rounded-2xl bg-blue-500/10 p-4 text-blue-400 transition group-hover:scale-110">
                    {item.icon}
                  </div>

                  <ArrowUpRight className="text-zinc-500 transition group-hover:text-blue-400" />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-zinc-400">
                  {item.description}
                </p>

                <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">
                  <div className="text-sm text-zinc-400">
                    Результат
                  </div>

                  <div className="mt-2 text-xl font-bold text-blue-400">
                    {item.result}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            ))}

          </div>

        </div>
      </FadeIn>
    </section>
  );
}