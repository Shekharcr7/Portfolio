import { motion } from 'framer-motion'
import RAGArchitecture from './RAGArchitecture'
import AgentArchitecture from './AgentArchitecture'

export default function ArchitectureShowcase() {
  return (
    <section className="section py-10 md:py-16">
      <div className="space-y-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-8"
          >
            <span className="eyebrow">RAG Pipeline</span>
            <h3 className="mt-3 text-2xl sm:text-3xl font-semibold">
              From raw documents to a grounded, cited answer.
            </h3>
          </motion.div>
          <RAGArchitecture />
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-8"
          >
            <span className="eyebrow">Multi-Agent Pipeline</span>
            <h3 className="mt-3 text-2xl sm:text-3xl font-semibold">
              Four agents, one coordinated research pass.
            </h3>
          </motion.div>
          <AgentArchitecture />
        </div>
      </div>
    </section>
  )
}
