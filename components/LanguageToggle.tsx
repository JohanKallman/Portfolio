"use client"

/**
 * 🌍 Language Toggle (clean version)
 * 
 * - använder EN / SV istället för flaggor
 * - tydlig active state
 * - helt kompatibel med dark/light
 */

export default function LanguageToggle({
  lang,
  setLang,
}: {
  lang: "en" | "sv"
  setLang: (lang: "en" | "sv") => void
}) {
  return (
    <div className="ui-lang-toggle">

      {/* EN */}
      <button
        onClick={() => setLang("en")}
        className={`ui-lang-btn ${
          lang === "en"
            ? "ui-lang-btn-active"
            : "ui-lang-btn-inactive"
        }`}
      >
        EN
      </button>

      {/* SV */}
      <button
        onClick={() => setLang("sv")}
        className={`ui-lang-btn ${
          lang === "sv"
            ? "ui-lang-btn-active"
            : "ui-lang-btn-inactive"
        }`}
      >
        SV
      </button>

    </div>
  )
}