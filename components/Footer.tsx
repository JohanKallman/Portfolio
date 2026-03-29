export default function Footer() {
  return (
    <footer className="mt-32 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-zinc-500 flex justify-between">
        
        <span>© {new Date().getFullYear()} Johan Källman</span>

        <div className="flex gap-4">
          <a href="#" className="hover:text-white">GitHub</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
        </div>

      </div>
    </footer>
  )
}