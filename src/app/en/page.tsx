import AIEmployees from "@/components/home/AIEmployees";
import HowItWorks from "@/components/home/HowItWorks";
import Industries from "@/components/home/Industries";
import WhyFlowForge from "@/components/home/WhyFlowForge";
import LiveDemo from "@/components/home/LiveDemo";
import EnglishNavbar from "@/components/home/EnglishNavbar";

export default function EnglishHome() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

        <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
            AI Employees for Business
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
            Hire your first
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              AI Employee.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
            AI employees that answer customers, qualify leads, book
            appointments and automate repetitive work — 24/7.
          </p>

          <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <a
              href="#contact"
              className="rounded-2xl bg-blue-600 px-10 py-5 text-lg font-semibold transition duration-300 hover:scale-105 hover:bg-blue-500"
            >
              Book a Demo
            </a>

            <a
              href="https://t.me/flowforge_ai_assistant_bot"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-zinc-700 px-10 py-5 text-lg font-semibold transition duration-300 hover:border-blue-500 hover:bg-white/5"
            >
              Watch Live Demo
            </a>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-8 text-sm text-zinc-500">
            <span>Dental Clinics</span>
            <span>Real Estate</span>
            <span>Legal Firms</span>
            <span>Customer Support</span>
            <span>Sales Teams</span>
          </div>
        </div>
      </section>
      <AIEmployees />
      <HowItWorks />
      <Industries />
      <WhyFlowForge />
      <LiveDemo />
    </main>
  );
}