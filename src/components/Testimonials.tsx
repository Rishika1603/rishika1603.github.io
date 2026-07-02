import { motion } from 'framer-motion';
import { Quote, TrendingUp, Shield, Clock, Database, MessageSquare } from 'lucide-react';

const impactMetrics = [
  {
    icon: <TrendingUp size={16} />,
    metric: '70%',
    label: 'Processing Time Reduction',
    desc: 'Automated OCR pipelines at Infomatics Services eliminated manual data entry bottlenecks.',
    color: '#00ffd1',
  },
  {
    icon: <Shield size={16} />,
    metric: '100%',
    label: 'Audit Coverage',
    desc: 'PostgreSQL validation engines with triggers ensure zero data integrity violations across compliance datasets.',
    color: '#f59e0b',
  },
  {
    icon: <Clock size={16} />,
    metric: '50+',
    label: 'Enterprise Clients Served',
    desc: 'Regulatory deadline tracking system monitors filing obligations for compliance teams.',
    color: '#38bdf8',
  },
  {
    icon: <Database size={16} />,
    metric: '<100ms',
    label: 'Query Response Time',
    desc: 'Optimized PostgreSQL schemas with materialized views for sub-second compliance lookups.',
    color: '#a78bfa',
  },
];

export default function ImpactMetrics() {
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
            impact_metrics.json
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Measurable <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Quantified outcomes from production systems built for enterprise compliance and AI automation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {impactMetrics.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:bg-white/[0.04] transition-all duration-300 flex flex-col"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/[0.08] mb-4"
                style={{ backgroundColor: item.color + '12', color: item.color }}
              >
                {item.icon}
              </div>
              <div className="text-3xl font-bold mb-1" style={{ color: item.color }}>
                {item.metric}
              </div>
              <div className="text-white text-sm font-medium mb-3">{item.label}</div>
              <p className="text-gray-500 text-xs leading-relaxed flex-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Note about future testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-xs font-mono">
            <span className="text-accent">*</span> Verified peer testimonials with LinkedIn attribution coming soon.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
