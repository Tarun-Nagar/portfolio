import React from 'react';
import Project from './Project';
import './stylep.css' ;

const projectData = [{
    name:"Project 1",
    description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    skills:['SASS','TypeScript','React'],
    github:"https://github.com/",
    linkedIn:"https://www.linkedin.com/in/tarun-nagar-1183b7242"
},
{
    name:"Guessing Game",
    description:" A Guessing Game Using Javascript",
    skills:['Javascript','CSS'],
    github:"https://github.com/",
    codesandbox:"https://codesandbox.io/s/condescending-rumple-sf4mqq"
},
{
    name:"Project 3",
    description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    skills: ['SASS','TypeScript','React'],
    github:"https://github.com/",
    linkedIn:"https://www.linkedin.com/"
},
{
    name:"Project 4",
    description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    skills:['SASS','TypeScript','React'],
    github:"https://github.com/",
    linkedIn:"https://www.linkedin.com/"
}
];

const ProjectContainer = () => {
    
    return (
          <div><h1>PROJECTS</h1>
        <div className="projectContainer">
           {/* <div className='proh'> <h1>PROJECTS</h1></div> */}
            {
              
                projectData.map(projectItem=>{
                    return <Project projectItem={projectItem}/>
                })
            }
        </div>
        </div>
    )
}

export default ProjectContainer