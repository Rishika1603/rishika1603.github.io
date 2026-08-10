import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Lightbulb,
  Target,
  Layers,
  Zap,
  CheckCircle2,
  AlertCircle,
  Scale,
  ChefHat,
  Sparkles,
  Code2,
  GitBranch,
  ArrowRight,
} from 'lucide-react';

function CodeBlock({ snippet }: { snippet: { title: string; code: string; highlight: string } }) {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="rounded-lg overflow-hidden border border-white/[0.08] bg-[#0a0a0a]">
      <div className="flex items-center justify-between px-3 py-2 bg-white/[0.03] border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <Code2 size={12} className="text-accent" />
          <span className="text-[10px] text-gray-400 font-mono">{snippet.title}</span>
        </div>
        <button onClick={copyToClipboard} className="text-[10px] text-gray-500 hover:text-gray-300 transition-colors">
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className="p-3 overflow-x-auto">
        <pre className="text-[11px] font-mono text-gray-400 leading-relaxed">
          <code>{snippet.code}</code>
        </pre>
      </div>
      <div className="px-3 py-2 bg-white/[0.02] border-t border-white/[0.06]">
        <p className="text-[10px] text-accent/70">
          <span className="text-accent">\u25CF</span> {snippet.highlight}
        </p>
      </div>
    </div>
  );
}

