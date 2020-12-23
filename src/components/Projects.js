import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"

const Projects = ({projects, title, showLink}) => {
  return (
    <section className="section projects">
      <Title title={title}/>
      <div className="section-center projects-center">
        {
          projects.map((project, index) => {
            // basically with the spread operator I am requesting all 
            // the properties requested in the graphql
            return  <Project key={project.id} index={index} {...project} />
          })
        }
      </div>
      {
        // if showLink is true than wherever I am passing after && 
        // is going to be rendered
        showLink && (
          <Link to="/projects" className="btn center-btn">
            projects
          </Link>
        )
      }
    </section>
  )
}

export default Projects
