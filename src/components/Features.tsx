import { motion } from 'framer-motion';
import { Cpu, Server, Terminal, Zap, Shield, Globe, ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    icon: <Cpu size={20} />,
    title: 'Compliance Automation Engineering',
    company: 'Infomatics Services Pvt. Ltd.',
    duration: 'April 2025 — Present',
    description:
      'Architected state-of-the-art compliance automation platforms using Python and PostgreSQL. Designed complex backend validation engines and structural regulatory workflows to eliminate manual checking errors.',
    color: '#00ffd1',
    tags: ['Python', 'PostgreSQL', 'Validation Engines'],
  },
  {
    icon: <Server size={20} />,
    title: 'Enterprise API Design',
    company: 'Infomatics Services Pvt. Ltd.',
    duration: 'April 2025 — Present',
    description:
      'Engineered enterprise-grade REST APIs and physical database models for compliance tracking. Integrated modern OCR and document intelligence libraries to parse complex files automatically.',
    color: '#38bdf8',
    tags: ['REST APIs', 'Database Modeling', 'OCR Intelligence'],
  },
  {
    icon: <Terminal size={20} />,
    title: 'DevOps & CI/CD Pipelines',
    company: 'Infomatics Services Pvt. Ltd.',
    duration: 'April 2025 — Present',
    description:
      'Collaborated closely with system administration and DevOps teams to set up secure Docker containers on Ubuntu servers. Configured automated build, test, and release CI/CD pipelines.',
    color: '#f59e0b',
    tags: ['Docker', 'Ubuntu Server', 'CI/CD Pipelines'],
  },
];

const extras = [
  { icon: <Zap size={15} />, title: 'Languages', desc: 'Python, React, Tailwind CSS' },
  { icon: <Shield size={15} />, title: 'AI & Data', desc: 'RAG, Vector Search, Pinecone' },
  { icon: <Globe size={15} />, title: 'DevOps & Clouds', desc: 'Docker, CI/CD, Ubuntu Server' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
};

export default function Features() {
  return (
    <section id="experience" className="bg-[#050505] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-full px-4 py-1.5 text-xs text-gray-500 mb-5 font-mono">
            <Terminal size={12} />
            experience.json
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Building Systems to
            <br />
            <span className="gradient-text">Automate Compliance</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto text-sm">
            Practical experience designing containerized backend workflows, secure database layers, and smart system architectures.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group glass-card rounded-2xl overflow-hidden hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/[0.08] transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: exp.color + '12', color: exp.color }}
                  >
                    {exp.icon}
                  </div>
                  <ArrowUpRight size={16} className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-white text-base font-semibold mb-1">{exp.title}</h3>
                <div className="text-xs text-gray-500 font-mono mb-3 flex items-center gap-2">
                  <span>{exp.company}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-700" />
                  <span className="text-gray-600">{exp.duration}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{exp.description}</p>
              </div>
              <div className="p-6 pt-0 border-t border-white/[0.04] flex flex-wrap gap-1.5 mt-auto">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium px-2 py-0.5 bg-white/[0.03] border border-white/[0.06] rounded-md text-gray-500 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {extras.map((e) => (
            <div
              key={e.title}
              className="flex items-center gap-3 bg-white/[0.02] border border-white/[0.06] rounded-xl px-5 py-3 hover:bg-white/[0.04] transition-colors duration-300"
            >
              <span className="text-accent">{e.icon}</span>
              <div>
                <div className="text-white text-sm font-medium">{e.title}</div>
                <div className="text-gray-600 text-xs font-mono">{e.desc}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
