import { motion } from "framer-motion"
import React from "react"
import projects from "../../data/projects"
import ProjectTile from "../ProjectTile"

const ProjectList = () => {
  return (
    <div className="projects-list">
      <h2>Selected Projects</h2>
      <div className="projects-container">
        <div className="projects">
          {projects.map((el) => (
            <ProjectTile key={el.title} {...el} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectList
