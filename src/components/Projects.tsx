import { projectsData } from '../libs/data'
import SectionHeading from './SectionHeading'
import React from 'react'
import Project from './Project'
import useSectionInView from '../libs/hooks'

const Projects = () => {
  const { ref } = useSectionInView('Projects', 0.27)
  return (
    <section ref={ref} id="projects" className=" scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
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
