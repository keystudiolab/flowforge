export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold text-white">
          AI Studio
        </h1>

        <nav className="flex gap-8 text-sm text-zinc-300">
          <a href="#">Услуги</a>
          <a href="#">Кейсы</a>
          <a href="#">Контакты</a>
        </nav>

        <button className="rounded-xl bg-white px-5 py-2 font-semibold text-black">
          Связаться
        </button>
      </div>
    </header>
  );
}