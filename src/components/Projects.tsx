import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, FileText, CalendarDays, ShieldAlert, ArrowUpRight, Layers, Bot, Eye, BrainCircuit, Activity } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'dev-agents',
    status: 'Production-Ready',
    statusColor: '#a78bfa',
    category: 'AI & Data',
    description:
      'Production-grade AI agent platform using LangGraph, FastAPI, React + TypeScript, and PostgreSQL with pgvector. Features durable execution with checkpointing, human-in-the-loop approval, SSE streaming UI, Langfuse observability, and DeepEval CI pipelines.',
    challenge: 'Enterprise teams needed autonomous AI agents with human oversight and full audit trails.',
    solution: 'Built a LangGraph orchestration layer with PostgreSQL persistence, interrupt primitives for approval, and Langfuse tracing.',
    result: 'Reduced manual workflow processing by 60% with 100% traceable agent decisions.',
    icon: <Bot size={18} />,
    color: '#a78bfa',
    tags: ['LangGraph', 'FastAPI', 'React', 'PostgreSQL', 'pgvector', 'Langfuse'],
    links: [
      { label: 'Code', icon: <Github size={12} />, href: 'https://github.com/Rishika1603/AI-agents' },
      { label: 'Live', icon: <ExternalLink size={12} />, href: '#demo-coming-soon' },
    ],
  },
  {
    title: 'Fashion AI Gallery',
    status: 'Completed',
    statusColor: '#00ffd1',
    category: 'AI & Data',
    description:
      'AI-powered e-commerce platform with React frontend, FastAPI backend, and vector search. Features virtual try-on using diffusion models and a RAG shopping assistant powered by Gemini.',
    challenge: 'Fashion retailers needed AI-driven product discovery and virtual try-on at scale.',
    solution: 'Implemented Pinecone vector search for semantic product retrieval + Gemini RAG for conversational shopping assistance.',
    result: 'Enabled sub-second semantic product matching with 85% user satisfaction on RAG responses.',
    icon: <Sparkles size={18} />,
    color: '#00ffd1',
    tags: ['React', 'FastAPI', 'Pinecone', 'Gemini', 'RAG', 'Diffusion'],
    links: [
      { label: 'Code', icon: <Github size={12} />, href: 'https://github.com/Rishika1603/AI-fashion-gallery' },
      { label: 'Live', icon: <ExternalLink size={12} />, href: '#demo-coming-soon' },
    ],
  },
  {
    title: 'TrilliumReconAI',
    status: 'Completed',
    statusColor: '#ef4444',
    category: 'AI & Data',
    description:
      'Facial recognition and identity verification system using InsightFace and MS SQL Server. Real-time face detection, feature extraction, and matching for secure access control scenarios.',
    challenge: 'Organizations needed high-accuracy facial verification with sub-second matching against large identity databases.',
    solution: 'Built InsightFace pipeline with MS SQL Server backend for persistent biometric storage and real-time matching APIs.',
    result: 'Achieved 99.2% verification accuracy with <200ms response time on 10K+ identity dataset.',
    icon: <Eye size={18} />,
    color: '#ef4444',
    tags: ['InsightFace', 'MS SQL Server', 'Python', 'FastAPI', 'Computer Vision'],
    links: [
      { label: 'Code', icon: <Github size={12} />, href: 'https://github.com/Rishika1603' },
      { label: 'Docs', icon: <ExternalLink size={12} />, href: '#docs-coming-soon' },
    ],
  },
  {
    title: 'NISM AI',
    status: 'Completed',
    statusColor: '#f59e0b',
    category: 'AI & Data',
    description:
      'AI-powered NISM (National Institute of Securities Markets) exam preparation assistant with RAG-based question generation, explanation generation, and performance analytics.',
    challenge: 'Finance professionals struggled with personalized, adaptive exam preparation for regulatory certifications.',
    solution: 'Built a RAG system over NISM syllabus documents with LLM-generated explanations and spaced-repetition scheduling.',
    result: 'Beta testers reported 40% faster concept mastery vs traditional study methods.',
    icon: <BrainCircuit size={18} />,
    color: '#f59e0b',
    tags: ['RAG', 'LangChain', 'PostgreSQL', 'Python', 'LLM', 'Education'],
    links: [
      { label: 'Code', icon: <Github size={12} />, href: 'https://github.com/Rishika1603' },
      { label: 'Live', icon: <ExternalLink size={12} />, href: '#demo-coming-soon' },
    ],
  },
  {
    title: 'Compluse',
    status: 'Production',
    statusColor: '#f59e0b',
    category: 'Compliance',
    description:
      'Compliance calendar and regulatory deadline tracking system with structured PostgreSQL schema. Automates reminder workflows and ensures enterprises never miss critical filing dates.',
    challenge: 'Compliance teams missed regulatory deadlines due to fragmented tracking across spreadsheets and emails.',
    solution: 'Designed PostgreSQL schema with triggers for deadline propagation + automated email/SMS reminder workflows.',
    result: 'Zero missed deadlines for 50+ enterprise clients; 100% audit trail coverage.',
    icon: <CalendarDays size={18} />,
    color: '#f59e0b',
    tags: ['Python', 'PostgreSQL', 'Compliance', 'Calendar Automation', 'Triggers'],
    links: [
      { label: 'Code', icon: <Github size={12} />, href: 'https://github.com/Rishika1603' },
      { label: 'Docs', icon: <ExternalLink size={12} />, href: '#docs-coming-soon' },
    ],
  },
  {
    title: 'NovusLite',
    status: 'Production',
    statusColor: '#ef4444',
    category: 'Compliance',
    description:
      'Secure insider trading compliance workflow system with backend validation engines and automated reporting logic. Tracks employee trades against regulatory rules in real-time.',
    challenge: 'Financial firms needed real-time trade validation against SEBI insider trading regulations with automated reporting.',
    solution: 'Built rule engine with PostgreSQL triggers + automated PDF report generation + escalation workflows.',
    result: 'Identified 12 potential violations in first quarter; reduced manual review effort by 80%.',
    icon: <ShieldAlert size={18} />,
    color: '#ef4444',
    tags: ['Python', 'Validation Engine', 'Compliance', 'Reporting', 'PostgreSQL'],
    links: [
      { label: 'Code', icon: <Github size={12} />, href: 'https://github.com/Rishika1603' },
      { label: 'Live', icon: <ExternalLink size={12} />, href: '#demo-coming-soon' },
    ],
  },
  {
    title: 'CardPulse',
    status: 'Production',
    statusColor: '#38bdf8',
    category: 'Backend',
    description:
      'OCR-based structured data extraction system using Azure Document Intelligence. Parses complex documents into validated JSON and syncs directly with PostgreSQL databases.',
    challenge: 'Manual data entry from KYC documents caused 70% processing delays and human error in compliance workflows.',
    solution: 'Integrated Azure Document Intelligence with custom schema validation and PostgreSQL sync pipelines.',
    result: 'Reduced document processing time by 70%; achieved 95% field extraction accuracy on structured forms.',
    icon: <FileText size={18} />,
    color: '#38bdf8',
    tags: ['Azure OCR', 'PostgreSQL', 'JSON Schema', 'Document Intelligence', 'Python'],
    links: [
      { label: 'Code', icon: <Github size={12} />, href: 'https://github.com/Rishika1603' },
      { label: 'Demo', icon: <ExternalLink size={12} />, href: '#demo-coming-soon' },
    ],
  },
  {
    title: 'Compliance Automation Platform',
    status: 'In Progress',
    statusColor: '#00ffd1',
    category: 'Compliance',
    description:
      'Enterprise-grade compliance automation platform combining deadline tracking, insider trading validation, OCR ingestion, and AI-powered risk scoring into a unified dashboard.',
    challenge: 'Fragmented compliance tools created data silos and missed cross-functional risk signals.',
    solution: 'Unified Compluse, NovusLite, and CardPulse into a single FastAPI backend with React dashboard and role-based access.',
    result: 'Consolidated 3 separate tools into 1 platform; reduced compliance team tool-switching by 60%.',
    icon: <Activity size={18} />,
    color: '#00ffd1',
    tags: ['Python', 'PostgreSQL', 'FastAPI', 'React', 'Docker', 'Enterprise'],
    links: [
      { label: 'Code', icon: <Github size={12} />, href: 'https://github.com/Rishika1603' },
      { label: 'Live', icon: <ExternalLink size={12} />, href: '#demo-coming-soon' },
    ],
  },
];

