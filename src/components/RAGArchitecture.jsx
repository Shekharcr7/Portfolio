import { useState } from 'react'
import { motion } from 'framer-motion'

const STAGES = [
  { id: 'docs', label: 'Documents', detail: 'Raw source files — PDFs, markdown, text — that make up the knowledge base.' },
  { id: 'parsing', label: 'Parsing', detail: 'Extracts clean text from source formats, stripping layout noise.' },
  { id: 'chunking', label: 'Chunking', detail: 'Splits text into overlapping windows sized for retrieval and context limits.' },
  { id: 'embedding', label: 'Embedding', detail: 'Converts chunks into dense vectors that capture semantic meaning.' },
  { id: 'retrieval', label: 'Lexical + Semantic Retrieval', detail: 'BM25 keyword search and embedding similarity search run in parallel.' },
  { id: 'rrf', label: 'RRF', detail: 'Reciprocal Rank Fusion merges the two ranked candidate lists by rank position.' },
  { id: 'reranking', label: 'Reranking', detail: 'A cross-encoder re-scores top candidates for finer-grained relevance.' },
  { id: 'llm', label: 'LLM', detail: 'A local model (via Ollama) generates an answer grounded in the retrieved chunks.' },
  { id: 'answer', label: 'Grounded Answer', detail: 'The response is composed only from retrieved context, not free recall.' },
  { id: 'citations', label: 'Citations', detail: 'Each claim in the answer links back to its source chunk for verification.' },
]

export default function RAGArchitecture() {
  const [hovered, setHovered] = useState(STAGES[0].id)
  const active = STAGES.find((s) => s.id === hovered)

  return (
    <div>
      <div className="flex flex-wrap gap-2.5">
        {STAGES.map((stage, i) => (
          <motion.button
            key={stage.id}
            onMouseEnter={() => setHovered(stage.id)}
            onFocus={() => setHovered(stage.id)}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className={`font-mono text-sm px-3.5 py-2 rounded-lg border transition-colors duration-200 ${
              hovered === stage.id
                ? 'border-retrieval/50 text-retrieval bg-retrieval/10'
                : 'border-border text-ink-muted hover:border-border-strong'
            }`}
          >
            {stage.label}
          </motion.button>
        ))}
      </div>

      <motion.div
        key={active.id}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="mt-6 card-surface bg-surface-2/40 p-5"
      >
        <span className="font-mono text-xs text-retrieval">{active.label}</span>
        <p className="mt-2 text-sm text-ink-muted leading-relaxed max-w-xl">{active.detail}</p>
      </motion.div>
    </div>
  )
}
