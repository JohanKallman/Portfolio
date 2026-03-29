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

        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {["all", "live", "ongoing", "upcoming"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition ${
                activeTab === tab
                  ? "bg-white text-black"
                  : "text-zinc-400 border border-zinc-800 hover:text-white"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
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