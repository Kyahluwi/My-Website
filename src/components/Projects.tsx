import { ExternalLink, Github, Folder } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "PROJECT_01",
      description: "Your first project description will go here. Update with your actual project details.",
      tags: ["Security", "Python", "Analysis"],
      status: "ACTIVE"
    },
    {
      title: "PROJECT_02",
      description: "Your second project description. Add details about the technologies and outcomes.",
      tags: ["Web", "JavaScript", "Development"],
      status: "COMPLETE"
    },
    {
      title: "PROJECT_03",
      description: "Another project placeholder. Replace with your real project information.",
      tags: ["Network", "Linux", "Tools"],
      status: "IN PROGRESS"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-primary">&lt;</span>
          PROJECTS
          <span className="text-primary">/&gt;</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 pixel-font text-xs">
          [ MISSIONS COMPLETED ]
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative hud-corner bg-card border border-primary/30 p-6 h-full flex flex-col hover:border-primary transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  <span className={`pixel-font text-[8px] px-2 py-1 ${
                    project.status === "ACTIVE" ? "bg-primary text-primary-foreground" :
                    project.status === "COMPLETE" ? "bg-accent text-accent-foreground" :
                    "bg-secondary text-secondary-foreground"
                  }`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-primary mb-3 font-mono">
                  {project.title}
                </h3>

                <p className="text-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      className="text-xs px-2 py-1 bg-muted text-muted-foreground border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto pt-4 border-t border-primary/30">
                  <button className="text-primary hover:text-accent transition-colors" title="View Details">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                  <button className="text-primary hover:text-accent transition-colors" title="View Code">
                    <Github className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            More projects coming soon. Currently working on exciting cybersecurity challenges!
          </p>
          <div className="inline-block px-6 py-2 bg-muted/50 border border-primary/30">
            <span className="pixel-font text-xs text-primary animate-pulse">
              [ LOADING... ]
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
