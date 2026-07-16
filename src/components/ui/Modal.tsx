"use client";

import { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function Modal({ open, onClose }: Props) {
  const [name, setName] = useState("");
  const [telegram, setTelegram] = useState("");
  const [task, setTask] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  async function sendForm() {
    if (!name.trim() || !telegram.trim() || !task.trim()) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    setLoading(true);

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

      alert("✅ Заявка успешно отправлена!");

      setName("");
      setTelegram("");
      setTask("");

      onClose();
    } catch (error) {
      console.error(error);
      alert("❌ Не удалось отправить заявку. Попробуйте ещё раз.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900 p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold text-white">
          Бесплатный AI-аудит
        </h2>

        <p className="mt-3 text-zinc-400">
          Оставьте контакты, и мы покажем, что можно автоматизировать
          в вашем бизнесе.
        </p>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ваше имя"
          className="mt-8 w-full rounded-xl bg-zinc-800 p-4 text-white outline-none"
        />

        <input
          value={telegram}
          onChange={(e) => setTelegram(e.target.value)}
          placeholder="@telegram"
          className="mt-4 w-full rounded-xl bg-zinc-800 p-4 text-white outline-none"
        />

        <textarea
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Кратко опишите вашу задачу"
          rows={5}
          className="mt-4 w-full resize-none rounded-xl bg-zinc-800 p-4 text-white outline-none"
        />

        <button
          onClick={sendForm}
          disabled={loading}
          className="mt-6 w-full rounded-xl bg-blue-600 p-4 font-semibold transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Отправка..." : "Получить AI-аудит"}
        </button>

        <button
          onClick={onClose}
          disabled={loading}
          className="mt-4 w-full text-zinc-400 transition hover:text-white"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
}