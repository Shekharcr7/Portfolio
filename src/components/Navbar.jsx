
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#ai-engineering', label: 'AI Engineering' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
]

const RESUME_PATH = '/Resume.pdf'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Update navbar appearance when scrolling.
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // Prevent background scrolling while the mobile menu is open.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow

    if (open) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  // Close the mobile menu when Escape is pressed.
  useEffect(() => {
    if (!open) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const handleNav = (href) => {
    setOpen(false)

    const element = document.querySelector(href)

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  const handleNavClick = (event, href) => {
  event.preventDefault();

  const scrollToSection = () => {
    const target = document.querySelector(href);

    if (!target) {
      console.warn(`Navigation target not found: ${href}`);
      return;
    }

    const navbarHeight = 64;
    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  if (open) {
    setOpen(false);

    // Allow the menu to close and body scrolling to be restored.
    window.setTimeout(scrollToSection, 300);
  } else {
    scrollToSection();
  }
};

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'glass border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="section flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, '#home')}
          className="font-display text-lg font-semibold tracking-tight"
          aria-label="Chandra Shekhar - Home"
        >
          CS<span className="text-signal">.</span>
        </a>

        {/* Desktop navigation */}
        <ul className="hidden lg:flex items-center gap-1">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(event) =>
                  handleNavClick(event, link.href)
                }
                className="px-3 py-2 text-sm text-ink-muted hover:text-ink transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop resume download */}
        <div className="hidden lg:block">
          <a
            href={RESUME_PATH}
            download
            className="btn-secondary"
          >
            <Download size={15} strokeWidth={2} />
            Download Resume
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
          className="lg:hidden p-2 -mr-2 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal rounded-md"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.25,
              ease: 'easeInOut',
            }}
            className="lg:hidden glass border-t border-border overflow-hidden"
          >
            <ul className="section py-4 flex flex-col gap-1">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) =>
                      handleNavClick(event, link.href)
                    }
                    className="block px-2 py-3 text-base text-ink-muted hover:text-ink transition-colors border-b border-border/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              <li className="pt-3">
                <a
                  href={RESUME_PATH}
                  download
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  <Download size={15} />
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
