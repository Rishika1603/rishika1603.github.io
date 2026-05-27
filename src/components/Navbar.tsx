import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Menu, X, Mail } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = ['hero', 'about', 'workflow', 'projects', 'experience', 'skills', 'endorsements', 'now', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const links = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-accent/20 group-hover:border-accent/40">
            <Terminal size={16} className="text-accent" />
          </div>
          <span className="text-white font-semibold text-sm tracking-tight font-mono">
            rishika<span className="text-accent">.dev</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-1.5 py-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative px-4 py-1.5 text-xs font-medium transition-colors duration-200 rounded-full ${
                activeSection === link.id
                  ? 'text-white'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-white/[0.08] rounded-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:rishikavish16@gmail.com"
            className="flex items-center gap-2 bg-accent text-black text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#00e6bc] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,209,0.3)]"
          >
            <Mail size={12} strokeWidth={2.5} />
            Contact
          </a>
        </div>

        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#080808]/95 backdrop-blur-xl border-t border-white/[0.06] px-6 py-6 flex flex-col gap-2"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium px-4 py-2.5 rounded-xl transition-colors ${
                  activeSection === link.id
                    ? 'text-white bg-white/[0.06]'
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:rishikavish16@gmail.com"
              className="flex items-center justify-center gap-2 bg-accent text-black text-sm font-semibold px-5 py-2.5 rounded-xl mt-2 hover:bg-[#00e6bc] transition-all"
            >
              <Mail size={14} strokeWidth={2.5} />
              Contact Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
