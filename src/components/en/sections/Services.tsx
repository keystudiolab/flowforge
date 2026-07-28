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
              Ready-to-Use AI Solutions
            </span>

            <h2 className="mt-8 text-5xl font-extrabold">
              AI Employees
              <span className="text-blue-500"> for Business</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              We do more than build bots. We implement AI employees that
              answer customers, capture leads and automate daily business
              operations.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={<Stethoscope size={42} />}
              title="AI Dental Receptionist"
              description="Answers patients 24/7, books appointments and sends qualified leads to your team."
            />

            <ServiceCard
              icon={<Car size={42} />}
              title="AI for Auto Repair Shops"
              description="Consults customers, helps schedule repairs and collects incoming requests."
            />

            <ServiceCard
              icon={<Scale size={42} />}
              title="AI for Law Firms"
              description="Handles initial inquiries and qualifies potential clients."
            />

            <ServiceCard
              icon={<Building2 size={42} />}
              title="AI for Real Estate Agencies"
              description="Processes incoming leads, answers questions and collects contact details."
            />

            <ServiceCard
              icon={<Bot size={42} />}
              title="AI Consultants"
              description="AI consultants for Telegram, WhatsApp, websites and other communication channels."
            />

            <ServiceCard
              icon={<Workflow size={42} />}
              title="Custom Automation"
              description="CRM, n8n, OpenAI, integrations and AI workflows built around your business needs."
            />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}