import { motion } from 'framer-motion';
import { Quote, Zap, Shield, Globe, Code2, Cpu, ArrowUpRight, Download } from 'lucide-react';

const highlights = [
  {
    icon: <Cpu size={18} />,
    title: 'AI-Powered Development',
    desc: 'Leveraging LLMs, RAG architectures, and vector search to build intelligent automation systems.',
    color: '#00ffd1',
  },
  {
    icon: <Shield size={18} />,
    title: 'Compliance Engineering',
    desc: 'Designing regulatory deadline trackers and insider trading validation engines for enterprise.',
    color: '#f59e0b',
  },
  {
    icon: <Globe size={18} />,
    title: 'DevOps & Deployment',
    desc: 'Containerizing services with Docker, configuring CI/CD pipelines on Ubuntu servers.',
    color: '#38bdf8',
  },
  {
    icon: <Code2 size={18} />,
    title: 'Vibe Coding Workflow',
    desc: 'Rapidly prototyping and shipping features using AI-assisted development tools and agents.',
    color: '#a78bfa',
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#050505] py-24 relative overflow-hidden">
      {/* Subtle bg accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Bio */}
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

            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">
              Backend Engineer,
              <br />
              <span className="gradient-text">Vibe Coder</span>
            </h2>

            <div className="space-y-4 text-gray-400 text-sm leading-relaxed mb-8">
              <p>
                I am a backend-focused engineer who thrives at the intersection of{' '}
                <span className="text-white font-medium">AI automation</span> and{' '}
                <span className="text-white font-medium">enterprise compliance</span>. My workflow is
                vibe-coded — I use AI agents and LLMs to rapidly architect, iterate, and ship
                production-grade systems.
              </p>
              <p>
                At <span className="text-white font-medium">Infomatics Services</span>, I build
                compliance automation platforms using Python and PostgreSQL, design REST APIs for
                regulatory tracking, and integrate OCR intelligence (Azure Document Intelligence)
                into structured data pipelines.
              </p>
              <p>
                Beyond compliance, I experiment with RAG frameworks, vector search (Pinecone), and
                generative AI integrations to create intelligent assistants and automated workflows.
              </p>
            </div>

            {/* Quote */}
            <div className="relative bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 mb-8">
              <Quote size={20} className="text-accent/40 mb-3" />
              <p className="text-gray-300 text-sm italic leading-relaxed">
                "I don't just write code — I orchestrate AI agents, compliance engines, and data
                pipelines into systems that think and scale."
              </p>
            </div>

            <a
              href="/RishikaVishwakarmaAI. (1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.1] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300"
            >
              <Download size={14} />
              Download Resume
            </a>
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
                  <div>
                    <h3 className="text-white text-sm font-semibold mb-1 flex items-center gap-2">
                      {item.title}
                      <ArrowUpRight size={12} className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
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
              className="grid grid-cols-3 gap-3 pt-4"
            >
              {[
                { label: 'Years', value: '2+' },
                { label: 'Projects', value: '4+' },
                { label: 'Stack', value: 'Python' },
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
