import {
  Building2,
  Headphones,
  Scale,
  Stethoscope,
  TrendingUp,
} from "lucide-react";

const employees = [
  {
    icon: <Stethoscope size={30} />,
    title: "AI Dental Receptionist",
    description:
      "Answers patients, qualifies requests and books appointments 24/7.",
  },
  {
    icon: <TrendingUp size={30} />,
    title: "AI Sales Employee",
    description:
      "Handles inbound leads, qualifies prospects and schedules meetings.",
  },
  {
    icon: <Headphones size={30} />,
    title: "AI Customer Support",
    description:
      "Answers repetitive questions and reduces support workload.",
  },
  {
    icon: <Building2 size={30} />,
    title: "AI Real Estate Assistant",
    description:
      "Responds to buyers, collects requirements and routes qualified leads.",
  },
  {
    icon: <Scale size={30} />,
    title: "AI Legal Assistant",
    description:
      "Collects initial case details and prepares leads for consultation.",
  },
];

export default function AIEmployees() {
  return (
    <section
      id="employees"
      className="bg-zinc-950 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
            AI Employees
          </span>

          <h2 className="mt-8 text-4xl font-extrabold md:text-6xl">
            Built for real business tasks
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Deploy AI employees that communicate with customers,
            qualify leads and automate repetitive work.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {employees.map((employee) => (
            <article
              key={employee.title}
              className="group rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500/60"
            >
              <div className="inline-flex rounded-2xl bg-blue-500/10 p-4 text-blue-400">
                {employee.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {employee.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {employee.description}
              </p>

              <a
                href="#contact"
                className="mt-7 inline-flex font-semibold text-blue-400 transition hover:text-blue-300"
              >
                Book a demo →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}