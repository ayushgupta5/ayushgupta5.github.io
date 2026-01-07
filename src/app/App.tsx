import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Impact } from "./components/Impact";
import { CompetitiveProgramming } from "./components/CompetitiveProgramming";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#hero" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              Ayush Kumar Gupta
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                About
              </a>
              <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Experience
              </a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Projects
              </a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Skills
              </a>
              <a href="#contact" className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg font-medium">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Impact />
        <Skills />
        <CompetitiveProgramming />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="text-center text-gray-300">
            <p className="text-lg mb-2">© 2026 Ayush Kumar Gupta</p>
            <p className="text-sm text-gray-400">Building reliable systems at scale • Senior Software Engineer</p>
          </div>
        </div>
      </footer>
    </div>
  );
}