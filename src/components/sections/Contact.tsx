"use client";

import { FormEvent, useState } from "react";
import FadeIn from "@/components/ui/FadeIn";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !business.trim()) {
      setError("Пожалуйста, заполните все поля.");
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
          telegram: email.trim(),
          task: business.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Ошибка отправки");
      }

      setName("");
      setEmail("");
      setBusiness("");
      setSuccess(true);
    } catch (submitError) {
      console.error("Ошибка отправки:", submitError);
      setError("Не удалось отправить заявку. Попробуйте ещё раз.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-32 text-white"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[180px]" />

      <FadeIn>
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
              Бесплатный AI-аудит
            </span>

            <h2 className="mt-8 text-4xl font-extrabold leading-tight sm:text-5xl">
              Найдём, что можно
              <span className="text-blue-500"> автоматизировать</span>
            </h2>

            <p className="mt-6 text-xl leading-9 text-zinc-400">
              Расскажите о своём бизнесе, и мы подготовим персональное
              AI-решение именно под ваши задачи.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-3xl rounded-[32px] border border-zinc-800 bg-zinc-900/70 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Ваше имя"
                autoComplete="name"
                className="w-full rounded-2xl border border-zinc-700 bg-black p-5 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500"
              />

              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Telegram или Email"
                autoComplete="email"
                className="w-full rounded-2xl border border-zinc-700 bg-black p-5 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500"
              />

              <textarea
                rows={6}
                value={business}
                onChange={(event) => setBusiness(event.target.value)}
                placeholder="Кратко опишите вашу задачу..."
                className="w-full resize-none rounded-2xl border border-zinc-700 bg-black p-5 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500"
              />

              {error && (
                <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-red-300">
                  {error}
                </div>
              )}

              {success && (
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-300">
                  Заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.
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
            </form>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}