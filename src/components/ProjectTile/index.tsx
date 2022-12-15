import React from "react"
import { useNavigate } from "react-router-dom"
import { BsArrowUpRight } from "react-icons/bs"
import Group from "../Group"

const ProjectTile = ({ title, shortDesc, year, languages, liveLink }: any) => {
  const nav = useNavigate()
  const getLanguagesStr = () => {
    let str = ""
    languages.forEach((el: any) => {
      str += `${el}, `
    })
    str = str.slice(0, -2)
    return str
  }

  const navigateOnClick = () => {
    nav(`/project/${title}`)
  }

  return (
    <div onClick={navigateOnClick}>
      <h2>{title}</h2>

      <p>{shortDesc}</p>

      <div>
        <Group title="year">{year}</Group>
        <Group title="languages">{getLanguagesStr()}</Group>

        <a href={liveLink} target="_blank" rel="noreferrer">
          View Project <BsArrowUpRight />
        </a>
      </div>
    </div>
  )
}

export default ProjectTile
