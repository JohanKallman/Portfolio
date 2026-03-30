import { getContent } from "../lib/useContent"

export default function Footer({ lang }: { lang: "en" | "sv" }) {
  const content = getContent(lang)

 const locale = lang === "sv" ? "sv-SE" : "en-US"

const lastUpdated = new Date().toLocaleDateString(locale, {
  year: "numeric",
  month: "short",
})

  return (
    <footer className="mt-32 border-t w-full" style={{ borderColor: "var(--color-border)", background: "var(--color-bg-footer)"}}>
      
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm">

        {/* Left */}
        <div className="flex flex-col gap-1 ui-text-muted">
          <span>© {new Date().getFullYear()} Johan Källman</span>

          <span className="text-xs">  
            {content.footer.built}
          </span>

          <span className="text-xs">
            {content.footer.updated}: {lastUpdated}
          </span>
        </div>

        {/* Right */}
        <div className="flex gap-4">
          <a href="#" className="ui-link">GitHub</a>
          <a href="#" className="ui-link">LinkedIn</a>
        </div>

      </div>

    </footer>
  )
}