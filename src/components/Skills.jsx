import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills'

const ACCENT_TEXT = {
  signal: 'text-signal',
  retrieval: 'text-retrieval',
  agent: 'text-agent',
  mern: 'text-mern',
}

export default function Skills() {
  return (
    <section id="skills" className="section py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mb-14"
      >
        <span className="eyebrow">Skills</span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold leading-tight">
          Tools I reach for, grouped by what they're for.
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="card-surface p-6"
          >
            <h3 className={`font-display text-sm font-semibold ${ACCENT_TEXT[group.accent]}`}>
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="chip">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
