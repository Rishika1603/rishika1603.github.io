import { motion } from 'framer-motion';
import { Quote, Zap, Shield, Globe, Code2, Cpu, ArrowUpRight, Download, TrendingDown, Clock, Database } from 'lucide-react';

const highlights = [
  {
    icon: <Cpu size={18} />,
    title: 'AI-Powered Development',
    desc: 'Leveraging LLMs, RAG architectures, and vector search to build intelligent automation systems that reduce manual workload.',
    color: '#00ffd1',
    metric: '70% faster prototyping',
  },
  {
    icon: <Shield size={18} />,
    title: 'Compliance Engineering',
    desc: 'Designing regulatory deadline trackers and insider trading validation engines for enterprise risk management.',
    color: '#f59e0b',
    metric: '100% audit coverage',
  },
  {
    icon: <Database size={18} />,
    title: 'Database Architecture',
    desc: 'Designing PostgreSQL schemas with triggers, partitioning, and materialized views for compliance datasets at scale.',
    color: '#38bdf8',
    metric: 'Sub-100ms queries',
  },
  {
    icon: <Code2 size={18} />,
    title: 'Vibe Coding Workflow',
    desc: 'Rapidly prototyping and shipping features using AI-assisted development tools and autonomous agent workflows.',
    color: '#a78bfa',
    metric: '2x shipping velocity',
  },
];

const achievements = [
  { icon: <TrendingDown size={14} />, text: 'Reduced compliance processing time by 70% via automated OCR pipelines' },
  { icon: <Clock size={14} />, text: 'Architected regulatory deadline tracker serving 50+ enterprise clients' },
  { icon: <Database size={14} />, text: 'Built PostgreSQL validation engines with 100% data integrity coverage' },
  { icon: <Shield size={14} />, text: 'Deployed Dockerized compliance microservices on Ubuntu production servers' },
];

export default function About() {
  return (
    <section id="about" className="bg-[#050505] py-24 relative overflow-hidden">
      {/* Subtle bg accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Bio + Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-full px-4 py-1.5 text-xs text-gray-500 mb-6 font-mono">
              <Zap size={12} />
              about.md
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">
              Backend Engineer,
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              <span className="gradient-text">AI Systems Specialist</span>
            </h2>

            <div className="space-y-4 text-gray-400 text-sm leading-relaxed mb-8">
              <p>
                I am a backend-focused engineer who thrives at the intersection of{' '}
                <span className="text-white font-medium">AI automation</span> and{' '}
                <span className="text-white font-medium">enterprise compliance</span>. At{' '}
                <span className="text-white font-medium">Infomatics Services</span>, I build
                production-grade compliance automation platforms using Python, PostgreSQL, and
                Docker on Ubuntu servers.
              </p>
              <p>
                My workflow integrates AI agents and LLMs for rapid prototyping — but the output is
                always production-hardened: structured OCR pipelines, RAG retrieval systems,
                vector search, and CI/CD-deployed microservices.
              </p>
            </div>

            {/* Quantified Achievements */}
            <div className="space-y-3 mb-8">
              {achievements.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3 bg-white/[0.02] border border-white/[0.06] rounded-xl p-3"
                >
                  <div className="w-6 h-6 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent">{a.icon}</span>
                  </div>
                  <span className="text-gray-300 text-sm">{a.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <div className="relative bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 mb-8">
              <Quote size={20} className="text-accent/40 mb-3" />
              <p className="text-gray-300 text-sm italic leading-relaxed">
                "I don't just write code — I orchestrate AI agents, compliance engines, and data
                pipelines into systems that think and scale."
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/Rishika_Vishwakarma_Resume.pdf?v=4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#00e6bc] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,209,0.25)]"
              >
                <Download size={14} />
                Download Resume
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.1] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300"
              >
                View Projects
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Right column - Highlights + Stats */}
          <div className="space-y-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group glass-card rounded-2xl p-5 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/[0.08] flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: item.color + '12', color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-white text-sm font-semibold flex items-center gap-2">
                        {item.title}
                        <ArrowUpRight size={12} className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <span className="text-[10px] font-mono text-accent/80 bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full">
                        {item.metric}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-4 gap-3 pt-4"
            >
              {[
                { label: 'Experience', value: '2+ yrs' },
                { label: 'Projects', value: '8+' },
                { label: 'Stack', value: 'Python' },
                { label: 'Focus', value: 'Compliance' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4 text-center"
                >
                  <div className="text-xl font-bold text-white tracking-tight">{value}</div>
                  <div className="text-[10px] text-gray-600 mt-1 font-mono uppercase tracking-wider">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
