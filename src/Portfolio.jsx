import './Portfolio.css';

const socials = [
  { name: 'GitHub', url: 'https://github.com/yourusername' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
  // Add more as needed
];

const experience = [
  { role: 'Frontend Developer', company: 'Tech Co', period: '2022–Present', context: 'Building modern web apps with React.' },
  { role: 'Web Designer', company: 'Design Studio', period: '2020–2022', context: 'Designed and developed client websites.' },
];

const skills = ['JavaScript', 'React', 'CSS Modules', 'Styled Components', 'Node.js'];

const education = [
  { degree: 'B.Sc. Computer Science', school: 'State University', year: '2020' },
];

const awards = [
  { title: 'Best Web App', issuer: 'Tech Awards', year: '2023' },
];

function Portfolio() {
  const handleEmailClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("Email click triggered - would open mailto:Chris2Fair88@gmail.com");
    // Try direct assignment without changing the URL
    try {
      const mailtoLink = document.createElement('a');
      mailtoLink.href = 'mailto:Chris2Fair88@gmail.com';
      mailtoLink.click();
    } catch (error) {
      // Fallback
      window.location.assign('mailto:Chris2Fair88@gmail.com');
    }
  };

  return (
    <div className="portfolio">
      <div className="portfolio__terminal">
        <div className="portfolio__header">
          <span className="portfolio__prompt">USER.EXE</span>
        </div>
        
        <div className="portfolio__content">
          <div className="portfolio__section">
            <div className="portfolio__section-title">{'>'} USER_INFO.DAT</div>
            <div className="portfolio__data">
              NAME: Chris Fairbanks<br/>
              ROLE: Full Stack Developer<br/>
              STATUS: Available for hire
            </div>
          </div>

          <div className="portfolio__section">
            <div className="portfolio__section-title">{'>'} SKILLS.SYS</div>
            <div className="portfolio__data">
              JavaScript • React • Node.js • MongoDB<br/>
              HTML • CSS • Git • Express
            </div>
          </div>

          <div className="portfolio__section">
            <div className="portfolio__section-title">{'>'} CONTACT.LNK</div>
            <div className="portfolio__data">
              <button 
                onClick={handleEmailClick}
                className="portfolio__link portfolio__email-button"
                aria-label="Send email to Chris Fairbanks"
              >
                EMAIL
              </button> • <a href="https://github.com/chris2fair88" className="portfolio__link" target="_blank" rel="noopener noreferrer">GITHUB</a>
            </div>
          </div>

          <div className="portfolio__section">
            <div className="portfolio__section-title">{'>'} STATUS.LOG</div>
            <div className="portfolio__data">
              2025: TripleTen Bootcamp Graduate<br/>
              <span className="portfolio__cursor">█</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
