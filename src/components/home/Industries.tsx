const industries = [
  "Healthcare",
  "Dental Clinics",
  "Real Estate",
  "Law Firms",
  "Beauty",
  "Automotive",
  "E-commerce",
  "Construction",
];

export default function Industries() {
  return (
    <section className="bg-zinc-950 py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-400">
            Industries
          </span>

          <h2 className="mt-8 text-5xl font-bold">
            AI Employees for every industry
          </h2>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {industries.map((industry) => (
            <div
              key={industry}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center transition hover:border-blue-500 hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold">
                {industry}
              </h3>

              <button className="mt-6 text-blue-400">
                Learn more →
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}