import { AnimatePresence, motion } from "framer-motion"
import { relative } from "path"
import React, { useContext } from "react"
import { BsArrowUpRight, BsMoon, BsSun } from "react-icons/bs"
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
      bounce: 0.6,
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
      bounce: 0.6,
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
            <motion.div
              variants={homeVariants}
              initial="topInitial"
              animate="top"
            >
              <Header route={route} />
              <div className="about">
                <p className="desc">
                  I have been a frontend developer since October, 2021. I create
                  interactive experiences for amazing people using modern web
                  technology. I am currently learning how to write immersive web
                  animations and also exploring the decentralised web.
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
                  <span onClick={() => dispatch(toggleTheme())}>
                    {isDark ? <BsSun /> : <BsMoon />}
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
