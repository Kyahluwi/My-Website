import { Snowflake, Mountain, GraduationCap } from "lucide-react";
import heroImage from "@/assets/polar-bear-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Snowfall Effect */}
      <div className="absolute inset-0 snowfall" />

      {/* Floating Snowflakes */}
      <div className="absolute top-20 left-10 animate-bounce opacity-40">
        <Snowflake className="w-12 h-12 text-primary" />
      </div>
      <div className="absolute top-40 right-20 animate-bounce delay-75 opacity-30" style={{ animationDelay: '1s' }}>
        <Snowflake className="w-8 h-8 text-accent" />
      </div>
      <div className="absolute bottom-40 left-1/4 animate-bounce delay-150 opacity-35" style={{ animationDelay: '2s' }}>
        <Snowflake className="w-10 h-10 text-primary" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-6">
          <Mountain className="w-16 h-16 mx-auto text-primary mb-4" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-primary">Welcome to</span>
          <br />
          <span className="text-foreground">My Arctic Journey</span>
        </h1>
        
        <div className="mb-8">
          <p className="text-xl md:text-2xl text-foreground font-light">
            4th Year Student at PUPSJ
          </p>
          <p className="text-lg text-muted-foreground mt-2">
            Aspiring Cybersecurity Professional
          </p>
        </div>

        <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Like a polar bear navigating the vast Arctic, I'm charting my path through 
          the world of technology and cybersecurity with determination and curiosity.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a 
            href="#about" 
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-[0_0_30px_hsl(var(--ice-blue)/0.4)] transition-all duration-300 hover:scale-105"
          >
            Explore My Story
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </a>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-primary" />
            <span className="text-sm">Student</span>
          </div>
          <div className="w-px h-6 bg-border"></div>
          <div className="flex items-center gap-2">
            <Snowflake className="w-5 h-5 text-accent" />
            <span className="text-sm">Nature Lover</span>
          </div>
          <div className="w-px h-6 bg-border"></div>
          <div className="flex items-center gap-2">
            <Mountain className="w-5 h-5 text-primary" />
            <span className="text-sm">Explorer</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
