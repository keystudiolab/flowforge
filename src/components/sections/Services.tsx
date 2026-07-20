import {
  Stethoscope,
  Car,
  Scale,
  Building2,
  Bot,
  Workflow,
} from "lucide-react";
import ServiceCard from "@/components/ui/ServiceCard";
import FadeIn from "@/components/ui/FadeIn";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-zinc-950 py-28 text-white"
    >
      <FadeIn>
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-400">
              Готовые AI-решения
            </span>

            <h2 className="mt-8 text-5xl font-extrabold">
              AI-сотрудники
              <span className="text-blue-500"> для бизнеса</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Мы не просто создаём ботов.
              Мы внедряем AI-сотрудников, которые отвечают клиентам,
              принимают заявки и автоматизируют ежедневную работу компании.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            <ServiceCard
              icon={<Stethoscope size={42} />}
              title="AI-администратор стоматологии"
              description="Отвечает пациентам 24/7, записывает на приём и передаёт готовые заявки администраторам."
            />

            <ServiceCard
              icon={<Car size={42} />}
              title="AI для автосервиса"
              description="Консультирует клиентов, помогает записаться на ремонт и собирает обращения."
            />

            <ServiceCard
              icon={<Scale size={42} />}
              title="AI для юридических компаний"
              description="Принимает первичные обращения и квалифицирует потенциальных клиентов."
            />

            <ServiceCard
              icon={<Building2 size={42} />}
              title="AI для агентств недвижимости"
              description="Обрабатывает входящие заявки, отвечает на вопросы и собирает контакты."
            />

            <ServiceCard
              icon={<Bot size={42} />}
              title="AI-консультанты"
              description="Telegram, WhatsApp и AI-консультанты для сайтов и мессенджеров."
            />

            <ServiceCard
              icon={<Workflow size={42} />}
              title="Индивидуальная автоматизация"
              description="CRM, n8n, OpenAI, интеграции и AI-процессы под задачи вашей компании."
            />

          </div>

        </div>
      </FadeIn>
    </section>
  );
}