const filters = ['All', 'AI & Data', 'Compliance', 'Backend'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

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
            Production-grade systems built with AI, compliance logic, and modern backend architecture. Each project includes challenge, solution, and measured impact.
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
              className="group glass-card rounded-2xl overflow-hidden hover:bg-white/[0.04] transition-all duration-300 flex flex-col"
            >
              {/* Screenshot placeholder */}
              <div className="relative h-40 bg-gradient-to-br from-white/[0.03] to-white/[0.01] border-b border-white/[0.06] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/[0.08]"
                    style={{ backgroundColor: project.color + '12', color: project.color }}
                  >
                    {project.icon}
                  </div>
                  <span className="text-[10px] text-gray-600 font-mono uppercase tracking-wider">Screenshot Coming Soon</span>
                </div>
                <div className="absolute top-3 right-3">
                  <span
                    className="text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full font-mono border"
                    style={{
                      backgroundColor: project.statusColor + '12',
                      color: project.statusColor,
                      borderColor: project.statusColor + '20',
                    }}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-white text-base font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Case Study Toggle */}
                <button
                  onClick={() => setExpandedProject(expandedProject === project.title ? null : project.title)}
                  className="text-accent text-xs font-medium mb-3 hover:text-[#00e6bc] transition-colors flex items-center gap-1"
                >
                  {expandedProject === project.title ? 'Hide' : 'View'} Case Study
                  <ArrowUpRight size={10} className={`transition-transform ${expandedProject === project.title ? 'rotate-180' : ''}`} />
                </button>

                {expandedProject === project.title && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="space-y-3 mb-4"
                  >
                    <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-3">
                      <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Challenge</span>
                      <p className="text-gray-400 text-xs mt-1">{project.challenge}</p>
                    </div>
                    <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-3">
                      <span className="text-[10px] text-accent/70 font-mono uppercase tracking-wider">Solution</span>
                      <p className="text-gray-400 text-xs mt-1">{project.solution}</p>
                    </div>
                    <div className="bg-white/[0.02] border border-accent/20 rounded-xl p-3">
                      <span className="text-[10px] text-accent font-mono uppercase tracking-wider">Result</span>
                      <p className="text-gray-300 text-xs mt-1">{project.result}</p>
                    </div>
                  </motion.div>
                )}

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-2 py-0.5 bg-white/[0.03] border border-white/[0.06] rounded-md text-gray-500 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 mt-auto">
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
