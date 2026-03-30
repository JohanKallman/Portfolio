export function toggleTheme() {
  const root = document.documentElement

  if (root.classList.contains("light")) {
    root.classList.remove("light")
    localStorage.setItem("theme", "dark")
  } else {
    root.classList.add("light")
    localStorage.setItem("theme", "light")
  }
}

export function initTheme() {
  const saved = localStorage.getItem("theme")

  if (saved) {
    if (saved === "light") {
      document.documentElement.classList.add("light")
    }
    return
  }

  // fallback → system preference
  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    document.documentElement.classList.add("light")
  }
}