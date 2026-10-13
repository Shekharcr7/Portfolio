import { motion } from 'framer-motion'
import { Star, Github as GithubIcon, ArrowUpRight } from 'lucide-react'
import { repos, githubUsername } from '../data/github'

const LANGUAGE_COLOR = {
  Python: 'bg-signal',
  JavaScript: 'bg-agent',
  TypeScript: 'bg-mern',
}

export default function Github() {
  return (
    <section className="section py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-end justify-between gap-4 mb-14"
      >
        <div className="max-w-2xl">
          <span className="eyebrow">GitHub</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold leading-tight">Selected repositories.</h2>
        </div>
        <a
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
        >
          <GithubIcon size={15} />
          View Profile
        </a>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {repos.map((repo, i) => (
          <motion.a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="card-surface p-6 hover:border-border-strong transition-colors group"
          >
            <div className="flex items-start justify-between">
              <span className="font-mono text-sm text-ink">{repo.name}</span>
              <ArrowUpRight size={15} className="text-ink-faint group-hover:text-ink transition-colors shrink-0" />
            </div>
            <p className="mt-2.5 text-sm text-ink-faint leading-relaxed">{repo.description}</p>
            <div className="mt-5 flex items-center gap-4 text-xs text-ink-faint">
              <span className="flex items-center gap-1.5">
                <span className={`h-2 w-2 rounded-full ${LANGUAGE_COLOR[repo.language] || 'bg-ink-faint'}`} />
                {repo.language}
              </span>
              <span className="flex items-center gap-1">
                <Star size={12} />
                {repo.stars}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
