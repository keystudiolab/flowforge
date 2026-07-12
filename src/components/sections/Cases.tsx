export default function Cases() {
  const cases = [
    {
      title: "AI-консультант для Telegram",
      description:
        "Автоматически отвечает клиентам, принимает заявки и передает их менеджеру.",
      result: "До 80% вопросов закрываются без участия человека.",
    },
    {
      title: "Автоматизация отдела продаж",
      description:
        "Интеграция CRM, Telegram и AI для обработки заявок.",
      result: "Сокращение времени обработки заявок в несколько раз.",
    },
    {
      title: "AI для интернет-магазина",
      description:
        "Консультирует покупателей, помогает выбрать товар и оформляет заказ.",
      result: "Рост конверсии и снижение нагрузки на поддержку.",
    },
  ];

  return (
    <section className="bg-black py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-5xl font-bold">
          Кейсы
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-zinc-400">
          Примеры автоматизации, которые помогают бизнесу экономить время,
          увеличивать продажи и снижать расходы.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {cases.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 transition hover:-translate-y-2 hover:border-blue-500"
            >
              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-5 text-zinc-400">
                {item.description}
              </p>

              <div className="mt-8 rounded-xl bg-blue-500/10 p-4 text-blue-400">
                {item.result}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}