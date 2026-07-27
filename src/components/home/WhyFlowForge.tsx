import {
  BrainCircuit,
  Clock3,
  PlugZap,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

const benefits = [
  {
    icon: <Clock3 size={28} />,
    title: "Works 24/7",
    description:
      "Your AI Employee responds instantly, even outside business hours.",
  },
  {
    icon: <Target size={28} />,
    title: "Never misses a lead",
    description:
      "Every conversation is captured, qualified and routed to your team.",
  },
  {
    icon: <BrainCircuit size={28} />,
    title: "Learns your business",
    description:
      "We train it on your services, workflows, offers and internal knowledge.",
  },
  {
    icon: <PlugZap size={28} />,
    title: "Connects to your tools",
    description:
      "Integrates with CRM systems, messengers, forms and automation platforms.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Built around your rules",
    description:
      "Your AI Employee follows your business logic, tone and escalation process.",
  },
  {
    icon: <Sparkles size={28} />,
    title: "Launches in days",
    description:
      "Start with a working version quickly and improve it using real conversations.",
  },
];

export default function WhyFlowForge() {
  return (
    <section className="bg-black py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
            Why FlowForge
          </span>

          <h2 className="mt-8 text-4xl font-extrabold md:text-6xl">
            Built to do real work
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Not a basic chatbot. A custom AI Employee designed around your
            business, customers and workflows.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500/60"
            >
              <div className="inline-flex rounded-2xl bg-blue-500/10 p-4 text-blue-400">
                {benefit.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {benefit.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}