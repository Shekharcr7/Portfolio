import { motion } from 'framer-motion'
import { Search, GitBranch, FlaskConical, Gauge } from 'lucide-react'

const PILLARS = [
  {
    icon: Search,
    title: 'Problem solving',
    text: 'Identify the failure mode first — understand where a naive approach breaks before adding complexity.',
  },
  {
    icon: GitBranch,
    title: 'System design',
    text: 'Design AI applications as testable components across retrieval, reasoning, orchestration, and application layers.',
  },
  {
    icon: FlaskConical,
    title: 'Experimentation',
    text: 'Build the smallest useful version, measure its weaknesses, and iterate on the component that matters most.',
  },
  {
    icon: Gauge,
    title: 'Evaluation',
    text: 'Measure AI systems with retrieval quality, faithfulness, latency, and task-specific metrics instead of relying on demos alone.',
  },
]

export default function About() {
  return (
    <section id="about" className="section py-24 md:py-32">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">About</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold leading-tight">
            An Artificial Intelligence &amp; Data Science graduate who ships systems, not just notebooks.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-5 text-ink-muted text-[1.05rem] leading-relaxed"
        >
          <p>
            I'm Chandra Shekhar, an Artificial Intelligence and Data Science graduate
            who spends most of my time building working AI systems: retrieval pipelines
            that answer questions from real documents, agent workflows that coordinate
            multiple LLM calls toward one goal, and the full-stack applications that put
            those systems in front of a user.
          </p>
          <p>
            My interest is less in demoing a language model and more in the engineering
            around it chunking strategy, retrieval fusion, evaluation harnesses,
            latency budgets, and the decisions that separate a prototype from something
            that holds up under real queries.
          </p>
          <p>
            Outside of AI-specific work, I build with React, Node.js and MongoDB, which
            means I can take a system from a Python pipeline to a deployed, usable
            product end to end.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {PILLARS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card-surface p-5">
                <Icon size={18} className="text-signal mb-3" strokeWidth={1.75} />
                <h3 className="font-display text-sm font-semibold text-ink mb-1.5">
                  {title}
                </h3>
                <p className="text-sm text-ink-faint leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
