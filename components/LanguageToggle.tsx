"use client"

export default function LanguageToggle({
  lang,
  setLang,
}: {
  lang: "en" | "sv"
  setLang: (lang: "en" | "sv") => void
}) {
  return (
    <button
      onClick={() => setLang(lang === "en" ? "sv" : "en")}
      className="ui-link text-sm"
    >
      {lang === "en" ? "SV" : "EN"}
    </button>
  )
}