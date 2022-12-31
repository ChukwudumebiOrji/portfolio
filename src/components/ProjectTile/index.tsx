import { useNavigate } from "react-router-dom"
import { BsArrowUpRight } from "react-icons/bs"
import EllipsisText from "react-ellipsis-text"
import Group from "../Group"
import { getLanguagesStr } from "../../utils/func"
import { motion } from "framer-motion"
import { useContext } from "react"
import { AppContext } from "../../store/store"

const ProjectTile = ({ title, shortDesc, year, languages, liveLink }: any) => {
  const nav = useNavigate()
  const {
    state: { isDark },
  } = useContext(AppContext)

  const navigateOnClick = () => {
    nav(`/project/${title}`)
  }

  const cardHover: any = {
    backgroundColor: isDark ? "#ede0d4" : "#212121",
    color: isDark ? "#212121" : "#f9f8f6",
    height: "280px",
    padding: "40px",
    transition: { duration: 0.2 },
  }

  return (
    <motion.div
      onClick={navigateOnClick}
      whileHover={cardHover}
      className="project-card"
    >
      <h2 className="title">{title}</h2>

      <p className="desc">{shortDesc}</p>

      <div className="details">
        <div className="details-content">
          <Group
            title="year"
            headingClass="detail-title"
            contentClass="detail-body"
          >
            {year}
          </Group>
          <Group
            title="languages"
            headingClass="detail-title"
            contentClass="detail-body"
          >
            <EllipsisText text={getLanguagesStr(languages)} length={16} />
          </Group>
        </div>

        <a href={liveLink} target="_blank" rel="noreferrer" id="project-link">
          View Project <BsArrowUpRight />
        </a>
      </div>
    </motion.div>
  )
}

export default ProjectTile
