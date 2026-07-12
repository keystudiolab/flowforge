export default function Contact() {
  return (
    <section className="bg-zinc-950 py-28 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <h2 className="text-5xl font-bold">
          Готовы автоматизировать бизнес?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
          Расскажите о своей задаче.
          Мы бесплатно покажем,
          какие процессы можно автоматизировать
          уже сейчас.
        </p>

        <div className="mt-14 rounded-3xl border border-zinc-800 bg-zinc-900 p-10">

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Ваше имя"
              className="w-full rounded-xl border border-zinc-700 bg-black px-5 py-4 outline-none transition focus:border-blue-500"
            />

            <input
              type="text"
              placeholder="Telegram или телефон"
              className="w-full rounded-xl border border-zinc-700 bg-black px-5 py-4 outline-none transition focus:border-blue-500"
            />

            <textarea
              placeholder="Опишите вашу задачу"
              rows={6}
              className="w-full rounded-xl border border-zinc-700 bg-black px-5 py-4 outline-none transition focus:border-blue-500"
            />

            <button
              className="w-full rounded-xl bg-blue-600 py-5 text-lg font-semibold transition hover:bg-blue-500"
            >
              Получить бесплатную консультацию
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}