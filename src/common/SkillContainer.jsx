import React from 'react'
import SkillList from './SkillList'


function SkillContainer({skillBox, skillHolder, skillsTitleClass, skillsTitle, skillGroup, skillData, skills, skillItem, checkMarkIcon}) {
  return (
    <div className={skillBox}>
        <div className={skillHolder}>
            <h2 className={skillsTitleClass}>{skillsTitle}</h2>
            <div className={skillGroup}>
                <div className={skillData}>
                    {skills.map((element, index) => (
                        <SkillList key={index} src={checkMarkIcon} skill={element} className={skillItem}/>
                    ))}

                </div>
            </div>
        </div>
    </div>
  )
}

export default SkillContainer