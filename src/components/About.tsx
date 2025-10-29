import { User, GraduationCap, Target, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  const [educationExpanded, setEducationExpanded] = useState(false);

  const educationTimeline = [
    {
      level: "Elementary",
      school: "Sto Nino Elementary School",
      years: "2010 - 2016",
      description: "Friendly Student - Foundation years where curiosity began"
    },
    {
      level: "Junior High School",
      school: "Manggahan High School",
      years: "2016 - 2020",
      description: "Honor Student - Developing discipline and a love for learning"
    },
    {
      level: "Senior High School",
      school: "San Lorenzo Ruiz Senior High School",
      years: "2020 - 2022",
      description: "High Honor STEM Student - Building a strong academic foundation"
    },
    {
      level: "College (Current)",
      school: "Polytechnic University of the Philippines - San Juan",
      years: "2022 - Present",
      description: "4th Year - Specializing in Cybersecurity",
      current: true
    }
  ];

  return (
    <section id="about" className="py-20 px-6 relative snow-pattern">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="aspect-square frost-glass rounded-3xl p-8 flex items-center justify-center ice-shimmer">
              <div className="text-center">
                <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-primary shadow-[0_0_30px_hsl(var(--ice-blue)/0.3)] hover:shadow-[0_0_50px_hsl(var(--ice-blue)/0.5)] transition-all duration-300">
                  <AvatarImage src="src/assets/Profilepic.svg" alt="Profile Picture" />
                  <AvatarFallback className="bg-primary/20 text-primary text-3xl font-bold">
                    ME
                  </AvatarFallback>
                </Avatar>
                <p className="text-sm text-muted-foreground font-semibold tracking-wide">CARL LOUIE A. SEMERA</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Education Section - Expandable */}
            <div className="frost-glass rounded-2xl p-6 polar-card">
              <button
                onClick={() => setEducationExpanded(!educationExpanded)}
                className="w-full flex items-center justify-between gap-4 mb-4 group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-primary">Education Journey</h3>
                    <p className="text-sm text-muted-foreground">Click to view timeline</p>
                  </div>
                </div>
                <div className="text-primary group-hover:scale-110 transition-transform">
                  {educationExpanded ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </div>
              </button>

              {/* Expandable Timeline */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  educationExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="space-y-4 pt-4 border-t border-primary/20">
                  {educationTimeline.map((edu, index) => (
                    <div 
                      key={index}
                      className={`p-4 rounded-xl border-l-4 transition-all duration-300 ${
                        edu.current 
                          ? 'bg-primary/10 border-primary' 
                          : 'bg-secondary/30 border-accent hover:bg-secondary/50'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className={`font-bold ${edu.current ? 'text-primary' : 'text-foreground'}`}>
                          {edu.level}
                        </h4>
                        <span className="text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
                          {edu.years}
                        </span>
                      </div>
                      <p className="text-sm text-foreground font-medium mb-1">{edu.school}</p>
                      <p className="text-xs text-muted-foreground italic">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Collapsed State Preview */}
              {!educationExpanded && (
                <div className="pt-2">
                  <p className="text-foreground">
                    Currently in 4th Year at
                    <br />
                    <span className="text-muted-foreground">Polytechnic University of the Philippines - San Juan</span>
                  </p>
                </div>
              )}
            </div>

            {/* Mission Section */}
            <div className="frost-glass rounded-2xl p-6 polar-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent mb-2">My Mission</h3>
                  <p className="text-foreground leading-relaxed">
                    Transitioning from a passion for gaming to expertise in cybersecurity. 
                    I bring the strategic thinking from FPS games and creative problem-solving 
                    from Minecraft to tackle real-world security challenges.
                  </p>
                </div>
              </div>
            </div>

            {/* About Description */}
            <div className="p-6 bg-card rounded-2xl border-l-4 border-primary shadow-lg">
              <p className="text-foreground leading-relaxed">
                Like navigating through snowy landscapes with patience and strategy, 
                I approach cybersecurity with careful attention to detail and determination. 
                Currently leveling up my skills to become a professional security specialist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
