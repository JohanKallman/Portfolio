"use client"

export default function Hero() {
  return (
    <section className="py-32">
      <h1 className="text-5xl md:text-7xl font-bold leading-tight">
        Fullstack Developer
      </h1>

      <p className="text-zinc-400 mt-6 text-lg max-w-xl">
        I build fast, scalable web applications with modern technologies.
      </p>

      <div className="mt-8 flex gap-4">
        <button className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:opacity-90 transition">
          View Projects
        </button>

        <button className="border border-zinc-700 px-6 py-3 rounded-xl hover:border-white transition">
          Contact
        </button>
      </div>
    </section>
  )
}