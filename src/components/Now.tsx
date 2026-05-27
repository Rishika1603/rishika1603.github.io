import { motion } from 'framer-motion';
import { FlaskConical, Radio, BookOpen, Cpu, ArrowUpRight, Bot } from 'lucide-react';

const currentWork = [
  {
    icon: <Bot size={16} />,
    title: 'dev-agents',
    desc: 'Production-grade AI agent platform using LangGraph, FastAPI, React + TypeScript, and PostgreSQL with pgvector. Features durable execution with checkpointing, human-in-the-loop approval via interrupt primitives, SSE streaming UI, Langfuse observability, and DeepEval CI evaluation pipelines.',
    status: 'In Progress',
    color: '#a78bfa',
  },
  {
    icon: <Radio size={16} />,
    title: 'Compliance Automation Platform',
    desc: 'Building next-gen regulatory deadline tracking with AI-powered risk scoring at Infomatics Services.',
    status: 'In Progress',
    color: '#00ffd1',
  },
  {
    icon: <Cpu size={16} />,
    title: 'RAG Agent Workflows',
    desc: 'Experimenting with multi-step LLM agents that can query vector DBs, validate outputs, and self-correct.',
    status: 'Exploring',
    color: '#38bdf8',
  },
  {
    icon: <BookOpen size={16} />,
    title: 'Advanced PostgreSQL',
    desc: 'Deep diving into partitioning, materialized views, and query optimization for compliance datasets.',
    status: 'Learning',
    color: '#f59e0b',
  },
];

export default function Now() {
  return (
    <section id="now" className="bg-[#050505] py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-accent/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-full px-4 py-1.5 text-xs text-gray-500 mb-5 font-mono">
            <FlaskConical size={12} />
            now.json
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Currently <span className="gradient-text">Building</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            A snapshot of what I am working on, learning, and experimenting with right now.
          </p>
        </motion.div>

        <div className="space-y-3">
          {currentWork.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card rounded-2xl p-5 md:p-6 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/[0.08] flex-shrink-0"
                  style={{ backgroundColor: item.color + '12', color: item.color }}
                >
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-white text-sm font-semibold">{item.title}</h3>
                    <span
                      className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md font-mono"
                      style={{ backgroundColor: item.color + '12', color: item.color }}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 hidden sm:block"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Easter egg note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-gray-600 text-xs mt-10 font-mono"
        >
          <span className="text-accent">$</span> open console for a surprise — this portfolio was vibe-coded with AI agents
        </motion.p>
      </div>
    </section>
  );
}
