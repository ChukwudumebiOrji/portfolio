import React from "react"

const WorkExpTile = ({ company, role, duration, tasks }: any) => {
  return (
    <div>
      <p>
        {company}, {role}
      </p>
      <p>{duration}</p>
      <ul>
        {tasks.map((el: any) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </div>
  )
}

export default WorkExpTile
