"use client"

import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-zinc-800">
      
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <span className="font-semibold text-lg">
          Johan Källman
        </span>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 text-sm text-zinc-400">
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center gap-1 w-8 h-8"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              open ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>

      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden px-6 overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 text-zinc-400">
          <a
            href="#projects"
            onClick={() => setOpen(false)}
            className="ui-link"
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="ui-link"
          >
            Contact
          </a>
        </div>
      </div>

    </nav>
  )
}