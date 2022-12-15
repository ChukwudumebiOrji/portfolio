import React from "react"
import projects from "../../data/projects"
import ProjectTile from "../ProjectTile"

const ProjectList = () => {
  return (
    <div>
      <h2>Selected Projects</h2>
      <div>
        {projects.map((el) => (
          <ProjectTile key={el.title} {...el} />
        ))}
      </div>
    </div>
  )
}

export default ProjectList
