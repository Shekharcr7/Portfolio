import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const ACCENT_MAP = {
  retrieval: { border: 'border-retrieval/40', text: 'text-retrieval', dot: 'bg-retrieval' },
  agent: { border: 'border-agent/40', text: 'text-agent', dot: 'bg-agent' },
  mern: { border: 'border-mern/40', text: 'text-mern', dot: 'bg-mern' },
  signal: { border: 'border-signal/40', text: 'text-signal', dot: 'bg-signal' },
}

function Node({ node, accent, index }) {
  const a = ACCENT_MAP[accent] || ACCENT_MAP.signal
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className={`card-surface ${a.border} px-4 py-3 min-w-[180px] group relative`}
    >
      <div className="flex items-center gap-2">
        <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} />
        <span className="font-mono text-[13px] text-ink">{node.label}</span>
      </div>
      {node.sub && <p className="mt-1 text-xs text-ink-faint pl-3.5">{node.sub}</p>}
    </motion.div>
  )
}

// Groups consecutive nodes that share a `branch` key so they render
// side by side (used by the hybrid-retrieval parallel-path project).
function groupNodes(nodes) {
  const groups = []
  let i = 0
  while (i < nodes.length) {
    const n = nodes[i]
    if (n.branch) {
      const group = [n]
      let j = i + 1
      while (j < nodes.length && nodes[j].branch) {
        group.push(nodes[j])
        j++
      }
      groups.push({ type: 'parallel', items: group })
      i = j
    } else {
      groups.push({ type: 'single', items: [n] })
      i++
    }
  }
  return groups
}

export default function FlowDiagram({ nodes, accent = 'signal', compact = false }) {
  const groups = groupNodes(nodes)

  return (
    <div className={`flex flex-col items-center ${compact ? 'gap-1.5' : 'gap-2'} py-2`}>
      {groups.map((group, gi) => (
        <div key={gi} className="flex flex-col items-center gap-2 w-full">
          {group.type === 'single' ? (
            <Node node={group.items[0]} accent={accent} index={gi} />
          ) : (
            <div className="flex flex-wrap justify-center gap-3">
              {group.items.map((n, ni) => (
                <Node key={n.id} node={n} accent={accent} index={gi + ni} />
              ))}
            </div>
          )}
          {gi < groups.length - 1 && (
            <ArrowDown size={compact ? 14 : 16} className="text-ink-faint" strokeWidth={1.5} />
          )}
        </div>
      ))}
    </div>
  )
}
