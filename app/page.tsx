"use client"

import { useState } from "react"
import Hero from "../components/Hero"
import ProjectCard from "../components/ProjectCard"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import About from "../components/About"
import CurrentFocus from "../components/CurrentFocus"

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
    title: "Stream Schedule",
    description:
      "Fullstack app for searching TV shows and visualizing episode schedules in a calendar",
    image: "https://picsum.photos/600/400",
    tech: ["React+Vite", ".NET API", "PostgreSQL", "TMDB API"],
    status: "ongoing",
    liveUrl: "#",
    githubUrl: "https://github.com/JohanKallman/StreamSchedule",
  },
  {
    title: "Mobile App (TBD)",
    description:
      "Mobile app for second-hand trading, designed to simplify peer-to-peer exchanges.",
    image: "https://picsum.photos/600/402",
    tech: ["React Native"],
    status: "upcoming",
  },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <main className="min-h-screen bg-black text-white px-6">
      
      <Navbar />

      <div className="max-w-6xl mx-auto">

{/* DESKTOP GRID */}
<div className="hidden md:grid md:grid-cols-2 gap-12 items-start">

  {/* LEFT */}
  <div>
    <Hero />

    <div className="mt-6">
      <div className="sticky top-24 ui-card p-5 text-sm space-y-4">

        <div>
          <div className="text-zinc-500 text-xs">Location</div>
          <div className="font-medium">Stockholm, Sweden</div>
        </div>

        <div>
          <div className="text-zinc-500 text-xs">Experience</div>
          <div className="font-medium">~3 years .NET</div>
        </div>

        <div>
          <div className="text-zinc-500 text-xs">Focus</div>
          <div className="font-medium">Backend & APIs</div>
        </div>

      </div>
    </div>

  </div>

  {/* RIGHT */}
  <div className="mt-16">
    <About />
    <CurrentFocus />
  </div>

</div>


{/* MOBILE LAYOUT */}
<div className="md:hidden">

  <Hero />

  <div className="mt-6 ui-card p-4 text-sm space-y-4">

    <div>
      <div className="text-zinc-500 text-xs">Location</div>
      <div className="font-medium">Stockholm, Sweden</div>
    </div>

    <div>
      <div className="text-zinc-500 text-xs">Experience</div>
      <div className="font-medium">~3 years .NET</div>
    </div>

    <div>
      <div className="text-zinc-500 text-xs">Focus</div>
      <div className="font-medium">Backend & APIs</div>
    </div>

  </div>

  <div className="mt-10">
    <About />
    <CurrentFocus />
  </div>

</div>

        {/* PROJECTS */}
        <h2 className="ui-heading mt-20 mb-6">
          Projects
        </h2>

        {/* Tabs */}
        <div className="relative mt-6">
          <div className="flex gap-6 border-b border-zinc-800">
            {["all", "ongoing", "upcoming"].map((tab) => {
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

        {/* GRID */}
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