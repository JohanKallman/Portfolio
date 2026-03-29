"use client"

export default function Hero() {
  return (
    <section className="pt-20 pb-6 md:py-24">

      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight">
        .NET Developer
      </h1>

      <p className="mt-6 max-w-xl text-zinc-400 text-base sm:text-lg leading-relaxed">
        Building APIs, database-driven systems and scalable backend solutions
        with a focus on clean architecture and real-world applications.
      </p>

      {/* Tech stack */}
      <div className="mt-6 flex flex-wrap gap-2">
        {[".NET", "C#", "ASP.NET Core", "SQL Server", "REST APIs", "React"].map((tech) => (
          <span
            key={tech}
            className="text-xs bg-zinc-800 px-2 py-1 rounded-md border border-zinc-700"
          >
            {tech}
          </span>
        ))}
      </div>

    </section>
  )
}