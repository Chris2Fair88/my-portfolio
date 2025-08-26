import { motion } from 'framer-motion'
import './ProjectCard.css'

function ProjectCard({ title, description, url, tech }) {
  const handleCardClick = () => {
    if (url) {
      window.open(url, '_blank')
    }
  }

  return (
    <motion.div
      className="project-card"
      onClick={handleCardClick}
      
      whileTap={{ scale: 0.98 }}
    >
      <h2 className="project-card__title">
        {title}
      </h2>

      <p className="project-card__description">
        {description}
      </p>
    </motion.div>
  )
}

export default ProjectCard
