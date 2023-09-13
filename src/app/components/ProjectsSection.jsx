import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: "AOR",
        description: "Project 1 description",
        image: "/images/projects/1.png",
        gitUrl: "/",
        previewUrl:"/"
    },
    {
        id: 2,
        title: "WoW Stats Profile",
        description: "Project 2 description",
        image: "/images/projects/2.png",
        gitUrl: "/",
        previewUrl:"/"
    }
]

const ProjectsSection = () => {
  return (
    <>
        <h2 id="projects">My Projects</h2>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {projectsData.map((project) => (
                <ProjectCard 
                    key ={project.id} 
                    title={project.title} 
                    description={project.description} 
                    imgUrl={project.image} 
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                />
            ))}
        </div>
    </>
  )
}

export default ProjectsSection