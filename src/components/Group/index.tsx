import React from "react"

const Group = ({ title, children }: any) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  )
}

export default Group
