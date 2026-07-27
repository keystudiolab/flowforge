import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  UserRound,
} from "lucide-react";

export default function LiveDemo() {
  return (
    <section className="bg-zinc-950 py-28 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
            Live Demo
          </span>

          <h2 className="mt-8 text-4xl font-extrabold md:text-6xl">
            Try an AI Employee
            <span className="text-blue-500"> right now</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Experience how an AI Employee communicates with customers,
            collects information and turns conversations into qualified leads.
          </p>

          <div className="mt-10 space-y-4 text-zinc-300">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-blue-400" size={22} />
              <span>Answers instantly</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-blue-400" size={22} />
              <span>Collects customer details</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-blue-400" size={22} />
              <span>Sends qualified leads to your team</span>
            </div>
          </div>

          <a
            href="https://t.me/flowforge_ai_assistant_bot"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 font-semibold transition hover:scale-105 hover:bg-blue-500"
          >
            Open Live Demo
            <ArrowRight size={20} />
          </a>
        </div>

        <div className="rounded-[32px] border border-zinc-800 bg-black p-6">
          <div className="flex items-center gap-3 border-b border-zinc-800 pb-5">
            <div className="rounded-2xl bg-blue-500/10 p-3 text-blue-400">
              <MessageCircle size={24} />
            </div>

            <div>
              <p className="font-semibold">AI Employee</p>
              <p className="text-sm text-emerald-400">Online 24/7</p>
            </div>
          </div>

          <div className="mt-6 space-y-5">
            <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-zinc-800 px-5 py-4 text-sm leading-6">
              Hi! I can help you choose a service and book an appointment.
              What do you need help with?
            </div>

            <div className="ml-auto flex max-w-[75%] items-start gap-3 rounded-2xl rounded-tr-md bg-blue-600 px-5 py-4 text-sm leading-6">
              <UserRound size={18} className="mt-0.5 shrink-0" />
              I want to book a consultation.
            </div>

            <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-zinc-800 px-5 py-4 text-sm leading-6">
              Of course. What is your name?
            </div>

            <div className="ml-auto max-w-[55%] rounded-2xl rounded-tr-md bg-blue-600 px-5 py-4 text-sm leading-6">
              John
            </div>

            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
              <p className="font-semibold text-emerald-300">
                Qualified lead captured
              </p>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Name, contact details, service and preferred time are sent to
                your team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}