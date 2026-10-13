import { motion } from 'framer-motion'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mb-14"
      >
        <span className="eyebrow">Experience</span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold leading-tight">Education &amp; timeline.</h2>
      </motion.div>

      <div className="relative pl-8 max-w-2xl">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
        <div className="space-y-10">
          {experience.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full bg-bg border-2 border-signal" />
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="font-mono text-xs text-signal">{item.type}</span>
                {item.placeholder && (
                  <span className="chip !text-[10px] !py-0.5 !px-2 text-ink-faint">add details</span>
                )}
              </div>
              <h3 className="font-display text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-ink-muted mt-0.5">{item.org} · {item.period}</p>
              <ul className="mt-3 space-y-1.5">
                {item.points.map((p) => (
                  <li key={p} className="text-sm text-ink-faint leading-relaxed flex gap-2">
                    <span className="text-signal mt-1.5">·</span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
