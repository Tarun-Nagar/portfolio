import React from 'react'

const Project = ({projectItem}) => {
    const {name, description, skills, github, codesandbox} = projectItem;
    console.log(projectItem.skills);
    
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="skillContainer">
                {skills.map(skill=>(
                  <span className="skills">{skill}</span>
                ))}
            </div>
            <span className="projectLink">
                <a href={github}>Github</a>
            </span>            
            <span>
                <a href={codesandbox}>codesandbox</a>
            </span>
        </div>
    )
}

export default Project