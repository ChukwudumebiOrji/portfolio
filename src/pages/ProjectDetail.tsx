import React, { useContext } from "react"
import { useLoaderData, useNavigate } from "react-router-dom"
import Group from "../components/Group"
import Header from "../components/Header"
import projects from "../data/projects"
import { BsArrowLeft, BsArrowUpRight } from "react-icons/bs"
import { getLanguagesStr } from "../utils/func"
import Links from "../components/Links"
import { closeCurtain } from "../store/actions"
import { AppContext } from "../store/store"

const ProjectDetail = () => {
  const loaderData = useLoaderData()
  const nav = useNavigate()
  const { dispatch } = useContext(AppContext)

  const project = projects.find((el) => el.title === loaderData)

  return (
    <div className="project-detail">
      <Header />
      <button
        className="highlighted"
        onClick={() => {
          dispatch(closeCurtain())
          nav(-1)
        }}
      >
        <BsArrowLeft />
        back
      </button>
      {!project ? (
        <div>No Project Found</div>
      ) : (
        <div>
          <h1 className="title">{project?.title}</h1>
          <div className="about highlighted ">
            <Group title="year">{project?.year}</Group>
            <Group title="languages">
              {getLanguagesStr(project.languages)}
            </Group>
          </div>
          <div className="details">
            <p className="desc">{project?.longDesc}</p>
            <div className="viewlink">
              <span
                onClick={() => {
                  dispatch(closeCurtain())
                  nav("/home")
                }}
              >
                <BsArrowLeft />
                back
              </span>
              <a
                href={project?.liveLink}
                target="_blank"
                rel="noreferrer"
                id="project-link"
              >
                View Project <BsArrowUpRight />
              </a>
            </div>
          </div>
          <Links />
        </div>
      )}
    </div>
  )
}

export const loader = async ({ params }: any) => {
  return params.name
}

export default ProjectDetail
