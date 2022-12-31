import React from "react"
import workExperience from "../../data/workexperience"
import Group from "../Group"
import WorkExpTile from "../WorkExpTile"

const CV = () => {
  return (
    <div className="cv">
      <h2 className="name">Chukwudumebi Orji</h2>
      <p className="role">Front end developer</p>

      <Group
        title="Fluent programming languages"
        headingClass="title"
        contentClass="mb-24"
      >
        Html, Css, Sass, Javascript, React, Angular
      </Group>
      <Group title="Soft skills" headingClass="title" contentClass="mb-64">
        Communication, Teamwork, Agile/Scrum workflow
      </Group>
      <Group title="Work Experience" headingClass="title title-last">
        {workExperience.map((el) => (
          <WorkExpTile key={el.company} {...el} />
        ))}
      </Group>
    </div>
  )
}

export default CV
