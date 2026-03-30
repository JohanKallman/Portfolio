"use client"

import { getContent } from "../lib/useContent"

export default function About({ lang }: { lang: "en" | "sv" }) {
  const content = getContent(lang)

  return (
    <div>
      <h2 className="ui-heading mb-6">
        {content.about.title}
      </h2>

      <p className="ui-text">
        {content.about.text}
      </p>
    </div>
  )
}