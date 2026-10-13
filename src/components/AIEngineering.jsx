import { motion } from 'framer-motion'

const STEPS = [
  {
    num: '01',
    title: 'Understand the Problem',
    text: 'Define what a correct answer looks like before writing any retrieval or agent code.',
  },
  {
    num: '02',
    title: 'Design the Architecture',
    text: 'Choose components retrieval strategy, agent roles, data flow — before choosing libraries.',
  },
  {
    num: '03',
    title: 'Build the AI Pipeline',
    text: 'Implement end to end with a working baseline first, then layer in refinements.',
  },
  {
    num: '04',
    title: 'Evaluate the System',
    text: 'Measure retrieval quality, faithfulness and correctness not just whether it runs.',
  },
  {
    num: '05',
    title: 'Optimize Quality, Cost & Latency',
    text: 'Trade off reranking, model size and pipeline steps against real budgets.',
  },
  {
    num: '06',
    title: 'Deploy',
    text: 'Package the system so it is actually usable outside a notebook.',
  },
]

export default function AIEngineering() {
  return (
    <section id="ai-engineering" className="section py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <span className="eyebrow">How I Build AI Systems</span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold leading-tight">
          I focus on building measurable AI systems, not just LLM demos.
        </h2>
      </motion.div>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="bg-bg p-7"
          >
            <span className="font-mono text-2xl text-signal-dim">{step.num}</span>
            <h3 className="mt-3 font-display text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-ink-muted leading-relaxed">{step.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
