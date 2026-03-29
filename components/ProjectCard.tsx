type Project = {
  title: string
  description: string
  image: string
  tech: string[]
  liveUrl?: string
  githubUrl?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group ui-card overflow-hidden hover:-translate-y-1 transition-transform duration-300">
      
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>

        <p className="ui-text-muted mt-2">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs bg-zinc-800 px-2 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-4 opacity-70 group-hover:opacity-100 transition">
          {project.liveUrl && (
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