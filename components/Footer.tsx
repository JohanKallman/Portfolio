export default function Footer() {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  })

  return (
    <footer className="mt-32 border-t border-zinc-800 w-full">
      
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-zinc-500">
        
        {/* Left */}
        <div className="flex flex-col gap-1">
          <span>© {new Date().getFullYear()} Johan Källman</span>

          <span className="text-xs text-zinc-500">
            Built with Next.js + TypeScript + Tailwind
          </span>

          <span className="text-xs text-zinc-500">
            Last updated: {lastUpdated}
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