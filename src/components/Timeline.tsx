import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, CalendarDays } from 'lucide-react';

const timeline = [
  {
    type: 'work',
    icon: <Briefcase size={14} />,
    title: 'Backend & AI Automation Engineer',
    org: 'Infomatics Services Pvt. Ltd.',
    location: 'Mumbai, MH',
    period: 'April 2025 — Present',
    description:
      'Building compliance automation platforms with Python & PostgreSQL. Designing REST APIs, OCR integrations (Azure Document Intelligence), and Dockerized deployments on Ubuntu servers.',
    color: '#00ffd1',
    tags: ['Python', 'PostgreSQL', 'Docker', 'Azure OCR'],
  },
  {
    type: 'education',
    icon: <GraduationCap size={14} />,
    title: 'B.Sc. Information Technology',
    org: 'University of Mumbai',
    location: 'Mumbai, MH',
    period: 'June 2022 — May 2023',
    description:
      'Completed degree in Information Technology with focus on software engineering, database systems, and web development fundamentals.',
    color: '#38bdf8',
    tags: ['Software Engineering', 'Databases', 'Web Dev'],
  },
  {
    type: 'cert',
    icon: <Award size={14} />,
    title: 'Full-Stack Developer Certification',
    org: 'DVOC Institute Professional Program',
    location: 'Professional Program',
    period: '2023',
    description:
      'Intensive professional program covering full-stack development, modern frameworks, and industry best practices.',
    color: '#f59e0b',
    tags: ['Full-Stack', 'React', 'Node.js'],
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="bg-[#050505] py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-full px-4 py-1.5 text-xs text-gray-500 mb-5 font-mono">
            <CalendarDays size={12} />
            timeline.json
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Career <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            From academic foundations to building AI-powered enterprise compliance systems.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] md:left-[23px] top-2 bottom-2 w-px bg-white/[0.06]" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex gap-5 md:gap-6"
              >
                {/* Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center"
                    style={{ backgroundColor: item.color + '12' }}
                  >
                    <span style={{ color: item.color }}>{item.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="glass-card rounded-2xl p-5 md:p-6 flex-1 hover:bg-white/[0.04] transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md font-mono"
                      style={{
                        backgroundColor: item.color + '12',
                        color: item.color,
                      }}
                    >
                      {item.type === 'work' ? 'Experience' : item.type === 'education' ? 'Education' : 'Certification'}
                    </span>
                    <span className="text-gray-600 text-xs font-mono">{item.period}</span>
                  </div>

                  <h3 className="text-white text-base font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs mb-3">
                    {item.org} · {item.location}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium px-2 py-0.5 bg-white/[0.03] border border-white/[0.06] rounded-md text-gray-500 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
