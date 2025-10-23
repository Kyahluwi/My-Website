import { Terminal } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-primary/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-mono text-foreground">PORTFOLIO_V1.0</span>
          </div>

          <div className="pixel-font text-[8px] text-muted-foreground">
            [ SYSTEM STATUS: ONLINE ]
          </div>

          <div className="text-muted-foreground font-mono text-sm">
            © 2025 PUPSJ Student. All rights reserved.
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground font-mono">
            Built with React + TypeScript + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
