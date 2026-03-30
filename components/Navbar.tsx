"use client"

import { useState } from "react"
import { toggleTheme } from "../lib/theme"
import LanguageToggle from "./LanguageToggle"

export default function Navbar({
  lang,
  setLang,
}: {
  lang: "en" | "sv"
  setLang: (lang: "en" | "sv") => void
}) {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur border-b ui-border bg-[var(--color-bg)]/80">
      
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <span className="font-semibold text-lg">
          Johan Källman
        </span>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 text-sm items-center">
          <a href="#projects" className="ui-link">
            Projects
          </a>
          <a href="#contact" className="ui-link">
            Contact
          </a>

          {/* Language toggle */}
          <LanguageToggle lang={lang} setLang={setLang} />

          {/* Theme button */}
          <button
            onClick={toggleTheme}
            className="ui-link text-sm"
          >
            Theme
          </button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center gap-1 w-8 h-8"
        >
          <span className={`block h-0.5 w-6 bg-[var(--color-text)] ${open ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[var(--color-text)] ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[var(--color-text)] ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>

      </div>

      {/* Mobile menu */}
      <div className={`md:hidden px-6 overflow-hidden transition-all duration-300 ${open ? "max-h-40 py-4" : "max-h-0"}`}>
        <div className="flex flex-col gap-4">
          <a href="#projects" onClick={() => setOpen(false)} className="ui-link">
            Projects
          </a>

          <a href="#contact" onClick={() => setOpen(false)} className="ui-link">
            Contact
          </a>

          {/* Mobile toggles */}
          <LanguageToggle lang={lang} setLang={setLang} />

          <button onClick={toggleTheme} className="ui-link text-left">
            Theme
          </button>
        </div>
      </div>

    </nav>
  )
}