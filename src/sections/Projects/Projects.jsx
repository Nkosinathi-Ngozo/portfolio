import React from 'react'
import styles from './ProjectsStyles.module.css'
import fgLatto from '../../assets/fglatto.jpeg'
import pennyWise from '../../assets/pennywise.png'
import bookStore from '../../assets/book.jpeg'
import smartSchoolHub from '../../assets/smart-school-hub.jpeg'
import hipsster from '../../assets/hipsster.png'
import fitLift from '../../assets/fitlift.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  const projectSource = [fgLatto, pennyWise, smartSchoolHub, bookStore]
  const projectLinks = ['Real-Estate', 'PennyWise', 'smart-school-hub', 'book-store']
  const projectName = ['F.G. LATTO', 'PennyWise', 'Smart School Hub', 'Book Store']
  const projectType = ['Real Estate App', 'Budgeting Hub', 'Hackerthon', 'Book Store App']
  const projectDetails = [
    'A comprehensive real estate application designed to simplify property management and transactions for buyers, sellers, and agents',
    'A budgeting and investment mobile application as a personal project to simplify financial management and empower users to make informed decisions.',
    'An application that won the Varsity College - Waterfall 2023 ' +
    'Hackathon that acts as student hub that allows students to login using their facial' +
    'features and gave users access to AI features',  
    'An e-commerce web app, mainly for students, that allows user to sell and buy used textbooks', 
    ]

  const projectLanguages = [
    ['Kotlin', 'NodeJS', 'Firebase', 'Git'],
    ['Kotlin', 'NodeJS', 'Firebase', 'Git'],
    ['Python', 'MongoDB', 'Git'],
    ['HTML', 'CSS', 'JavaScript', 'NodeJS', 'MySQL', 'Git']
  ]
  
  return (
    <section id='projects' className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectContainer}>
            
            {
              projectSource.map((src, index) => (
                <ProjectCard
                  key={index}
                  src={src}
                  link={projectLinks[index] ? `https://github.com/Nkosinathi-Ngozo/${projectLinks[index]}.git` : '#'}
                  h3={projectName[index]}
                  p={projectType[index]}
                  description={projectDetails[index]}
                  languages={projectLanguages[index]}
                  styles={styles}
                />
              ))
            }
        </div>
    </section>
  )
}

export default Projects