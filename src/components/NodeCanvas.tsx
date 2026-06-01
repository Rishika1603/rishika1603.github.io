import { motion } from 'framer-motion';
import { ArrowRight, Settings2, Terminal, ShieldAlert, Sparkles, FileText, CalendarDays, Briefcase, Bot } from 'lucide-react';
import PerspectiveWrapper from './PerspectiveWrapper';

interface NodeProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  delay: number;
  inputs?: string[];
  outputs?: string[];
  yOffsetOffset?: number;
  org?: 'company' | 'self';
}

function Node({ title, subtitle, icon, color, delay, inputs = [], outputs = [], yOffsetOffset = 0, org }: NodeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      animate={{
        y: [0, -5 + yOffsetOffset, 0],
      }}
      transition={{
        default: { duration: 0.5, delay },
        y: {
          duration: 5 + yOffsetOffset,
          repeat: Infinity,
          ease: 'easeInOut',
          delay,
        },
      }}
      className="absolute z-20"
    >
      <PerspectiveWrapper maxRotate={15} scaleOnHover={1.04}>
        <div
          className="glass-card rounded-xl w-56 shadow-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-white/[0.15]"
          style={{ boxShadow: `0 0 25px ${color}12` }}
        >
          <div className="px-3 py-2 border-b border-white/[0.06] flex items-center gap-2">
            <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ backgroundColor: color + '18' }}>
              <span style={{ color }}>{icon}</span>
            </div>
            <span className="text-white text-xs font-medium">{title}</span>
            {org && (
              <span
                className={`ml-auto text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded font-mono ${
                  org === 'company'
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                }`}
              >
                {org}
              </span>
            )}
          </div>
          <div className="px-3 py-3">
            <p className="text-gray-500 text-[10px] mb-2.5 font-mono">{subtitle}</p>
            {inputs.map((inp) => (
              <div key={inp} className="flex items-center gap-1.5 mb-1.5">
                <div className="w-1.5 h-1.5 rounded-full border border-gray-600 bg-[#050505]" />
                <span className="text-gray-500 text-[10px]">{inp}</span>
              </div>
            ))}
            {outputs.map((out) => (
              <div key={out} className="flex items-center justify-end gap-1.5 mt-1.5">
                <span className="text-gray-500 text-[10px]">{out}</span>
                <div className="w-1.5 h-1.5 rounded-full border border-accent/50 bg-accent/20 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </PerspectiveWrapper>
    </motion.div>
  );
}

function AnimatedLine({ x1, y1, x2, y2, delay, color = '#00ffd1' }: { x1: number; y1: number; x2: number; y2: number; delay: number; color?: string }) {
  const dx = x2 - x1;
  const cp1x = x1 + dx * 0.5;
  const cp2x = x2 - dx * 0.5;
  const d = `M ${x1} ${y1} C ${cp1x} ${y1}, ${cp2x} ${y2}, ${x2} ${y2}`;

  return (
    <g>
      <path
        d={d}
        fill="none"
        stroke="rgba(255, 255, 255, 0.03)"
        strokeWidth="2"
      />
      <motion.path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeOpacity="0.5"
        strokeDasharray="8 6"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        animate={{
          strokeDashoffset: [0, -28],
        }}
        transition={{
          default: { duration: 1.2, delay, ease: 'easeInOut' },
          strokeDashoffset: {
            repeat: Infinity,
            duration: 2.5,
            ease: 'linear',
          },
        }}
      />
      <DataPacket d={d} delay={delay + 1.2} color={color} />
    </g>
  );
}

function DataPacket({ d, delay, color }: { d: string; delay: number; color: string }) {
  return (
    <motion.circle
      r="3"
      fill={color}
      filter="url(#glow)"
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        offsetDistance: ['0%', '100%'],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
        ease: 'linear',
        opacity: {
          times: [0, 0.1, 0.9, 1],
          duration: 3,
          repeat: Infinity,
          delay,
        },
      }}
      style={{
        offsetPath: `path('${d}')`,
        offsetRotate: '0deg',
      }}
    />
  );
}

function FloatingParticle({ delay, x, y }: { delay: number; x: string; y: string }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-accent/20 pointer-events-none"
      style={{ left: x, top: y }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.2, 0.6, 0.2],
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    />
  );
}

