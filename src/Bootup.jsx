import { useState, useEffect } from 'react'
import './Bootup.css'



function Bootup({ onComplete, projectCount }) {
  const bootupMessages = [
  { text: 'PORTFOLIO SYSTEM v2.1', delay: 100 },
  { text: 'Copyright (C) 1988-2025 Fairbanks Technologies', delay: 200 },
  { text: '', delay: 300 },
  { text: 'Memory Test: 640K OK', delay: 400, hasProgressBar: true },
  { text: 'Loading Portfolio System...', delay: 700, hasLoading: true },
  { text: 'PORTFOLIO.EXE loaded successfully', delay: 1000 },
  { text: `Database initialized: ${projectCount} projects found`, delay: 1200 },
  { text: '', delay: 1300 },
  { text: 'Welcome to Fairbanks Portfolio System', delay: 1400 },
  { text: 'Press any key or click to continue...', delay: 1500, showCursor: true, requiresInteraction: true }
]
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [visibleMessages, setVisibleMessages] = useState([])
  const [showCursor, setShowCursor] = useState(false)
  const [canSkip, setCanSkip] = useState(false)
  const [waitingForInput, setWaitingForInput] = useState(false)

  useEffect(() => {
    // Allow skipping after 0.5 seconds
    const skipTimer = setTimeout(() => setCanSkip(true), 500)
    
    // Handle keyboard events to skip bootup or proceed
    const handleKeyPress = () => {
      if (waitingForInput) {
        onComplete()
      } else if (canSkip) {
        onComplete()
      }
    }

    const handleClick = () => {
      if (waitingForInput) {
        onComplete()
      } else if (canSkip) {
        onComplete()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    window.addEventListener('click', handleClick)

    return () => {
      clearTimeout(skipTimer)
      window.removeEventListener('keydown', handleKeyPress)
      window.removeEventListener('click', handleClick)
    }
  }, [canSkip, waitingForInput, onComplete])

  useEffect(() => {
    if (currentMessageIndex >= bootupMessages.length) {
      setShowCursor(true)
      setWaitingForInput(true)
      // No auto-complete - wait for user interaction
      return
    }

    const currentMessage = bootupMessages[currentMessageIndex]
    const timer = setTimeout(() => {
      setVisibleMessages(prev => [...prev, currentMessage])
      setCurrentMessageIndex(prev => prev + 1)
      
      // If this message requires interaction, stop auto-progression
      if (currentMessage.requiresInteraction) {
        setWaitingForInput(true)
      }
    }, currentMessage.delay)

    return () => clearTimeout(timer)
  }, [currentMessageIndex, onComplete])

  return (
    <div className="bootup">
      {visibleMessages.map((message, index) => (
        <div key={index} className="bootup__line bootup__text">
          <span>
            {message.text}
          </span>
          {message.hasProgressBar && (
            <div className="bootup__memory-bar">
              <div className="bootup__memory-progress"></div>
            </div>
          )}
          {message.hasLoading && (
            <span className="bootup__loading-dots"></span>
          )}
          {message.showCursor && <span className="bootup__cursor"></span>}
        </div>
      ))}
      
      {(canSkip || waitingForInput) && (
        <div className={`bootup__skip-message ${waitingForInput ? 'bootup__skip-message--active' : ''}`}>
          {waitingForInput ? 'Press any key or click to continue' : 'Click or press any key to skip'}
        </div>
      )}
    </div>
  )
}

export default Bootup
