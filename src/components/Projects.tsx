import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, FileText, CalendarDays, ShieldAlert, ArrowUpRight, Layers, Bot } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'dev-agents',
    status: 'In Progress',
    statusColor: '#a78bfa',
    description:
      'Production-grade AI agent platform using LangGraph, FastAPI, React + TypeScript, and PostgreSQL with pgvector. Features durable execution with checkpointing, human-in-the-loop approval, SSE streaming UI, Langfuse observability, and DeepEval CI pipelines.',
    icon: <Bot size={18} />,
    color: '#a78bfa',
    tags: ['LangGraph', 'FastAPI', 'React', 'PostgreSQL', 'pgvector', 'Langfuse'],
    links: [
      { label: 'Code', icon: <Github size={12} />, href: 'https://github.com' },
      { label: 'Live', icon: <ExternalLink size={12} />, href: '#' },
    ],
  },
  {
    title: 'Fashion AI Gallery',
    status: 'Completed',
    statusColor: '#00ffd1',
    description:
      'AI-powered e-commerce platform with React frontend, FastAPI backend, and vector search. Features virtual try-on using diffusion models and a RAG shopping assistant powered by Gemini.',
    icon: <Sparkles size={18} />,
    color: '#00ffd1',
    tags: ['React', 'FastAPI', 'Pinecone', 'Gemini', 'RAG', 'Diffusion'],
    links: [
      { label: 'Code', icon: <Github size={12} />, href: 'https://github.com' },
      { label: 'Live', icon: <ExternalLink size={12} />, href: '#' },
    ],
  },
  {
    title: 'Compluse',
    status: 'Completed',
    statusColor: '#f59e0b',
    description:
      'Compliance calendar and regulatory deadline tracking system with structured PostgreSQL schema. Automates reminder workflows and ensures enterprises never miss critical filing dates.',
    icon: <CalendarDays size={18} />,
    color: '#f59e0b',
    tags: ['Python', 'PostgreSQL', 'Compliance', 'Calendar Automation'],
    links: [
      { label: 'Code', icon: <Github size={12} />, href: 'https://github.com' },
      { label: 'Docs', icon: <ExternalLink size={12} />, href: '#' },
    ],
  },
  {
    title: 'NovusLite',
    status: 'Completed',
    statusColor: '#ef4444',
    description:
      'Secure insider trading compliance workflow system with backend validation engines and automated reporting logic. Tracks employee trades against regulatory rules in real-time.',
    icon: <ShieldAlert size={18} />,
    color: '#ef4444',
    tags: ['Python', 'Validation Engine', 'Compliance', 'Reporting'],
    links: [
      { label: 'Code', icon: <Github size={12} />, href: 'https://github.com' },
      { label: 'Live', icon: <ExternalLink size={12} />, href: '#' },
    ],
  },
  {
    title: 'CardPulse',
    status: 'Completed',
    statusColor: '#38bdf8',
    description:
      'OCR-based structured data extraction system using Azure Document Intelligence. Parses complex documents into validated JSON and syncs directly with PostgreSQL databases.',
    icon: <FileText size={18} />,
    color: '#38bdf8',
    tags: ['Azure OCR', 'PostgreSQL', 'JSON Schema', 'Document Intelligence'],
    links: [
      { label: 'Code', icon: <Github size={12} />, href: 'https://github.com' },
      { label: 'Demo', icon: <ExternalLink size={12} />, href: '#' },
    ],
  },
];

const filters = ['All', 'AI & Data', 'Compliance', 'Backend'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => {
          if (activeFilter === 'AI & Data') return p.tags.some((t) => ['RAG', 'Pinecone', 'Gemini', 'Diffusion', 'Azure OCR', 'LangGraph', 'pgvector'].includes(t));
          if (activeFilter === 'Compliance') return p.tags.some((t) => ['Compliance', 'Validation Engine', 'Reporting'].includes(t));
          if (activeFilter === 'Backend') return p.tags.some((t) => ['Python', 'PostgreSQL', 'FastAPI'].includes(t));
          return true;
        });

  return (
    <section id="projects" className="bg-[#050505] py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#a78bfa]/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-full px-4 py-1.5 text-xs text-gray-500 mb-5 font-mono">
            <Layers size={12} />
            projects/
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Selected <span className="gradient-text">Works</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Production-grade systems built with AI, compliance logic, and modern backend architecture.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                activeFilter === f
                  ? 'bg-white/[0.08] text-white border border-white/[0.12]'
                  : 'bg-transparent text-gray-500 border border-white/[0.06] hover:text-gray-300 hover:border-white/[0.1]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/[0.08]"
                      style={{ backgroundColor: project.color + '12', color: project.color }}
                    >
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-white text-base font-semibold">{project.title}</h3>
                      <span
                        className="text-[10px] font-semibold uppercase tracking-wider font-mono"
                        style={{ color: project.statusColor }}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-2 py-0.5 bg-white/[0.03] border border-white/[0.06] rounded-md text-gray-500 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.links?.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors duration-200 bg-white/[0.02] border border-white/[0.06] rounded-lg px-3 py-1.5 hover:bg-white/[0.05]"
                    >
                      {link.icon}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
