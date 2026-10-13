import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react'

const LINKS = [
  { label: 'Email', icon: Mail, href: 'mailto:boddapushekhar2004@gmail.com', display: 'boddapushekhar2004@gmail.com' },
  { label: 'GitHub', icon: Github, href: 'https://github.com/Shekharcr7', display: 'github.com/Shekharcr7' },
  { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/b-c-shekhar', display: 'linkedin.com/in/b-c-shekhar' },
]

export default function Contact() {
  return (
    <section id="contact" className="section py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-3xl sm:text-5xl font-semibold leading-tight">
          Let's build something intelligent.
        </h2>
        <p className="mt-5 text-ink-muted leading-relaxed max-w-lg mx-auto">
          I'm open to opportunities in AI/ML, Generative AI, RAG, AI Agents and
          Full-Stack Engineering.
        </p>
      </motion.div>

      <div className="mt-12 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {LINKS.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.label === 'Email' ? undefined : '_blank'}
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="card-surface p-6 flex flex-col items-center text-center gap-3 hover:border-border-strong transition-colors group"
          >
            <link.icon size={20} className="text-signal" strokeWidth={1.75} />
            <div>
              <div className="text-sm font-medium text-ink flex items-center gap-1 justify-center">
                {link.label}
                <ArrowUpRight size={13} className="text-ink-faint group-hover:text-ink transition-colors" />
              </div>
              <div className="text-xs text-ink-faint mt-1 break-all">{link.display}</div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