function CaseStudyCard({ study, isExpanded, onToggle }: { study: any; isExpanded: boolean; onToggle: () => void }) {
  return (
    <motion.div layout className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
      <button onClick={onToggle} className="w-full p-5 flex items-center justify-between hover:bg-white/[0.03] transition-colors">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/[0.08]" style={{ backgroundColor: study.color + '15', color: study.color }}>
            {study.icon}
          </div>
          <div className="text-left">
            <h3 className="text-white font-semibold">{study.title}</h3>
            <p className="text-gray-500 text-sm">{study.subtitle}</p>
          </div>
        </div>
        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={20} className="text-gray-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <div className="px-5 pb-5 space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle size={14} className="text-red-400" />
                    <span className="text-xs font-medium text-white uppercase tracking-wider">The Problem</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{study.problem}</p>
                </div>
                <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Target size={14} className="text-amber-400" />
                    <span className="text-xs font-medium text-white uppercase tracking-wider">Constraints</span>
                  </div>
                  <ul className="space-y-1.5">
                    {study.constraints.map((c: string, i: number) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-gray-600 mt-1">\u2022</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Layers size={14} className="text-blue-400" />
                  <span className="text-xs font-medium text-white uppercase tracking-wider">Architecture</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4">
                    <ul className="space-y-2">
                      {study.solution.architecture.map((item: string, i: number) => (
                        <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                          <ArrowRight size={12} className="text-gray-600 mt-1 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    {study.solution.decisions.map((dec: any, i: number) => (
                      <div key={i} className="rounded-lg bg-white/[0.03] border border-white/[0.06] p-3">
                        <div className="flex items-start gap-2 mb-1">
                          <Lightbulb size={12} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-medium text-white">{dec.title}</span>
                        </div>
                        <p className="text-xs text-gray-500 ml-5">{dec.reasoning}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Code2 size={14} className="text-purple-400" />
                  <span className="text-xs font-medium text-white uppercase tracking-wider">Implementation</span>
                </div>
                <CodeBlock snippet={study.codeSnippet} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Zap size={14} className="text-green-400" />
                  <span className="text-xs font-medium text-white uppercase tracking-wider">Results</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {study.results.map((r: any, i: number) => (
                    <div key={i} className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3 text-center">
                      <div className="text-2xl font-bold" style={{ color: study.color }}>
                        {r.value}
                      </div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">
                        {r.metric}
                      </div>
                      <div className="text-[10px] text-gray-600 mt-1">{r.impact}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4">
                <div className="flex items-center gap-2 mb-3">
                  <GitBranch size={14} className="text-cyan-400" />
                  <span className="text-xs font-medium text-white uppercase tracking-wider">Key Takeaways</span>
                </div>
                <ul className="space-y-1.5">
                  {study.lessons.map((lesson: string, i: number) => (
                    <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                      <CheckCircle2 size={12} className="text-gray-600 mt-1 flex-shrink-0" />
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function CaseStudies() {
  const [expandedId, setExpandedId] = useState<string | null>('trillium');
  return (
    <section id="casestudies" className="bg-[#050505] py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.02] rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">
            Case <span className="gradient-text">Studies</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">Deep dives into complex problems I've solved, with architecture decisions, trade-offs, and measurable impact.</p>
        </motion.div>
        <div className="space-y-4">
          {[
            {
              id: 'trillium',
              title: 'TrilliumReconAI',
              subtitle: 'Financial Reconciliation Engine',
              icon: <Scale size={20} />,
              color: '#34d399',
              problem: 'Manual bank reconciliation took 8+ hours daily. Analysts matched 50K+ transactions against CMS records with error-prone spreadsheets.',
              constraints: ['50K+ transactions daily', '99.9% audit trail accuracy', 'Legacy MS SQL Server', 'Maker-checker workflow', 'Excel export required'],
              solution: {
                architecture: ['FastAPI async ingestion', 'SQLAlchemy matching algorithms', 'Redis job queue', 'JWT/RBAC approvals', 'Celery batch workers', 'Docker + Nginx'],
                decisions: [
                  { title: 'Deterministic PARTIAL matching', reasoning: 'Rejected fuzzy Levenshtein at scale; used normalized amount/date scoring for 92% auto-classification at 100ms.' },
                  { title: 'Async Celery + SSE', reasoning: 'Sync ingestion timed out at 10K+ rows; async workers with progress streams fixed browser-timeout failures.' },
                  { title: 'Materialized views', reasoning: 'Compliance reports dropped from 30s to <2s by caching aggregated results.' },
                ],
              },
              codeSnippet: {
                title: 'Composite Matching Engine',
                code: `async def classify_transaction(txn, cms_records):
    matches = []
    for cms in cms_records:
        score = 0.0
        if abs(txn.amount - cms.amount) < 0.01:
            score += 0.40
        elif is_partial_amount(txn.amount, cms.amount):
            score += 0.25
        date_diff = abs((txn.date - cms.date).days)
        if date_diff == 0: score += 0.30
        elif date_diff <= 3: score += 0.15
        if txn.ref and cms.ref:
            score += sequence_similarity(txn.ref, cms.ref) * 0.30
        if score >= 0.70:
            matches.append((cms, score))
    if not matches:
        return MatchResult(status=Status.UNMATCHED)
    best = max(matches, key=lambda x: x[1])
    return MatchResult(..., confidence=best[1])`,
                highlight: 'Weighted heuristic scoring for 92% auto-classification',
              },
              results: [
                { metric: 'Auto-Classification', value: '92%', impact: '7.3 hours saved daily' },
                { metric: 'Matching Latency', value: '<100ms', impact: 'Per transaction' },
                { metric: 'Concurrent Users', value: '50+', impact: 'No degradation' },
              ],
              lessons: [
                'Deterministic algorithms > ML for structured finance data',
                'Materialized views are mandatory for compliance reporting',
                'SSE outperforms polling for batch progress updates',
              ],
            },
            {
              id: 'fashion',
              title: 'Fashion AI Gallery',
              subtitle: 'Multi-Modal E-Commerce Search',
              icon: <Sparkles size={20} />,
              color: '#a78bfa',
              problem: 'Keyword search missed relevant products, especially for vague queries and image-based discovery.',
              constraints: ['<200ms semantic search', '100K+ products', 'GPU inference cost <$500/mo', 'Cited recommendations required'],
              solution: {
                architecture: ['Pinecone vector search', 'CLIP multi-modal embeddings', 'Gemini RAG assistant', 'Modal.com GPU inference', 'FastAPI backend', 'React + TypeScript UI'],
                decisions: [
                  { title: 'Separate retrieval + ranking embeddings', reasoning: 'CLIP search was good but ranking suffered; added a fine-tuned reranker after retrieval.' },
                  { title: 'Metadata pre-filtering', reasoning: 'Vector-only search returned wrong category/size; metadata filters improved precision by 34%.' },
                  { title: 'Serverless GPU on Modal', reasoning: 'Eliminated fixed infra cost while keeping <200ms inference spikes.' },
                ],
              },
              codeSnippet: {
                title: 'Weighted Multi-Modal Search',
                code: `async def search(query=None, image=None, filters=None):
    if image and query:
        image_emb = await generate_image_embedding(image)
        text_emb = await generate_text_embedding(query)
        query_vector = 0.6*text_emb + 0.4*image_emb
    else:
        query_vector = await generate_text_embedding(query)
    results = await pinecone.query(
        vector=query_vector.tolist(), top_k=20,
        filter=pinecone_filter, include_metadata=True
    )
    if query:
        results.matches = await rerank_results(query, results.matches)
    return [ProductResult.from_match(m) for m in results.matches]`,
                highlight: 'Hybrid retrieval with reranking',
              },
              results: [
                { metric: 'Search Latency', value: '<150ms', impact: 'P95 at scale' },
                { metric: 'Conversion Lift', value: '+34%', impact: 'vs keyword search' },
                { metric: 'Try-On Usage', value: '28%', impact: 'Of sessions' },
              ],
              lessons: [
                'Retrieval + rerank beats single-stage search',
                'Vector search needs metadata guardrails for e-commerce',
                'RAG requires citation UX to keep users trusting results',
              ],
            },
            {
              id: 'aichef',
              title: 'AI Chef',
              subtitle: 'Multi-Agent Meal Planning Platform',
              icon: <ChefHat size={20} />,
              color: '#ff8a3d',
              problem: 'Meal planning is tedious, diet rules are easy to break, and pantry stock is never in sync with what you actually cook.',
              constraints: ['Respect dietary constraints', 'Audit every AI draft', 'Keep working without an LLM', 'Live agent pipeline UX', '<3s plan generation'],
              solution: {
                architecture: ['FastAPI agent pipeline', 'Groq llama-3.3-70b planner', 'Rule-based PlanValidator', 'PostgreSQL persistence', 'Docker + Podman', 'React glassmorphism UI'],
                decisions: [
                  { title: 'LLM for planning, rules for validation', reasoning: 'Generation benefits from creativity, but diet compliance needs deterministic checks — so a validator audits every draft and triggers a corrective re-plan.' },
                  { title: 'Ground the planner in a recipe DB', reasoning: 'Prompting with reference recipes keeps output realistic, lowercase and schema-valid without fragile parsing.' },
                  { title: 'Graceful degradation chain', reasoning: '70B → 8B → recipe DB means the app never breaks when the LLM is unreachable.' },
                ],
              },
              codeSnippet: {
                title: 'PlanValidator feedback loop',
                code: `plan = planner.plan_meals(diet, days)
result = validator.check(plan, diet)
if not result["passed"]:
    plan = planner.plan_meals(diet, days,
        feedback=result["issues"])  # redraft with violations`,
                highlight: 'Agent-to-agent corrective loop',
              },
              results: [
                { metric: 'Plan Time', value: '~2s', impact: '7 validated meals' },
                { metric: 'Diet Compliance', value: '100%', impact: 'Rule-audited drafts' },
                { metric: 'Restock', value: 'Auto', impact: 'Pantry updated on delivery' },
              ],
              lessons: [
                'Validators catch what prompt engineering misses',
                'Ground generative agents in reference data',
                'Degrade gracefully: rules beat a broken API',
              ],
            },
          ].map((study) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              isExpanded={expandedId === study.id}
              onToggle={() => setExpandedId(expandedId === study.id ? null : study.id)}
            />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        />
      </div>
    </section>
  );
}
