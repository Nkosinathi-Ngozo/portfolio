import styles from './SkillsStyles.module.css'
import checkMarkDark from '../../assets/checkmark-dark.svg'
import checkMarkLight from '../../assets/checkmark-light.svg'
import { useTheme } from '../../common/ThemeContext'
import SkillContainer from '../../common/SkillContainer'


function Skills() {
    const {theme, toggleTheme} = useTheme()
  
  const checkMarkIcon = theme === 'light'? checkMarkLight : checkMarkDark;

  const frontendSkills = ['HTML', 'CSS', 'JavaScript', 'Git', 'React', 'Angular'];
  const backendSkills = ['C#', 'Node JS', 'Kotlin', 'Python', 'MySQL', 'MongoDB', 'Java', 'Firebase'];

  return (
    <section id="skills" className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillsContainer}>
        
            <SkillContainer skillBox={styles.skillBox} skillHolder={styles.skillHolder} skillsTitleClass={styles.skillsTitle} skillsTitle={'Backend Development'} 
                skillGroup={styles.skillGroup} skillData={styles.skillData} 
                skills={backendSkills} skillItem={styles.skillData} checkMarkIcon={checkMarkIcon} />

            <SkillContainer skillBox={styles.skillBox} skillHolder={styles.skillHolder} skillsTitleClass={styles.skillsTitle} skillsTitle={'Frontend Development'} 
                skillGroup={styles.skillGroup} skillData={styles.skillData} 
                skills={frontendSkills} skillItem={styles.skillData} checkMarkIcon={checkMarkIcon} />
        </div>
    </section>
  )
}

export default Skills