"use client"

export default function Hero() {
  return (
    <section className="py-32">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
        Fullstack Developer
      </h1>

      <p className="ui-text mt-6 max-w-xl">
        I build fast, scalable web applications with modern technologies.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
       <button className="ui-btn-primary">
          View Projects
        </button>

        <button className="ui-btn-secondary">
          Contact
        </button>
      </div>
    </section>
  )
}