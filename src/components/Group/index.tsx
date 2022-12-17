import React from "react"

const Group = ({ title, children, headingClass, contentClass }: any) => {
  return (
    <div>
      <h4 className={headingClass}>{title}</h4>
      <div className={contentClass}>{children}</div>
    </div>
  )
}

export default Group
