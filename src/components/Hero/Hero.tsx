export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold">
          Мой первый профессиональный сайт 🚀
        </h1>

        <p className="mt-6 text-xl text-gray-400">
          Создан на Next.js + React + Tailwind CSS
        </p>

        <button className="mt-10 rounded-xl bg-white px-8 py-4 text-black font-semibold hover:scale-105 transition">
          Начать
        </button>
      </div>
    </section>
  );
}