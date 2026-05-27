import { motion } from 'framer-motion';
import { Quote, Bot, MessageSquare, User } from 'lucide-react';

const testimonials = [
  {
    quote:
      "Rishika's backend architecture is remarkably clean. The way she structured the Compluse compliance engine with PostgreSQL triggers and validation layers shows deep systems thinking.",
    name: 'Claude 3.5 Sonnet',
    role: 'AI Development Partner',
    icon: <Bot size={16} />,
    color: '#f59e0b',
  },
  {
    quote:
      "Her CardPulse OCR integration pipeline is production-ready. The structured data extraction logic and schema validation she built would scale effortlessly in enterprise environments.",
    name: 'Gemini Pro',
    role: 'AI Code Assistant',
    icon: <Bot size={16} />,
    color: '#38bdf8',
  },
  {
    quote:
      "Working with Rishika on the compliance automation platform was seamless. She ships fast, thinks in systems, and her Docker deployments are always rock-solid.",
    name: 'DevOps Lead',
    role: 'Infomatics Services',
    icon: <User size={16} />,
    color: '#00ffd1',
  },
];

export default function Testimonials() {
  return (
    <section id="endorsements" className="bg-[#050505] py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-full px-4 py-1.5 text-xs text-gray-500 mb-5 font-mono">
            <MessageSquare size={12} />
            endorsements.json
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Peer <span className="gradient-text">Endorsements</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            What AI coding partners and team leads say about collaborating with me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:bg-white/[0.04] transition-all duration-300 flex flex-col"
            >
              <Quote size={20} className="text-accent/30 mb-4" />
              <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.04]">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: t.color + '15', color: t.color }}
                >
                  {t.icon}
                </div>
                <div>
                  <div className="text-white text-sm font-medium">{t.name}</div>
                  <div className="text-gray-600 text-xs font-mono">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
