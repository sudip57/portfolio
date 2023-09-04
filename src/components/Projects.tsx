import { projectsData } from '../libs/data'
import SectionHeading from './SectionHeading'
import React from 'react'
import Project from './Project'
import useSectionInView from '../libs/hooks'

const Projects = () => {
  const { ref } = useSectionInView('Projects', 0.4)
  return (
    <section id="projects" className=" scroll-mt-28 mb-28" ref={ref}>
      <SectionHeading>My Projects</SectionHeading>
      <div className="">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project key={index} {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export default Projects
