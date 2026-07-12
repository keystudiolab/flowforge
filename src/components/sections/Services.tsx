import { Bot, Workflow, Brain } from "lucide-react";
import ServiceCard from "@/components/ui/ServiceCard";

export default function Services() {
  return (
    <section className="py-24 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Наши услуги
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <ServiceCard
            icon={<Bot size={42} />}
            title="AI Боты"
            description="Telegram, WhatsApp и AI-консультанты для бизнеса."
          />

          <ServiceCard
            icon={<Workflow size={42} />}
            title="Автоматизация"
            description="CRM, заявки, интеграции и полная автоматизация процессов."
          />

          <ServiceCard
            icon={<Brain size={42} />}
            title="AI Агент"
            description="Искусственный интеллект, который работает вместо сотрудников."
          />

        </div>

      </div>
    </section>
  );
}