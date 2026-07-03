import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Code2, Download, ExternalLink } from 'lucide-react';

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, 40);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span className="font-mono text-accent/80">
      {displayed}
      <span className="animate-pulse">▋</span>
    </span>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const rawRotateX = useTransform(scrollYProgress, [0, 1], [8, -4]);
  const rotateX = useSpring(rawRotateX, { damping: 20, stiffness: 80 });

  const rawTranslateZ = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const translateZ = useSpring(rawTranslateZ, { damping: 20, stiffness: 80 });

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen bg-[#050505] overflow-hidden pt-32 pb-20 flex flex-col justify-between"
      style={{ perspective: 1200 }}
    >
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent/[0.03] rounded-full blur-[150px] pointer-events-none hidden md:block" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#a78bfa]/[0.02] rounded-full blur-[120px] pointer-events-none hidden md:block" />

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      <motion.div
        style={{
          rotateX,
          z: translateZ,
          transformStyle: 'preserve-3d',
        }}
        className="max-w-6xl mx-auto px-6 relative w-full"
      >
        {/* Profile Photo with Pop-up Hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center gap-4">
            <motion.div
              className="relative w-24 h-24 rounded-full border-2 border-white/[0.25] bg-white/[0.05] flex items-center justify-center overflow-hidden cursor-pointer"
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
              animate={{}}
            >
              <motion.img
                src="/profile.jpg"
                alt="Rishika Vishwakarma"
                className="w-full h-full object-cover"
                animate={{ scale: hovered ? 1.15 : 1 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              />
              {/* Pop-up expanded photo overlay */}
              {hovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                  className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm pointer-events-none"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border border-white/20"
                  >
                    <img
                      src="/profile.jpg"
                      alt="Rishika Vishwakarma"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                      <p className="text-white font-semibold text-lg">Rishika Vishwakarma</p>
                      <p className="text-accent text-sm font-mono">AI FULL STACK DEVELOPER</p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
            <motion.div
              className="hidden sm:flex items-center gap-2 bg-white/[0.03] border border-white/[0.08] rounded-full px-4 py-1.5 text-xs text-gray-400 backdrop-blur-sm font-mono"
              animate={{}}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <Code2 size={12} className="text-accent" />
              <TypewriterText text="AI FULL STACK DEVELOPER" delay={600} />
            </motion.div>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-4"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[0.95] tracking-tighter mb-2">
            Rishika
            <br />
            <span className="gradient-text">Vishwakarma</span>
          </h1>
          <p className="text-gray-500 text-sm md:text-base font-medium mt-3">
            AI Full Stack Developer
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Building compliant, robust, and AI-powered enterprise systems.
          <br className="hidden md:block" />
          <span className="text-gray-500">I orchestrate AI agents, compliance engines, and data pipelines — shipping production backends with Python, PostgreSQL, and Docker.</span>
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 bg-accent text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#00e6bc] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,209,0.25)]"
          >
            View My Work
            <ArrowRight size={15} />
          </a>
          <a
            href="/Rishika_Vishwakarma_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-white/[0.1] text-gray-300 px-5 py-2.5 rounded-full text-sm font-medium hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300"
          >
            <Download size={15} />
            Download Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-3 mb-10"
        >
          <a
            href="https://github.com/Rishika1603"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-white/[0.1] text-gray-300 px-4 py-2 rounded-full text-xs font-medium hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300"
          >
            <Github size={14} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/rishika-vishwakarma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-white/[0.1] text-gray-300 px-4 py-2 rounded-full text-xs font-medium hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300"
          >
            <Linkedin size={14} />
            LinkedIn
          </a>
          <a
            href="/Rishika_Vishwakarma_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-white/[0.1] text-gray-300 px-4 py-2 rounded-full text-xs font-medium hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300"
          >
            <ExternalLink size={14} />
            Resume
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-16 mt-16 border-t border-white/[0.06] pt-10"
        >
          {[
            { label: 'Role', value: 'Backend & AI Dev' },
            { label: 'Stack', value: 'Python / PostgreSQL' },
            { label: 'Focus', value: 'Compliance Automation' },
            { label: 'Location', value: 'Mumbai, India' },
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <div className="text-lg font-semibold text-white tracking-tight">{value}</div>
              <div className="text-[11px] text-gray-600 mt-1 font-mono uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
