import React from "react"
import { useLoaderData, useNavigate } from "react-router-dom"
import Group from "../components/Group"
import Header from "../components/Header"
import projects from "../data/projects"
import { BsArrowUpRight } from "react-icons/bs"

const ProjectDetail = () => {
  const loaderData = useLoaderData()
  const nav = useNavigate()
  const project = projects.find((el) => el.title === loaderData)
  const getLanguagesStr = () => {
    let str = ""
    project?.languages.forEach((el: any) => {
      str += `${el}, `
    })
    str = str.slice(0, -2)
    return str
  }
  return (
    <div>
      <Header />
      <button
        onClick={() => {
          nav(-1)
        }}
      >
        back
      </button>
      {!project ? (
        <div>No Project Found</div>
      ) : (
        <div>
          <h1>{project?.title}</h1>
          <div>
            <div>
              <Group title="year">{project?.year}</Group>
            </div>
            <div>
              <Group title="languages">{getLanguagesStr()}</Group>
            </div>
          </div>
          <div>
            <p>{project?.longDesc}</p>
            <a href={project?.liveLink} target="_blank" rel="noreferrer">
              View Project <BsArrowUpRight />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export const loader = async ({ params }: any) => {
  return params.name
}

export default ProjectDetail
