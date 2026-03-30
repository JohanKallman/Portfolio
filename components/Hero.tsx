"use client"

import { getContent } from "../lib/useContent"

export default function Hero({ lang }: { lang: "en" | "sv" }) {
  const content = getContent(lang)

  return (
    <section className="pt-24 pb-10">

      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
        {content.hero.title}
      </h1>

      <p className="ui-text mt-6 max-w-xl">
        {content.hero.subtitle}
      </p>

      <div className="flex flex-wrap gap-2 mt-6">
        {[".NET", "C#", "ASP.NET Core", "SQL", "APIs", "React"].map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text)]"
          >
            {t}
          </span>
        ))}
      </div>

    </section>
  )
}