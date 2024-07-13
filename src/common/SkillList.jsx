import React from 'react'

function SkillList({src, skill, className}) {
  return (
    <span className={className}>
        <img src={src} alt="Checkmark icon"/>
        <p>{skill}</p>
    </span>
  )
}

export default SkillList