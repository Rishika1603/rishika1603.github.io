import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Code2 } from 'lucide-react';

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
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.08] rounded-full px-4 py-1.5 text-xs text-gray-400 backdrop-blur-sm font-mono">
            <Code2 size={12} className="text-accent" />
            <TypewriterText text="Backend Engineer & Vibe Coder" delay={600} />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-6"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[0.95] tracking-tighter mb-6">
            Rishika
            <br />
            <span className="gradient-text">Vishwakarma</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Building compliant, robust, and AI-powered enterprise systems.
          <br className="hidden md:block" />
          <span className="text-gray-500">I vibe-code production backends with Python, PostgreSQL, and AI agents — shipping fast without breaking things.</span>
        </motion.p>

        {/* Social & Contact Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-3 mb-10 sm:flex-row"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-white/[0.1] text-gray-300 px-5 py-2.5 rounded-full text-sm font-medium hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300"
          >
            <Github size={15} />
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-white/[0.1] text-gray-300 px-5 py-2.5 rounded-full text-sm font-medium hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
          <a
            href="#experience"
            className="flex items-center gap-2 bg-accent text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#00e6bc] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,209,0.25)]"
          >
            View Projects
            <ArrowRight size={15} />
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-16 mt-20 border-t border-white/[0.06] pt-10"
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
