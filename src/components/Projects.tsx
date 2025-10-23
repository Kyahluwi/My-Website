import { ExternalLink, Github, Folder, Snowflake } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "Your first project description will go here. Update with your actual project details and achievements.",
      tags: ["Security", "Python", "Analysis"],
      status: "ACTIVE"
    },
    {
      title: "Project Two",
      description: "Your second project description. Add details about the technologies used and outcomes achieved.",
      tags: ["Web", "JavaScript", "Development"],
      status: "COMPLETE"
    },
    {
      title: "Project Three",
      description: "Another project placeholder. Replace with your real project information and impact.",
      tags: ["Network", "Linux", "Tools"],
      status: "IN PROGRESS"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative snow-pattern">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Projects & Work
        </h2>
        <p className="text-center text-muted-foreground mb-16 flex items-center justify-center gap-2">
          <Snowflake className="w-4 h-4" />
          <span>Building and learning along the way</span>
          <Snowflake className="w-4 h-4" />
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group"
            >
              <div className="frost-glass rounded-2xl p-6 h-full flex flex-col polar-card">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Folder className="w-8 h-8 text-primary" />
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                    project.status === "ACTIVE" ? "bg-primary text-primary-foreground" :
                    project.status === "COMPLETE" ? "bg-accent text-accent-foreground" :
                    "bg-secondary text-foreground"
                  }`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-primary mb-3">
                  {project.title}
                </h3>

                <p className="text-foreground text-sm mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      className="text-xs px-3 py-1 bg-secondary rounded-full text-foreground border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto pt-4 border-t border-primary/20">
                  <button className="text-primary hover:text-accent transition-colors hover:scale-110 transform duration-200" title="View Details">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                  <button className="text-primary hover:text-accent transition-colors hover:scale-110 transform duration-200" title="View Code">
                    <Github className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="frost-glass rounded-2xl p-6 inline-block">
            <p className="text-muted-foreground mb-2">
              More projects coming soon
            </p>
            <p className="text-sm text-foreground">
              Currently working on exciting cybersecurity challenges!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
