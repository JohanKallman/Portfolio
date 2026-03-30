"use client"

import { useState } from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ProjectCard from "../components/ProjectCard"
import About from "../components/About"
import Footer from "../components/Footer"
import { getContent } from "../lib/useContent"
import Container from "../components/Container"

type Project = {
  title: string
  description: string
  image: string
  tech: string[]
  status: "live" | "ongoing" | "upcoming"
  liveUrl?: string
  githubUrl?: string
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("all")
  const [lang, setLang] = useState<"en" | "sv">("en")

  const content = getContent(lang) 
const projects = content.projectList as Project[]

  return (
    
    <main className="min-h-screen">

      <Navbar lang={lang} setLang={setLang} />

      <Container>

        {/* HERO */}
        <Hero lang={lang} />

        {/* PROJECTS */}
        <section id="projects" className="mt-16">

          <h2 className="ui-heading mb-6">
            {content.projects.title}
          </h2>

          {/* Tabs */}
          <div className="flex gap-6 border-b border-[var(--color-border)]">
            {(["all", "ongoing", "upcoming"] as const).map((tab) => {
              const isActive = activeTab === tab

              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative pb-3 text-sm transition ${
                    isActive
                      ? "text-[var(--color-text)]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                  }`}
                >
                  {content.projects.tabs[tab]}

                  <span
                    className={`absolute left-0 -bottom-px h-0.5 w-full bg-[var(--color-text)] transition-all duration-300 ${
                      isActive
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0"
                    }`}
                  />
                </button>
              )
            })}
          </div>

          {/* Grid */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter(
                (p) => activeTab === "all" || p.status === activeTab
              )
              .map((p) => (
                <ProjectCard key={p.title} project={p} lang={lang} />
              ))}
          </div>

        </section>

        {/* ABOUT */}
        <section id="about" className="mt-24 max-w-2xl">
          <About lang={lang} />
        </section>

      </Container>

     <Footer lang={lang} />

    </main>
  )
}