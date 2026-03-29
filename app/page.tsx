import Hero from "../components/Hero"
import ProjectCard from "../components/ProjectCard"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const projects = [
  {
    title: "AI SaaS Platform",
    description: "Fullstack app med auth, payments och AI integration",
    image: "https://picsum.photos/600/400",
    tech: ["Next.js", "Node", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Realtime Chat App",
    description: "Websocket-baserad chat med rooms",
    image: "https://picsum.photos/600/401",
    tech: ["React", "Socket.io"],
    liveUrl: "#",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6">
      <div className="max-w-6xl mx-auto">
        <Navbar />
        <Hero />
        
        <h2 className="ui-heading mt-20 mb-6">
          Projects
        </h2>
        <section id="projects" className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </section>    

          
      </div>
      <Footer />
    </main>
  )
}

