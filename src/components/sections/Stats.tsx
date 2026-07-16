"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Bot,
  Clock3,
  Rocket,
  Settings2,
} from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

type AnimatedNumberProps = {
  value: number;
  suffix?: string;
};

function AnimatedNumber({
  value,
  suffix = "",
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.6,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1400;
    const startTime = performance.now();
    let animationFrame = 0;

    function animate(currentTime: number) {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(value * easedProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    }

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  {
    icon: <Bot size={34} />,
    value: 24,
    suffix: "/7",
    title: "AI работает",
    description: "Без выходных и отпусков",
  },
  {
    icon: <Rocket size={34} />,
    value: 7,
    suffix: " дней",
    title: "Запуск MVP",
    description: "Для большинства проектов",
  },
  {
    icon: <Settings2 size={34} />,
    value: 100,
    suffix: "%",
    title: "Индивидуальная разработка",
    description: "Под задачи вашего бизнеса",
  },
  {
    icon: <Clock3 size={34} />,
    value: 4,
    suffix: "+",
    title: "Интеграции",
    description: "Telegram • OpenAI • CRM • n8n",
  },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative overflow-hidden bg-zinc-950 py-28 text-white"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[150px]" />

      <FadeIn>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
              FlowForge в цифрах
            </span>

            <h2 className="mt-8 text-4xl font-extrabold md:text-5xl">
              Результат, который можно
              <span className="text-blue-500"> измерить</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Мы создаём AI-системы, которые экономят время,
              автоматизируют рутину и помогают бизнесу работать быстрее.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900/90 to-zinc-950 p-8 text-center shadow-2xl shadow-black/20 transition-colors duration-300 hover:border-blue-500/70"
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-6 flex justify-center text-blue-400 transition duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  <div className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-5xl font-extrabold text-transparent md:text-6xl">
                    <AnimatedNumber
                      value={item.value}
                      suffix={item.suffix}
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {item.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}