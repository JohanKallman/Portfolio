export default function Footer() {
  return (
    <footer className="mt-32 border-t border-zinc-800 w-full">
      
      <div className="max-w-6xl mx-auto px-6 py-10 flex justify-between ui-text-muted">
        
        <span>© {new Date().getFullYear()} Johan Källman</span>

        <div className="flex gap-4">
          <a href="#" className="ui-link">GitHub</a>
          <a href="#" className="ui-link">LinkedIn</a>
        </div>

      </div>

    </footer>
  )
}