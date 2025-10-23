import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 px-6 relative cyber-grid">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-primary">&lt;</span>
          CONTACT
          <span className="text-primary">/&gt;</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 pixel-font text-xs">
          [ ESTABLISH CONNECTION ]
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="hud-corner bg-card border border-primary/30 p-6">
              <h3 className="text-xl font-bold text-primary mb-6">GET IN TOUCH</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-muted/50 hover:bg-muted transition-colors group">
                  <Mail className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  <div>
                    <p className="text-xs text-muted-foreground">EMAIL</p>
                    <p className="text-foreground font-mono">your.email@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-muted/50 hover:bg-muted transition-colors group">
                  <Github className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  <div>
                    <p className="text-xs text-muted-foreground">GITHUB</p>
                    <p className="text-foreground font-mono">github.com/yourusername</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-muted/50 hover:bg-muted transition-colors group">
                  <Linkedin className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  <div>
                    <p className="text-xs text-muted-foreground">LINKEDIN</p>
                    <p className="text-foreground font-mono">linkedin.com/in/yourname</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-primary/10 border-l-4 border-primary">
                <p className="pixel-font text-[10px] text-primary mb-2">[ STATUS ]</p>
                <p className="text-foreground text-sm">
                  Available for internships and cybersecurity opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="hud-corner bg-card border border-primary/30 p-6">
            <h3 className="text-xl font-bold text-primary mb-6">SEND MESSAGE</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-muted-foreground mb-2 font-mono">NAME</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-muted border border-primary/30 text-foreground focus:border-primary focus:outline-none transition-colors font-mono"
                  placeholder="Enter your name..."
                  required
                />
              </div>

              <div>
                <label className="block text-xs text-muted-foreground mb-2 font-mono">EMAIL</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-muted border border-primary/30 text-foreground focus:border-primary focus:outline-none transition-colors font-mono"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-xs text-muted-foreground mb-2 font-mono">MESSAGE</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-muted border border-primary/30 text-foreground focus:border-primary focus:outline-none transition-colors font-mono h-32 resize-none"
                  placeholder="Your message here..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-wider hover:shadow-[0_0_20px_hsl(var(--cyber-green))] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>SEND</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
