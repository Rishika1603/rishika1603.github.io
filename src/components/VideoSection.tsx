import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import PerspectiveWrapper from './PerspectiveWrapper';

export default function VideoSection() {
  return (
    <section className="bg-[#050505] py-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/10 rounded-full px-4 py-1.5 text-xs text-accent mb-5 font-mono">
            <Play size={12} fill="#00ffd1" />
            portfolio_demo.mp4
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            Systems in Motion
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Watch the high-fidelity UI and fluid node connections run in real-time.
          </p>
        </motion.div>

        <PerspectiveWrapper maxRotate={3} scaleOnHover={1.005} className="w-full">
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-[#080808] group">
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[50%] bg-accent/[0.03] rounded-full blur-[100px] pointer-events-none" />

            {/* Video */}
            <video
              src="/portfolio_demo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover block relative z-10"
            />

            {/* Overlay decorations */}
            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/[0.08] px-3 py-1.5 rounded-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] text-gray-400 font-mono tracking-wider">DEMO_LOOP.MP4</span>
            </div>

            {/* Corner brackets */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-white/10 rounded-tl-sm" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-white/10 rounded-tr-sm" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-white/10 rounded-bl-sm" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-white/10 rounded-br-sm" />
          </div>
        </PerspectiveWrapper>
      </div>
    </section>
  );
}
