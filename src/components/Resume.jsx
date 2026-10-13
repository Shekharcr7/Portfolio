import { motion } from 'framer-motion'
import { FileText, Download } from 'lucide-react'

export default function Resume() {
  return (
    <section id="resume" className="section py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="card-surface p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
      >
        <div className="flex items-start gap-4">
          <div className="hidden sm:flex h-11 w-11 items-center justify-center rounded-xl border border-border text-signal shrink-0">
            <FileText size={18} strokeWidth={1.75} />
          </div>
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold">Want the complete picture?</h2>
            <p className="mt-2.5 text-ink-muted max-w-md leading-relaxed">
              Download my resume for a detailed overview of my education, projects, skills and experience.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 shrink-0">
          <a href="public/resume.pdf" target="_blank" rel="noreferrer" className="btn-secondary">
            View Resume
          </a>
          <a href="public/resume.pdf" download className="btn-primary">
            <Download size={15} />
            Download PDF
          </a>
        </div>
      </motion.div>
    </section>
  )
}
