"use client"

import { useState, useEffect } from "react"
import { toggleTheme } from "../lib/theme"
import LanguageToggle from "./LanguageToggle"
import { Sun, Moon } from "lucide-react"

export default function Navbar({
  lang,
  setLang,
}: {
  lang: "en" | "sv"
  setLang: (lang: "en" | "sv") => void
}) {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
  const isLight = document.documentElement.classList.contains("light")
  setTheme(isLight ? "light" : "dark")
}, [])

  return (
    <nav className="fixed top-0 left-0 w-full z-50 ui-navbar">
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

          <LanguageToggle lang={lang} setLang={setLang} />

          <button
            onClick={() => {
              toggleTheme()
              setTheme(prev => (prev === "light" ? "dark" : "light"))
            }}
            className="ui-link flex items-center"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className={`ui-hamburger-line ${open ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`ui-hamburger-line ${open ? "opacity-0" : ""}`} />
          <span className={`ui-hamburger-line ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

       {/* Mobile menu */}
      <div
        className={`md:hidden absolute left-0 top-full w-full transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="ui-mobile-menu px-6 py-4 flex flex-col items-start gap-4">

          <a href="#projects" onClick={() => setOpen(false)} className="ui-link">
            Projects
          </a>

          <a href="#contact" onClick={() => setOpen(false)} className="ui-link">
            Contact
          </a>

          <LanguageToggle lang={lang} setLang={setLang} />

          <button
            onClick={() => {
              toggleTheme()
              setTheme(prev => (prev === "light" ? "dark" : "light"))
            }}
            className="ui-link flex items-center"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

        </div>
      </div>

    </nav>
  )
}