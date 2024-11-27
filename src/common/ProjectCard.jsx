import React from 'react'

function ProjectCard({key, src, link, h3, p, description, languages, styles }) {
  return (
    <a href={link} target='_blank' rel="noopener noreferrer" >
      
      <div className={styles.card}>
        <img src={src} alt={`${h3} logo`} />

        <div className={styles.overlay}>
          
          <p>{description}</p>
          
          <div className={styles.languages}>
            {languages.map((language, index) => (
              <span key={index} className={styles.languagePill}>{language}</span>
            ))}
          </div>  
        </div>
      </div>
      
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  )
}

export default ProjectCard