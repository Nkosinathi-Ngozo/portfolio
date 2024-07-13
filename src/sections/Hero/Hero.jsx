import styles from './HeroStyles.module.css'
import heroImage from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import LinkedinLight from '../../assets/linkedin-light.svg'
import LinkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'


function Hero() {
  const {theme, toggleTheme} = useTheme()
  
  const themeIcon = theme === 'light' ? sun : moon;
  
  const twitterIcon = theme === 'light'? twitterLight : twitterDark

  const githubIcon = theme === 'light'? githubLight : githubDark

  const LinkedinIcon = theme === 'light'? LinkedinLight : LinkedinDark

  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImage} alt="Profile picture of Nkosinathi Ngozo"></img>
            <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}></img>
        </div>
        <div className={styles.info}>
            <h1>
                Nkosinathi
                <br />
                Ngozo
            </h1>
            <h2>Fullstack Developer</h2>
            <span>
                <a href="https://github.com/Sblasta7" target="_blank">
                    <img src={githubIcon} alt="github icon" />
                </a>
                <a href="https://www.linkedin.com/in/nkosinathi-ngozo/" target="_blank">
                    <img src={LinkedinIcon} alt="LinkedIn icon" />
                </a>
            </span>
            <p className={styles.description}>Creative thinker and problem-solver with a background in software engineering, always eager to learn and adopt new technologies.</p>
            <a href={CV} download>
                <button className='hover'>Resume</button>
            </a>        
        
        </div>

    </section>
  )
}

export default Hero