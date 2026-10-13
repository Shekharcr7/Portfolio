import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import AIEngineering from './components/AIEngineering'
import ArchitectureShowcase from './components/ArchitectureShowcase'
import AIPlayground from './components/AIPlayground'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Github from './components/Github'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <AIEngineering />
        <ArchitectureShowcase />
        <AIPlayground />
        <Skills />
        <Experience />
        <Github />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
