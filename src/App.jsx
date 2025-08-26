import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'
import ProjectCard from './ProjectCard.jsx'
import Portfolio from './Portfolio.jsx'
import Bootup from './Bootup.jsx'

function App() {
  const [showBootup, setShowBootup] = useState(true)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  // Example project data sorted by complexity - ready for 6 total projects
  const projects = [
    { 
      title: 'About Me', 
      description: 'My first website using only HTML and CSS.', 
      url: 'https://chris2fair88.github.io/se_project_about-me/',
      complexity: 1,
      tech: ['HTML', 'CSS']
    },
    { 
      title: 'The Library', 
      description: 'A more complex static website with navigation.', 
      url: 'https://chris2fair88.github.io/se_project_library/',
      complexity: 2,
      tech: ['HTML', 'CSS']
    },
    { 
      title: 'Coffee Shop', 
      description: 'A robust website with embedded video and forms', 
      url: 'https://chris2fair88.github.io/se_project_coffeeshop/',
      complexity: 3,
      tech: ['HTML', 'CSS']
    },
    { 
      title: 'Around the US', 
      description: 'A JavaScript website using an API to display US locations', 
      url: 'https://chris2fair88.github.io/se_project_aroundtheus/',
      complexity: 3,
      tech: ['HTML', 'CSS', 'JS','API']
    },
    { 
      title: 'WTWR(what to wear)', 
      description: 'A fully deployed weather-clothing app with responsive frontend and solid backend mechanics.', 
      url: 'https://wtwr.homeonthewater.com/',
      complexity: 3,
      tech: ['HTML', 'CSS', 'JS', 'React', 'Express', 'Node.js', 'API', 'MongoDB']
    }
  ]

  const handleBootupComplete = () => {
    setShowBootup(false)
  }

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const currentProject = projects[currentProjectIndex]

  if (showBootup) {
    return <Bootup onComplete={handleBootupComplete} projectCount={projects.length} />
  }

  return (
    <div className="app">
      <div className="app__computer-screen">
        <div className="app__content">
          <h1 className="app__system-header">SYSTEM ONLINE</h1>
          
          <div className="app__portfolio-grid">
            <div className="app__portfolio-section">
              <Portfolio />
            </div>
            
            <div className="app__projects-section">
              <h2 className="app__projects-header">
                PROJECTS DATABASE
              </h2>
              
              <div className="app__project-carousel">
                <div className="app__project-navigation">
                  <button 
                    className="app__nav-button app__nav-button--prev"
                    onClick={prevProject}
                    disabled={projects.length <= 1}
                  >
                    ◄ PREV
                  </button>
                  
                  <div className="app__project-counter">
                    {currentProjectIndex + 1} / {projects.length}
                  </div>
                  
                  <button 
                    className="app__nav-button app__nav-button--next"
                    onClick={nextProject}
                    disabled={projects.length <= 1}
                  >
                    NEXT ►
                  </button>
                </div>

                <div className="app__project-display">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentProjectIndex}
                      className="app__project-container"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ProjectCard 
                        title={currentProject.title} 
                        description={currentProject.description} 
                        url={currentProject.url}
                        complexity={currentProject.complexity}
                        tech={currentProject.tech}
                      />
                      <div className="app__tech-list">
                        {currentProject.tech.map((item, techIdx) => (
                          <span key={techIdx} className="app__tech-item">
                            {item}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
