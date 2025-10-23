import { useEffect, useState } from "react";
import { Terminal, Shield, Code } from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "CYBERSECURITY SPECIALIST";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      <div className="absolute inset-0 scanline" />
      
      {/* Floating icons */}
      <div className="absolute top-20 left-10 animate-pulse">
        <Terminal className="w-8 h-8 text-cyber-green opacity-20" />
      </div>
      <div className="absolute bottom-20 right-10 animate-pulse delay-75">
        <Shield className="w-12 h-12 text-cyber-cyan opacity-20" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-pulse delay-150">
        <Code className="w-10 h-10 text-fps-orange opacity-20" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-6">
          <span className="pixel-font text-xs text-primary tracking-wider">[ SYSTEM ONLINE ]</span>
        </div>
        
        <h1 
          className="text-5xl md:text-7xl font-bold mb-6 glitch" 
          data-text="PLAYER ONE"
        >
          <span className="text-primary">PLAYER</span>{" "}
          <span className="text-accent">ONE</span>
        </h1>
        
        <div className="mb-8 h-12 flex items-center justify-center">
          <p className="font-mono text-xl md:text-2xl text-foreground">
            {text}
            <span className="animate-pulse">_</span>
          </p>
        </div>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          4th Year Student @ PUPSJ | Aspiring Cybersecurity Professional
          <br />
          <span className="text-primary">Gaming Enthusiast • Code Warrior • System Defender</span>
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-wider hover:shadow-[0_0_20px_hsl(var(--cyber-green))] transition-all duration-300 clip-corner"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border-2 border-primary text-primary font-bold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Contact
          </a>
        </div>

        {/* HUD Elements */}
        <div className="absolute bottom-10 left-10 hidden md:block">
          <div className="hud-corner p-4 bg-card/50 backdrop-blur-sm">
            <p className="pixel-font text-[8px] text-primary">HP: 100</p>
            <div className="w-32 h-2 bg-muted mt-2">
              <div className="h-full w-full bg-primary"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 hidden md:block">
          <div className="hud-corner p-4 bg-card/50 backdrop-blur-sm">
            <p className="pixel-font text-[8px] text-accent">SKILLS: ∞</p>
            <div className="w-32 h-2 bg-muted mt-2">
              <div className="h-full w-3/4 bg-accent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
