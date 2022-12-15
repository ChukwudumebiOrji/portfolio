import React from "react"
import workExperience from "../../data/workexperience"
import Group from "../Group"
import WorkExpTile from "../WorkExpTile"

const CV = () => {
  return (
    <div>
      <h2>Chukwudumebi Orji</h2>
      <p>Front-end developer</p>

      <Group title="Fluent programming languages">
        Html, Css, Sass, Javascript, React, Vue
      </Group>
      <Group title="Soft skills">
        Communication, teamwork, Agile/Scrum workflow
      </Group>
      <Group title="Work Experience">
        {workExperience.map((el) => (
          <WorkExpTile key={el.company} {...el} />
        ))}
      </Group>
    </div>
  )
}

export default CV
