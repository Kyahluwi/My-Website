import { User, GraduationCap, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-primary">&lt;</span>
          ABOUT
          <span className="text-primary">/&gt;</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 neon-border p-8 flex items-center justify-center">
              <div className="text-center">
                <User className="w-32 h-32 mx-auto mb-4 text-primary" />
                <p className="pixel-font text-xs text-primary">[ PROFILE LOADED ]</p>
              </div>
            </div>
            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-accent"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-accent"></div>
          </div>

          <div className="space-y-6">
            <div className="hud-corner p-6 bg-card border border-primary/30">
              <div className="flex items-start gap-4 mb-4">
                <GraduationCap className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">EDUCATION</h3>
                  <p className="text-foreground">
                    4th Year Student
                    <br />
                    <span className="text-muted-foreground">Polytechnic University of the Philippines - San Juan</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="hud-corner p-6 bg-card border border-accent/30">
              <div className="flex items-start gap-4 mb-4">
                <Target className="w-8 h-8 text-accent flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-accent mb-2">MISSION</h3>
                  <p className="text-foreground">
                    Transitioning from gaming passion to cybersecurity expertise. 
                    Combining strategic thinking from FPS games and problem-solving 
                    from Minecraft to tackle real-world security challenges.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-muted/50 border-l-4 border-secondary">
              <p className="text-foreground leading-relaxed">
                Like building defenses in Minecraft and outsmarting opponents in FPS games, 
                I approach cybersecurity with the same strategic mindset and attention to detail. 
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
