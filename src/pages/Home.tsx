import React from "react"
import { BsArrowUpRight } from "react-icons/bs"
import Group from "../components/Group"
import Header from "../components/Header"
import Links from "../components/Links"
import ProjectList from "../components/ProjectList"

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <p>
          I have been a frontend developer since October, 2021. I create
          interactive experiences for amazing people using modern web
          technology. I am currently learning how to write immersive web
          animations and also exploring the decentralised web.
        </p>
        <Group title="Fluent programming languages">
          Html, Css, Sass, Javascript, React, Vue
        </Group>
      </div>
      <ProjectList />
      <div>
        <Links />
        <div>
          <h4>Inspired by</h4>
          <a href="http://kadet.dev" target="_blank" rel="noreferrer">
            kadet.dev <BsArrowUpRight />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
