import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="bg-[#050505] py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-full px-4 py-1.5 text-xs text-gray-500 mb-5 font-mono">
            <Send size={12} />
            contact.form
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Open to backend engineering roles, AI automation projects, and vibe-coding collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="glass-card rounded-2xl p-5 hover:bg-white/[0.04] transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <Mail size={16} className="text-accent" />
                <span className="text-white text-sm font-medium">Email</span>
              </div>
              <a
                href="mailto:rishikavish16@gmail.com"
                className="text-gray-400 text-sm hover:text-accent transition-colors font-mono"
              >
                rishikavish16@gmail.com
              </a>
            </div>

            <div className="glass-card rounded-2xl p-5 hover:bg-white/[0.04] transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <MapPin size={16} className="text-accent" />
                <span className="text-white text-sm font-medium">Location</span>
              </div>
              <p className="text-gray-400 text-sm font-mono">Mumbai, Maharashtra, India</p>
            </div>

            <div className="glass-card rounded-2xl p-5 hover:bg-white/[0.04] transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <Clock size={16} className="text-accent" />
                <span className="text-white text-sm font-medium">Availability</span>
              </div>
              <p className="text-gray-400 text-sm">Open to full-time & contract opportunities</p>
            </div>

            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-accent text-black text-sm font-semibold py-3 rounded-xl hover:bg-[#00e6bc] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,209,0.2)]"
            >
              Schedule a Call
              <ArrowUpRight size={14} />
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 md:p-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-500 text-xs font-mono mb-1.5 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent/40 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-500 text-xs font-mono mb-1.5 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent/40 transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-500 text-xs font-mono mb-1.5 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent/40 transition-colors"
                  placeholder="Project collaboration / Job opportunity"
                />
              </div>

              <div>
                <label className="block text-gray-500 text-xs font-mono mb-1.5 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent/40 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  submitted
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-accent text-black hover:bg-[#00e6bc] hover:shadow-[0_0_30px_rgba(0,255,209,0.2)]'
                }`}
              >
                {submitted ? (
                  <>Message Sent</>
                ) : (
                  <>
                    <Send size={14} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
