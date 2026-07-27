const steps = [
  {
    number: "01",
    title: "Book a Demo",
    description:
      "Tell us about your business and the tasks you want to automate.",
  },
  {
    number: "02",
    title: "We Build Your AI Employee",
    description:
      "We train your AI employee using your services, processes and knowledge.",
  },
  {
    number: "03",
    title: "Go Live",
    description:
      "Launch within days and let your AI employee work 24/7.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-black py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-400">
            Process
          </span>

          <h2 className="mt-8 text-5xl font-bold">
            How it works
          </h2>

          <p className="mt-6 text-xl text-zinc-400">
            From demo to deployment in just a few days.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8"
            >
              <div className="text-5xl font-extrabold text-blue-500">
                {step.number}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {step.title}
              </h3>

              <p className="mt-4 leading-8 text-zinc-400">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}