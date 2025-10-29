import { Shield, Code, Database, Network, Lock, Snowflake } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cybersecurity",
      icon: Shield,
      color: "primary",
      skills: ["Network Security", "Penetration Testing", "Threat Analysis"],
      proficiency: 67
    },
    {
      title: "Development",
      icon: Code,
      color: "accent",
      skills: ["Python", "JavaScript", "React"],
      proficiency: 78
    },
    {
      title: "Systems",
      icon: Database,
      color: "primary",
      skills: ["Windows Server", "Database Management", "Cloud Services"],
      proficiency: 56
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Skills & Expertise
        </h2>
        <p className="text-center text-muted-foreground mb-16 flex items-center justify-center gap-2">
          <Snowflake className="w-4 h-4" />
          <span>Growing stronger with each challenge</span>
          <Snowflake className="w-4 h-4" />
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div 
                key={idx}
                className="group relative"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="frost-glass rounded-2xl p-6 polar-card h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">
                      {category.title}
                    </h3>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {category.skills.map((skill, skillIdx) => (
                      <li 
                        key={skillIdx}
                        className="flex items-center gap-3 group/skill"
                      >
                        <div className="w-2 h-2 rounded-full bg-accent group-hover/skill:scale-125 transition-transform"></div>
                        <span className="text-foreground group-hover/skill:text-primary transition-colors">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Progress bar */}
                  <div className="mt-auto">
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 group-hover:w-full rounded-full"
                        style={{ width: `${category.proficiency}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 text-right font-semibold">
                      Proficiency: {category.proficiency}%
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional tools section */}
        <div className="mt-16 frost-glass rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Kali Linux", "Wireshark", "Metasploit", "Burp Suite", "Nmap", "Git", "VS Code"].map((tool, idx) => (
              <span 
                key={idx}
                className="px-5 py-2 bg-card border border-primary/30 rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 shadow-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
