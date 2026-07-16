"use client";

import { FormEvent, useState } from "react";
import FadeIn from "@/components/ui/FadeIn";

export default function Contact() {
  const [name, setName] = useState("");
  const [telegram, setTelegram] = useState("");
  const [task, setTask] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !telegram.trim() || !task.trim()) {
      setError("Заполните все поля.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          telegram: telegram.trim(),
          task: task.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Ошибка отправки");
      }

      setName("");
      setTelegram("");
      setTask("");
      setSuccess(true);
    } catch (submitError) {
      console.error(submitError);
      setError("Не удалось отправить заявку. Попробуйте ещё раз.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-zinc-950 py-28 text-white"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[150px]" />

      <FadeIn>
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
              Бесплатный AI-аудит
            </span>

            <h2 className="mt-8 text-4xl font-extrabold leading-tight md:text-5xl">
              Найдём, что можно
              <span className="text-blue-500"> автоматизировать </span>
              в вашем бизнесе
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Опишите задачу. Мы изучим процесс и предложим конкретное
              AI-решение без лишней теории и навязанных услуг.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-3xl rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-10">
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Ваше имя"
                  autoComplete="name"
                  className="w-full rounded-2xl border border-zinc-700 bg-black/70 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500"
                />

                <input
                  type="text"
                  value={telegram}
                  onChange={(event) => setTelegram(event.target.value)}
                  placeholder="Telegram или телефон"
                  autoComplete="tel"
                  className="w-full rounded-2xl border border-zinc-700 bg-black/70 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500"
                />
              </div>

              <textarea
                value={task}
                onChange={(event) => setTask(event.target.value)}
                placeholder="Кратко опишите задачу"
                rows={6}
                className="w-full resize-none rounded-2xl border border-zinc-700 bg-black/70 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500"
              />

              {error && (
                <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-sm text-red-300">
                  {error}
                </div>
              )}

              {success && (
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-4 text-sm text-emerald-300">
                  Заявка отправлена. Мы свяжемся с вами в ближайшее время.
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-blue-600 py-5 text-lg font-semibold transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "Отправка..."
                  : "Получить бесплатную консультацию"}
              </button>

              <p className="text-center text-sm leading-6 text-zinc-500">
                Нажимая кнопку, вы соглашаетесь на обработку контактных данных.
              </p>
            </form>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}