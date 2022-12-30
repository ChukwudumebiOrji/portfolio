import { AnimatePresence, motion } from "framer-motion"
import React, { useContext } from "react"
import { BsArrowUpRight, BsFillMoonFill, BsFillSunFill } from "react-icons/bs"
import { useLoaderData } from "react-router-dom"
import Curtain from "../components/Curtain"
import Group from "../components/Group"
import Header from "../components/Header"
import Links from "../components/Links"
import ProjectList from "../components/ProjectList"
import { toggleTheme } from "../store/actions"
import { AppContext } from "../store/store"

const homeVariants = {
  topInitial: {
    y: "-50vh",
    opacity: 0,
  },
  top: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      type: "spring",
      bounce: 0.4,
      delay: 0.2,
    },
  },
  bottomInitial: {
    y: "50vh",
    opacity: 0,
  },
  bottom: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      type: "spring",
      bounce: 0.4,
      delay: 0.2,
    },
  },
}

const Home = () => {
  const {
    state: { showCurtain, showMenuBtn, isDark },
    dispatch,
  } = useContext(AppContext)
  const route = useLoaderData()

  return (
    <div className="home">
      <div>
        <AnimatePresence>{showCurtain && <Curtain />}</AnimatePresence>
        {!showCurtain && (
          <>
            <Header route={route} />
            <motion.div
              variants={homeVariants}
              initial="topInitial"
              animate="top"
            >
              <div className="about">
                <p className="desc">
                  I have been a frontend developer since October, 2021. That
                  means I build aesthetic and functional UI for users to
                  interact with. Currently I'm exploring 3d animations with gsap
                  and three.js. When I'm not writing code, you can find me
                  playing chess, fifa or watching AC Milan.
                </p>
                <Group
                  title="Fluent programming languages"
                  headingClass="languages"
                  contentClass="languages-content"
                >
                  Html, Css, Sass, Javascript, React, Vue
                </Group>
              </div>
            </motion.div>

            <motion.div
              variants={homeVariants}
              initial="bottomInitial"
              animate="bottom"
            >
              <ProjectList />
              <div className="footer">
                <Links />
                {showMenuBtn ? (
                  <span
                    onClick={() => dispatch(toggleTheme())}
                    id="mobile-toggle"
                  >
                    {isDark ? <BsFillSunFill /> : <BsFillMoonFill />}
                  </span>
                ) : (
                  <Group title="Inspired by" headingClass="inspo">
                    <a
                      href="http://kadet.dev"
                      target="_blank"
                      rel="noreferrer"
                      id="kadet-link"
                    >
                      kadet.dev <BsArrowUpRight />
                    </a>
                  </Group>
                )}
              </div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  )
}

export const loader = ({ request }: any) => {
  return request.url.split("/").pop()
}

export default Home
