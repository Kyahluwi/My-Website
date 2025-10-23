import { Shield, Code, Database, Network, Lock, Terminal } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "CYBERSECURITY",
      icon: Shield,
      color: "primary",
      skills: ["Network Security", "Penetration Testing", "Threat Analysis", "Security Protocols"]
    },
    {
      title: "DEVELOPMENT",
      icon: Code,
      color: "accent",
      skills: ["Python", "JavaScript", "Web Development", "Scripting"]
    },
    {
      title: "SYSTEMS",
      icon: Database,
      color: "secondary",
      skills: ["Linux Administration", "Windows Server", "Database Management", "Cloud Services"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative cyber-grid">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-primary">&lt;</span>
          SKILL TREE
          <span className="text-primary">/&gt;</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 pixel-font text-xs">
          [ ABILITIES UNLOCKED ]
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
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                <div className="relative hud-corner bg-card border border-primary/30 p-6 hover:border-primary transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 bg-${category.color}/20 border border-${category.color}`}>
                      <Icon className={`w-8 h-8 text-${category.color}`} />
                    </div>
                    <h3 className={`text-xl font-bold text-${category.color}`}>
                      {category.title}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {category.skills.map((skill, skillIdx) => (
                      <li 
                        key={skillIdx}
                        className="flex items-center gap-3 group/skill"
                      >
                        <div className={`w-2 h-2 bg-${category.color} group-hover/skill:animate-pulse`}></div>
                        <span className="text-foreground group-hover/skill:text-primary transition-colors">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Progress bar */}
                  <div className="mt-6">
                    <div className="w-full h-2 bg-muted">
                      <div 
                        className={`h-full bg-${category.color} transition-all duration-1000 group-hover:w-full`}
                        style={{ width: '75%' }}
                      ></div>
                    </div>
                    <p className="pixel-font text-[8px] text-muted-foreground mt-2 text-right">
                      LEVEL 75
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional tools section */}
        <div className="mt-16 p-8 bg-card/50 backdrop-blur-sm border border-primary/30">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">
            [ TOOLS & TECHNOLOGIES ]
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Kali Linux", "Wireshark", "Metasploit", "Burp Suite", "Nmap", "Git", "Docker", "VS Code"].map((tool, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 bg-muted border border-primary/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-mono"
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
