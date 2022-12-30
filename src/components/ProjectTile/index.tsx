import { useNavigate } from "react-router-dom"
import { BsArrowUpRight } from "react-icons/bs"
import Group from "../Group"
import { getLanguagesStr } from "../../utils/func"
import { motion } from "framer-motion"

const cardHover: any = {
  backgroundColor: "#101010",
  transition: { duration: 0.2 },
}

const getCardDimensions = () => {
  if (window.innerWidth >= 1024) {
    cardHover.width = "640px"
    cardHover.height = "320px"
    cardHover.padding = "3.5em"
    return cardHover
  } else if (window.innerWidth >= 768) {
    cardHover.width = "480px"
    cardHover.height = "240px"
    cardHover.padding = "2.75em"
    return cardHover
  } else {
    cardHover.width = "420px"
    cardHover.height = "210px"
    cardHover.padding = "2.25em"
    return cardHover
  }
}

const ProjectTile = ({ title, shortDesc, year, languages, liveLink }: any) => {
  const nav = useNavigate()

  const navigateOnClick = () => {
    nav(`/project/${title}`)
  }

  return (
    <motion.div
      onClick={navigateOnClick}
      whileHover={getCardDimensions()}
      className="project-card"
    >
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

        <a href={liveLink} target="_blank" rel="noreferrer" id="project-link">
          View Project <BsArrowUpRight />
        </a>
      </div>
    </motion.div>
  )
}

export default ProjectTile
