import { useNavigate } from "react-router-dom"
import { BsArrowUpRight } from "react-icons/bs"
import Group from "../Group"
import { getLanguagesStr } from "../../utils/func"

const ProjectTile = ({ title, shortDesc, year, languages, liveLink }: any) => {
  const nav = useNavigate()

  const navigateOnClick = () => {
    nav(`/project/${title}`)
  }

  return (
    <div onClick={navigateOnClick} className="project-card">
      <h2 className="title">{title}</h2>

      <p className="desc">{shortDesc}</p>

      <div className="details">
        <div className="details-content">
          <Group
            title="year"
            headingClass="grayed-text detail-title"
            contentClass="detail-body"
          >
            {year}
          </Group>
          <Group
            title="languages"
            headingClass="grayed-text detail-title"
            contentClass="detail-body"
          >
            {getLanguagesStr(languages)}
          </Group>
        </div>

        <a href={liveLink} target="_blank" rel="noreferrer">
          View Project <BsArrowUpRight />
        </a>
      </div>
    </div>
  )
}

export default ProjectTile
