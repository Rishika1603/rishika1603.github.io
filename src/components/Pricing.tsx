import { motion } from 'framer-motion';
import { Check, Cpu, Code2, Server, Star, Database, GitBranch, Container } from 'lucide-react';

const domains = [
  {
    name: 'Languages & Backend',
    icon: <Code2 size={18} />,
    description: 'Expertise designing robust server microservices and scalable logic.',
    color: '#38bdf8',
    highlighted: false,
    skills: [
      { name: 'Python Development', level: 'Advanced' },
      { name: 'FastAPI / REST APIs', level: 'Advanced' },
      { name: 'PostgreSQL / SQLAlchemy', level: 'Advanced' },
      { name: 'MS SQL Server', level: 'Intermediate' },
      { name: 'Data validation logic', level: 'Advanced' },
      { name: 'Compliance trackers', level: 'Advanced' },
    ],
  },
  {
    name: 'AI & Data Engineering',
    icon: <Cpu size={18} />,
    description: 'Practical integration of generative AI models, semantic vectors, and agent orchestration.',
    color: '#00ffd1',
    highlighted: true,
    skills: [
      { name: 'RAG Architectures', level: 'Advanced' },
      { name: 'LangGraph Orchestration', level: 'Advanced' },
      { name: 'Vector Search (Pinecone)', level: 'Advanced' },
      { name: 'Gemini / OpenAI Integration', level: 'Advanced' },
      { name: 'Azure Document Intelligence', level: 'Advanced' },
      { name: 'Ollama / Local LLMs', level: 'Intermediate' },
      { name: 'Prompt Engineering', level: 'Advanced' },
      { name: 'InsightFace / Computer Vision', level: 'Intermediate' },
    ],
  },
  {
    name: 'DevOps & Systems',
    icon: <Server size={18} />,
    description: 'Containerized deployment setups and continuous integration workflows.',
    color: '#f59e0b',
    highlighted: false,
    skills: [
      { name: 'Docker Containerization', level: 'Advanced' },
      { name: 'CI/CD Pipelines', level: 'Intermediate' },
      { name: 'Ubuntu Server Administration', level: 'Advanced' },
      { name: 'Git / GitHub', level: 'Advanced' },
      { name: 'GitHub Actions', level: 'Intermediate' },
      { name: 'Nginx / Reverse Proxy', level: 'Intermediate' },
    ],
  },
];

const skillLevelBadge = (level: string) => {
  const colors: Record<string, string> = {
    Advanced: 'bg-accent/10 text-accent border-accent/20',
    Intermediate: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    Beginner: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
  };
  return colors[level] || colors.Beginner;
};

export default function Pricing() {
  return (
    <section id="skills" className="bg-[#050505] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-full px-4 py-1.5 text-xs text-gray-500 mb-5 font-mono">
            <Star size={12} />
            skills_matrix.yaml
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Domains of Technical
            <br />
            <span className="gradient-text">Competence</span>
          </h2>
          <p className="text-gray-500 max-w-md mx-auto text-sm">
            Backend-first skill set spanning AI orchestration, database architecture, compliance engineering, and DevOps.
          </p>
        </motion.div>

        {/* Skills Domain Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {domains.map((dom, i) => (
            <motion.div
              key={dom.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-px transition-all duration-300 ${
                dom.highlighted ? 'glow-accent' : ''
              }`}
              style={
                dom.highlighted
                  ? { background: 'linear-gradient(135deg, rgba(0,255,209,0.3) 0%, rgba(0,255,209,0.05) 50%, transparent 100%)' }
                  : { background: 'rgba(255,255,255,0.05)' }
              }
            >
              {dom.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-black text-[10px] uppercase font-bold tracking-wider px-4 py-1 rounded-full font-mono">
                  Primary
                </div>
              )}

              <div
                className={`h-full rounded-2xl p-6 flex flex-col ${
                  dom.highlighted ? 'bg-[#0a0a0a]' : 'bg-[#080808]'
                }`}
              >
                <div className="mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 border border-white/[0.08]"
                    style={{ backgroundColor: dom.color + '12', color: dom.color }}
                  >
                    {dom.icon}
                  </div>
                  <h3 className="text-white text-lg font-semibold">{dom.name}</h3>
                  <p className="text-gray-500 text-sm mt-2">{dom.description}</p>
                </div>

                <ul className="flex flex-col gap-3 mt-4">
                  {dom.skills.map((skill) => (
                    <li key={skill.name} className="flex items-start gap-2.5">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: dom.color + '15' }}
                      >
                        <Check size={9} style={{ color: dom.color }} strokeWidth={3} />
                      </div>
                      <div className="flex items-center justify-between flex-1">
                        <span className="text-gray-400 text-sm font-medium">{skill.name}</span>
                        <span className={`text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded border ${skillLevelBadge(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom certification note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 max-w-xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <span className="text-accent">&#9670;</span>
            Certified Full-Stack Developer — <span className="text-white font-medium">DVOC Institute Professional Program</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