export default function NodeCanvas() {
  return (
    <section id="workflow" className="bg-[#050505] py-24 overflow-hidden relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <FloatingParticle
            key={i}
            delay={i * 0.3}
            x={`${Math.random() * 100}%`}
            y={`${Math.random() * 100}%`}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/10 rounded-full px-4 py-1.5 text-xs text-accent mb-5 font-mono">
            <Settings2 size={12} />
            project_blueprint_v1.0
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Project Architecture
            <br />
            <span className="gradient-text-subtle">End-to-End System Design</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto text-sm">
            Mapping AI models, compliance engines, OCR pipelines, and containerized deployments across real-world projects.
          </p>
        </motion.div>

        <PerspectiveWrapper maxRotate={5} scaleOnHover={1.005} className="w-full">
            <div
              className="relative bg-[#080808] border border-white/[0.06] rounded-2xl overflow-hidden overflow-x-auto"
              style={{ height: 420, minWidth: '650px' }}
            >
            {/* Animated grid bg */}
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: 'radial-gradient(circle, #222 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
              animate={{
                backgroundPosition: ['0px 0px', '28px 28px'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Scanline effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                background: 'linear-gradient(to bottom, transparent 50%, rgba(0, 255, 209, 0.015) 50%)',
                backgroundSize: '100% 4px',
              }}
              animate={{
                backgroundPosition: ['0px 0px', '0px 8px'],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-accent/[0.03] rounded-full blur-[90px]" />
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#a78bfa]/[0.02] rounded-full blur-[80px]" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#38bdf8]/[0.02] rounded-full blur-[80px]" />

            {/* Zone Labels */}
            <div className="absolute top-3 left-3 z-30 flex items-center gap-2 bg-white/[0.03] border border-white/[0.08] rounded-full px-3 py-1">
              <Bot size={10} className="text-purple-400" />
              <span className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">Self</span>
            </div>
            <div className="absolute top-3 left-[280px] z-30 flex items-center gap-2 bg-white/[0.03] border border-white/[0.08] rounded-full px-3 py-1">
              <Briefcase size={10} className="text-amber-400" />
              <span className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">Company</span>
            </div>

            {/* SVG connections with data packets */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Fashion AI Gallery → Deploy */}
              <AnimatedLine x1={240} y1={90} x2={620} y2={165} delay={0.6} color="#a78bfa" />
              {/* CardPulse → Compluse */}
              <AnimatedLine x1={240} y1={270} x2={330} y2={100} delay={0.8} color="#38bdf8" />
              {/* CardPulse → NovusLite */}
              <AnimatedLine x1={240} y1={290} x2={330} y2={270} delay={1.0} color="#38bdf8" />
              {/* Compluse → Deploy */}
              <AnimatedLine x1={530} y1={100} x2={620} y2={175} delay={1.2} color="#f59e0b" />
              {/* NovusLite → Deploy */}
              <AnimatedLine x1={530} y1={270} x2={620} y2={195} delay={1.4} color="#ef4444" />
            </svg>

            {/* Nodes */}
            <div className="absolute" style={{ left: 30, top: 30 }}>
              <Node
                title="Fashion AI Gallery"
                subtitle="React · FastAPI · Pinecone · Gemini"
                icon={<Sparkles size={12} />}
                color="#a78bfa"
                delay={0.3}
                inputs={['User Query', 'Product Image']}
                outputs={['RAG Response', 'Try-On Result']}
                yOffsetOffset={1}
                org="self"
              />
            </div>

            <div className="absolute" style={{ left: 30, top: 220 }}>
              <Node
                title="CardPulse"
                subtitle="Azure OCR · PostgreSQL"
                icon={<FileText size={12} />}
                color="#38bdf8"
                delay={0.45}
                inputs={['Raw Document', 'Azure Layout Engine']}
                outputs={['Structured JSON', 'PostgreSQL']}
                yOffsetOffset={2}
                org="company"
              />
            </div>

            <div className="absolute" style={{ left: 320, top: 40 }}>
              <Node
                title="Compluse"
                subtitle="Compliance · Calendar · Tracking"
                icon={<CalendarDays size={12} />}
                color="#f59e0b"
                delay={0.6}
                inputs={['Regulatory Rules', 'Employee Data']}
                outputs={['Deadline Alerts', 'Calendar Events']}
                yOffsetOffset={-1}
                org="company"
              />
            </div>

            <div className="absolute" style={{ left: 320, top: 220 }}>
              <Node
                title="NovusLite"
                subtitle="Insider Trading · Validation"
                icon={<ShieldAlert size={12} />}
                color="#ef4444"
                delay={0.7}
                inputs={['Trade Logs', 'Rules Engine']}
                outputs={['Compliance Report', 'Risk Alerts']}
                yOffsetOffset={1.5}
                org="company"
              />
            </div>

            <div className="absolute" style={{ left: 620, top: 130 }}>
              <Node
                title="Production Deploy"
                subtitle="Docker · Ubuntu · CI/CD"
                icon={<Terminal size={12} />}
                color="#00ffd1"
                delay={0.9}
                inputs={['Container Images', 'CI/CD Runner']}
                outputs={['Live Services', 'Monitoring']}
                yOffsetOffset={0.5}
              />
            </div>

            {/* Corner label */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 z-30">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] text-gray-600 font-mono tracking-wider uppercase">System Design v1.0</span>
            </div>
            <div className="absolute bottom-4 right-4 flex items-center gap-2 z-30">
              <span className="text-[10px] text-gray-500 bg-white/[0.03] border border-white/[0.06] rounded-md px-2.5 py-1 font-mono">status: connected</span>
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-purple-400/60" />
                <span className="text-[10px] text-gray-500 font-mono">Self</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-amber-400/60" />
                <span className="text-[10px] text-gray-500 font-mono">Company</span>
              </div>
            </div>
          </div>
        </PerspectiveWrapper>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-8"
        >
          <a href="#experience" className="flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all duration-300">
            View Experience <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
