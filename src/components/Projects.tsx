import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, FileText, CalendarDays, ShieldAlert, ArrowUpRight, Layers, Eye, BrainCircuit, Activity, ChefHat } from 'lucide-react';
import { useState } from 'react';

function PulseRing() {
  return (
    <div className="relative flex items-center justify-center">
      <span className="absolute inline-flex h-16 w-16 rounded-full border border-white/10 animate-ping opacity-40" />
      <span className="relative inline-flex h-12 w-12 rounded-full border border-white/20 items-center justify-center bg-white/[0.04] backdrop-blur-sm">
        <Layers size={18} className="text-gray-400" />
      </span>
    </div>
  );
}

function InternalProjectScreenshot({ color }: { color: string }) {
  return (
    <div className="relative h-40 border-b border-white/[0.06] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.04] to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="flex flex-col items-center gap-3 text-center"
          animate={{ opacity: [0.6, 1, 0.6], y: [4, -4, 4] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.div
            className="relative flex items-center justify-center"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <PulseRing />
          </motion.div>
          <div className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm text-[10px] text-gray-400 font-mono uppercase tracking-wider">
            Internal Project
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-3 left-0 right-0 flex justify-center">
        <motion.div
          className="h-px rounded-full"
          style={{ backgroundColor: color + '55' }}
          initial={{ width: 0 }}
          animate={{ width: '60%' }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

const projects = [
  {
    title: 'AI Chef',
    status: 'Live',
    statusColor: '#ff8a3d',
    category: 'AI & Data',
    description:
      'Multi-agent meal-planning platform: five specialist agents (Orchestrator, MenuPlanner, PlanValidator, InventoryChecker, Shopper) turn dietary preferences into a validated 7-day menu, pantry gap analysis and a confirmed grocery order.',
    challenge: 'Meal planning is tedious, diet rules are easy to break, and pantry stock is never in sync with what you cook.',
    solution: 'FastAPI agent pipeline with a Groq-powered planner (llama-3.3-70b), a PlanValidator that audits every draft and triggers corrective re-plans, pantry restocking on delivery, and PostgreSQL persistence.',
    result: 'Generates diet-compliant, validated meal plans in ~2 seconds and auto-restocks the pantry after every order.',
    icon: <ChefHat size={18} />,
    color: '#ff8a3d',
    tags: ['FastAPI', 'Groq', 'React', 'PostgreSQL', 'Docker', 'Tailwind'],
    links: [
      { label: 'Code', icon: <Github size={12} />, href: 'https://github.com/Rishika1603/ai-chef' },
      { label: 'Live', icon: <ExternalLink size={12} />, href: 'https://ai-chef-kzl3.onrender.com' },
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
    screenshot: '/ai-fashion-gallery.png',
    tags: ['React', 'FastAPI', 'Pinecone', 'Gemini', 'RAG', 'Diffusion'],
    links: [
      { label: 'Code', icon: <Github size={12} />, href: 'https://github.com/Rishika1603/AI-fashion-gallery' },
      { label: 'Live', icon: <ExternalLink size={12} />, href: 'https://ai-fashion-gallery-frontend-production.up.railway.app' },
    ],
  },
  {
    title: 'TrilliumReconAI',
    status: 'Production',
    statusColor: '#ef4444',
    category: 'Compliance',
    description: 'Financial reconciliation engine with automated transaction matching, maker-checker approval workflows, and real-time audit trail reporting.',
    challenge: 'Manual reconciliation and error-prone spreadsheets created compliance risk at scale.',
    solution: 'FastAPI, PostgreSQL, Celery, Redis, and Nginx with deterministic matching and rollback-safe batch processing.',
    result: '92% auto-classification, faster reconciliation cycles, and audit-ready reporting with zero missing approvals.',
    icon: <ShieldAlert size={18} />,
    color: '#ef4444',
    tags: ['FastAPI', 'PostgreSQL', 'Celery', 'Redis', 'Nginx', 'Compliance'],
    internal: true,
    links: [],
  },
  {
    title: 'NISM AI',
    status: 'Internal',
    statusColor: '#f59e0b',
    category: 'AI & Data',
    description: 'AI-powered exam preparation and regulatory knowledge assistant using RAG over NISM syllabus with adaptive question generation and performance analytics.',
    challenge: 'Regulatory exam preparation relied on static PDFs and fragmented notes.',
    solution: 'LangChain pipeline over indexed syllabus documents with retrieval, explanations, and spaced-repetition review.',
    result: 'Testers noted faster concept mastery and stronger retention versus static study materials.',
    icon: <BrainCircuit size={18} />,
    color: '#f59e0b',
    tags: ['RAG', 'LangChain', 'PostgreSQL', 'Python', 'LLM', 'Education'],
    internal: true,
    links: [],
  },
  {
    title: 'Compluse',
    status: 'Production',
    statusColor: '#f59e0b',
    category: 'Compliance',
    description: 'Compliance calendar and regulatory deadline tracking system with automated reminders and audit logs.',
    challenge: 'Compliance teams missed regulatory deadlines across fragmented tracking methods.',
    solution: 'PostgreSQL-backed calendar automation with triggers and email/SMS reminder workflows.',
    result: 'Dependable deadline tracking for enterprise clients with complete audit history.',
    icon: <CalendarDays size={18} />,
    color: '#f59e0b',
    tags: ['Python', 'PostgreSQL', 'Compliance', 'Calendar Automation', 'Triggers'],
    internal: true,
    links: [],
  },
  {
    title: 'NovusLite',
    status: 'Production',
    statusColor: '#ef4444',
    category: 'Compliance',
    description: 'Insider trading validation and compliance workflow engine with rule checks and automated reporting.',
    challenge: 'Manual trade-rule validation was slow and inconsistent across reviewers.',
    solution: 'Validation engine with PostgreSQL-backed rules, PDF report generation, and escalation workflows.',
    result: 'Reduced manual review time and improved consistency in regulatory checks.',
    icon: <ShieldAlert size={18} />,
    color: '#ef4444',
    tags: ['Python', 'Validation Engine', 'Compliance', 'Reporting', 'PostgreSQL'],
    internal: true,
    links: [],
  },
  {
    title: 'CardPulse',
    status: 'Production',
    statusColor: '#38bdf8',
    category: 'Backend',
    description: 'OCR-based structured data extraction system using Azure Document Intelligence to parse documents into validated JSON and sync to PostgreSQL.',
    challenge: 'Manual document extraction caused compliance processing delays and errors.',
    solution: 'Azure OCR with custom schema validation and PostgreSQL sync pipelines.',
    result: 'Significantly faster document processing with strong field extraction accuracy.',
    icon: <FileText size={18} />,
    color: '#38bdf8',
    tags: ['Azure OCR', 'PostgreSQL', 'JSON Schema', 'Document Intelligence', 'Python'],
    internal: true,
    links: [],
  },
  {
    title: 'Compliance Automation Platform',
    status: 'In Progress',
    statusColor: '#00ffd1',
    category: 'Compliance',
    description: 'Enterprise-grade compliance automation platform combining deadline tracking, insider trading validation, OCR ingestion, and AI-powered risk scoring into a unified dashboard.',
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
              {/* Screenshot area */}

{project.internal ? (
  <InternalProjectScreenshot color={project.color} />
) : project.screenshot ? (
  <div className="relative h-40 overflow-hidden border-b border-white/[0.06] bg-[#050505]">
    <img
      src={project.screenshot}
      alt={project.title}
      className="w-full h-full object-contain"
    />
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
) : (
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
)}

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
