"use client"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Name */}
        <span className="font-semibold text-lg">
          Johan Källman
        </span>

        {/* Links */}
        <div className="flex gap-6 text-sm text-zinc-400">
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

      </div>
    </nav>
  )
}