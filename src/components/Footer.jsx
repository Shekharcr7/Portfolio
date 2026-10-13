import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="section py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <div className="font-display font-semibold">
            Chandra Shekhar <span className="text-ink-faint font-normal">— AI/ML Engineer</span>
          </div>
          <p className="text-xs text-ink-faint mt-1 font-mono">
            Python · GenAI · RAG · AI Agents · MERN
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/Shekharcr7" target="_blank" rel="noreferrer" className="text-ink-muted hover:text-ink transition-colors" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/b-c-shekhar" target="_blank" rel="noreferrer" className="text-ink-muted hover:text-ink transition-colors" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="mailto:boddapushekhar2004@gmail.com" className="text-ink-muted hover:text-ink transition-colors" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>

        <p className="text-xs text-ink-faint">&copy; 2026 Chandra Shekhar. All rights reserved.</p>
      </div>
    </footer>
  )
}
