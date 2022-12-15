import React, { useEffect, useState } from "react"
import { BsMoon, BsSun } from "react-icons/bs"
import { IoMenuOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
import Sidebar from "../Sidebar"

const Header = () => {
  const [isLight, setIsLight] = useState(true)
  const [windowSize, setWindowSize] = useState(0)
  const [showSidebar, setShowSidebar] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth)
    })
  }, [windowSize])

  return (
    <div>
      {showSidebar && <Sidebar onclick={setShowSidebar} />}
      <div>
        <img src="" alt="" />
        <p>Chukwudumebi Orji</p>
      </div>
      <nav>
        <ul>
          {windowSize < 768 ? (
            <li
              onClick={() => {
                setShowSidebar(true)
              }}
            >
              <IoMenuOutline />
            </li>
          ) : (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
              <li
                onClick={() => {
                  setIsLight(!isLight)
                }}
              >
                {isLight ? <BsMoon /> : <BsSun />}
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default Header
