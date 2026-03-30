type Project = {
  title: string
  description: string
  image: string
  tech: string[]
  status: "live" | "ongoing" | "upcoming"
  liveUrl?: string
  githubUrl?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  const statusStyles = {
    live: "text-green-400",
    ongoing: "text-yellow-400",
    upcoming: "text-blue-400",
  }

  return (
    <div className="group ui-card overflow-hidden hover:-translate-y-1 transition duration-300 relative">
      
      {/* Status badge */}
      <div className="absolute top-3 left-3 z-10">
        <span
          className={`text-xs px-3 py-1 rounded-full backdrop-blur border border-white/10 bg-black/60 uppercase ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      {/* Image */}
      <div className="overflow-hidden rounded-t-2xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">
          {project.title}
        </h3>

        <p className="ui-text-muted mt-2">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text)]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-4 opacity-70 group-hover:opacity-100 transition">
          
          {project.status === "live" && project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 text-sm hover:underline"
            >
              Live →
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ui-link text-sm"
            >
              Code →
            </a>
          )}

        </div>
      </div>

    </div>
  )
}