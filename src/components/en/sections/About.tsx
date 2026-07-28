import FadeIn from "@/components/ui/FadeIn";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-zinc-950 py-32 text-white"
    >
      <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      <FadeIn>
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <div>
            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
              About FlowForge
            </span>

            <h2 className="mt-8 text-5xl font-extrabold leading-tight">
              We build
              <span className="text-blue-500"> AI solutions </span>
              for modern businesses
            </h2>

            <p className="mt-8 text-lg leading-8 text-zinc-400">
              FlowForge helps companies automate sales, customer support and
              internal processes with artificial intelligence.
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              We develop AI employees, integrations and intelligent systems
              that operate around the clock, reduce costs and help businesses
              scale faster.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-10 backdrop-blur-xl">
            <h3 className="text-3xl font-bold">
              What you get
            </h3>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2
                  className="mt-1 shrink-0 text-blue-400"
                  size={26}
                />

                <p className="text-zinc-300">
                  Automated routine processes without expanding your team.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2
                  className="mt-1 shrink-0 text-blue-400"
                  size={26}
                />

                <p className="text-zinc-300">
                  AI employees that work around the clock, seven days a week.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2
                  className="mt-1 shrink-0 text-blue-400"
                  size={26}
                />

                <p className="text-zinc-300">
                  Integrations with Telegram, CRM, OpenAI, WhatsApp and other
                  business tools.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2
                  className="mt-1 shrink-0 text-blue-400"
                  size={26}
                />

                <p className="text-zinc-300">
                  Less manual work, faster operations and more opportunities
                  for growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}