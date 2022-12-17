import React from "react"

const WorkExpTile = ({ company, role, duration, tasks }: any) => {
  return (
    <div className="workexp">
      <h2 className="company">
        <span className="bold">{company}</span>, {role}
      </h2>
      <p className="duration">{duration}</p>
      <ul>
        {tasks.map((el: any) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </div>
  )
}

export default WorkExpTile
