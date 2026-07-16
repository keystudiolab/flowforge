import { Bot, Workflow, Brain } from "lucide-react";
import ServiceCard from "@/components/ui/ServiceCard";
import FadeIn from "@/components/ui/FadeIn";

export default function Services() {
  return (
    <section
  id="services"
  className="bg-zinc-950 py-24 text-white"
>
      <FadeIn>
        <div className="mx-auto max-w-6xl px-6">

          <h2 className="text-center text-4xl font-bold">
            Наши услуги
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            <ServiceCard
              icon={<Bot size={42} />}
              title="AI Боты"
              description="Telegram, WhatsApp и AI-консультанты для бизнеса."
            />

            <ServiceCard
              icon={<Workflow size={42} />}
              title="Автоматизация"
              description="CRM, заявки, интеграции и автоматизация бизнес-процессов."
            />

            <ServiceCard
              icon={<Brain size={42} />}
              title="AI Агент"
              description="Искусственный интеллект, который работает вместо сотрудников 24/7."
            />

          </div>

        </div>
      </FadeIn>
    </section>
  );
}