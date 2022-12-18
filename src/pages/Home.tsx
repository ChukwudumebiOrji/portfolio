import React, { useContext } from "react"
import { BsArrowUpRight, BsMoon, BsSun } from "react-icons/bs"
import Curtain from "../components/Curtain"
import Group from "../components/Group"
import Header from "../components/Header"
import Links from "../components/Links"
import ProjectList from "../components/ProjectList"
import { toggleTheme } from "../store/actions"
import { AppContext } from "../store/store"

const Home = () => {
  const {
    state: { showCurtain, showMenuBtn, isDark },
    dispatch,
  } = useContext(AppContext)

  return (
    <div className="home">
      <div>
        {showCurtain && <Curtain />}
        <Header />
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
        <ProjectList />
        <div className="footer">
          <Links />
          {showMenuBtn ? (
            <span onClick={() => dispatch(toggleTheme())}>
              {isDark ? <BsMoon /> : <BsSun />}
            </span>
          ) : (
            <Group title="Inspired by" headingClass="inspo">
              <a href="http://kadet.dev" target="_blank" rel="noreferrer">
                kadet.dev <BsArrowUpRight />
              </a>
            </Group>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
