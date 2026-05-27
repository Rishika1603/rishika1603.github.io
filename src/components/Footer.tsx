import { motion } from 'framer-motion';
import { Terminal, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/[0.06] pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-12">
          <div>
            <a href="#about" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-8 h-8 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-accent/20">
                <Terminal size={16} className="text-accent" />
              </div>
              <span className="text-white font-semibold text-sm tracking-tight font-mono">
                rishika<span className="text-accent">.dev</span>
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Backend software engineer building compliant, robust, and AI-powered enterprise software applications.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-white text-xs font-semibold mb-1 uppercase tracking-wider">Connect</h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:rishikavish16@gmail.com"
                className="text-gray-500 hover:text-white text-sm flex items-center gap-2 transition-colors duration-300"
              >
                <Mail size={14} className="text-accent/60" />
                rishikavish16@gmail.com
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white text-sm flex items-center gap-2 transition-colors duration-300"
              >
                <Github size={14} className="text-accent/60" />
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white text-sm flex items-center gap-2 transition-colors duration-300"
              >
                <Linkedin size={14} className="text-accent/60" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.04] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs font-mono">
            © {new Date().getFullYear()} Rishika Vishwakarma
          </p>
          <p className="text-gray-600 text-xs font-mono">
            Mumbai, India
          </p>
        </div>
      </div>
    </footer>
  );
}
