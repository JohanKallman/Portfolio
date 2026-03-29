"use client"

import { useState } from "react"
import Hero from "../components/Hero"
import ProjectCard from "../components/ProjectCard"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

type Project = {
  title: string
  description: string
  image: string
  tech: string[]
  status: "live" | "ongoing" | "upcoming"
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    title: "AI SaaS Platform",
    description: "Fullstack app med auth, payments och AI integration",
    image: "https://picsum.photos/600/400",
    tech: ["Next.js", "Node", "Stripe"],
    status: "live",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Realtime Chat App",
    description: "Websocket-baserad chat med rooms",
    image: "https://picsum.photos/600/401",
    tech: ["React", "Socket.io"],
    status: "ongoing",
  },
  {
    title: "Next Big Idea",
    description: "Upcoming project",
    image: "https://picsum.photos/600/402",
    tech: ["TBD"],
    status: "upcoming",
  },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <main className="min-h-screen bg-black text-white px-6">
      
      <Navbar />

      <div className="max-w-6xl mx-auto">
        <Hero />

        {/* Heading */}
        <h2 className="ui-heading mt-20 mb-6">
          Projects
        </h2>

        {/* TABS */}
          <div className="relative mt-6">
            <div className="flex gap-6 border-b border-zinc-800">
            {["all", "live", "ongoing", "upcoming"].map((tab) => {
              const isActive = activeTab === tab

              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative pb-3 text-sm whitespace-nowrap transition ${
                    isActive
                      ? "text-white"
                      : "text-zinc-500 hover:text-white"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}

                  {/* Underline */}
                  <span
                  className={`absolute left-0 -bottom-px h-0.5 w-full bg-white transition-all duration-300 ${
                    isActive
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0"
                  }`}
                  />
                </button>
              )
            })}
          </div>
        </div>

        {/* Grid */}
        <section
          id="projects"
          className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects
            .filter(
              (p) => activeTab === "all" || p.status === activeTab
            )
            .map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
        </section>
      </div>

      <Footer />
    </main>
  )
}