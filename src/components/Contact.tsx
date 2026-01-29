import { Mail, Github, Linkedin, Send, Snowflake } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

 return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Get in Touch
        </h2>
        <p className="text-center text-muted-foreground mb-16 flex items-center justify-center gap-2">
          <Snowflake className="w-4 h-4" />
          <span>Let's connect and collaborate</span>
          <Snowflake className="w-4 h-4" />
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="frost-glass rounded-2xl p-6">
              <h3 className="text-xl font-bold text-primary mb-6">Contact Information</h3>

              {/* ---------- Contact Cards Section ---------- */}
              <div className="space-y-4">
                {/* EMAIL */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=louie24semera@gmail.com&su=Portfolio%20Inquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-center gap-4 p-4 bg-card rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group polar-card cursor-pointer">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Mail className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-semibold">EMAIL</p>
                      <p className="text-foreground">louie24semera@gmail.com</p>
                    </div>
                  </div>
                </a>

                {/* GITHUB */}
                <a
                  href="https://github.com/Kyahluwi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-center gap-4 p-4 bg-card rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group polar-card cursor-pointer">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Github className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-semibold">GITHUB</p>
                      <p className="text-foreground">github.com/Kyahluwi</p>
                    </div>
                  </div>
                </a>

                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/louie-semera/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-center gap-4 p-4 bg-card rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group polar-card cursor-pointer">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Linkedin className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-semibold">LINKEDIN</p>
                      <p className="text-foreground">linkedin.com/in/louie-semera/</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="mt-6 p-4 bg-primary/5 rounded-xl border-l-4 border-primary">
                <p className="text-xs text-muted-foreground mb-1 font-semibold">STATUS</p>
                <p className="text-foreground text-sm">
                  Available for internships, Seminars, and Opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="frost-glass rounded-2xl p-6">
            <h3 className="text-xl font-bold text-primary mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-muted-foreground mb-2 font-semibold">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-card border border-primary/20 rounded-xl text-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-card border border-primary/20 rounded-xl text-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2 font-semibold">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-card border border-primary/20 rounded-xl text-foreground focus:border-primary focus:outline-none transition-colors h-32 resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:shadow-[0_0_30px_hsl(var(--ice-blue)/0.4)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Fake sent message */}
              {sent && (
                <p className="mt-2 text-sm text-green-500 font-semibold">
                  Message sent! (Just a demo)
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;