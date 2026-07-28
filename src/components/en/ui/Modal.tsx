"use client";

import { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function Modal({ open, onClose }: Props) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  async function sendForm() {
    if (!name.trim() || !contact.trim() || !company.trim()) {
      alert("Please complete all fields.");
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
          telegram: contact.trim(),
          task: company.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to send the request");
      }

      alert("Your request has been received. We will contact you shortly.");

      setName("");
      setContact("");
      setCompany("");
      onClose();
    } catch (error) {
      console.error("Request submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 backdrop-blur-xl"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-[32px] border border-zinc-800 bg-[#0B0B0B] p-8 shadow-2xl sm:p-10"
        onClick={(event) => event.stopPropagation()}
      >
        <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
          Book a Demo
        </span>

        <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
          Hire your first AI Employee
        </h2>

        <p className="mt-4 text-lg leading-8 text-zinc-400">
          Tell us about your business. We will prepare a personalized AI
          Employee demo for your company.
        </p>

        <input
          type="text"
          autoComplete="name"
          placeholder="Your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="mt-10 w-full rounded-2xl border border-zinc-800 bg-zinc-900 p-5 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500"
        />

        <input
          type="text"
          placeholder="Telegram or Email"
          value={contact}
          onChange={(event) => setContact(event.target.value)}
          className="mt-5 w-full rounded-2xl border border-zinc-800 bg-zinc-900 p-5 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500"
        />

        <textarea
          rows={5}
          placeholder="Tell us about your business and task..."
          value={company}
          onChange={(event) => setCompany(event.target.value)}
          className="mt-5 w-full resize-none rounded-2xl border border-zinc-800 bg-zinc-900 p-5 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500"
        />

        <button
          type="button"
          onClick={sendForm}
          disabled={loading}
          className="mt-8 w-full rounded-2xl bg-blue-600 p-5 text-lg font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Book a Demo"}
        </button>

        <button
          type="button"
          onClick={onClose}
          disabled={loading}
          className="mt-5 w-full text-zinc-500 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          Close
        </button>
      </div>
    </div>
  );
}