import React, { useEffect, useState } from "react"
import { BsMoon, BsSun } from "react-icons/bs"
import { IoMenuOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
import Sidebar from "../Sidebar"
import img from "../../assets/me.png"

const Header = () => {
  const [isLight, setIsLight] = useState(true)
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const [showSidebar, setShowSidebar] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth)
    })
  }, [windowSize])

  return (
    <div className="header">
      {showSidebar && <Sidebar onclick={setShowSidebar} />}
      <div>
        <p className="name">Hi there, I'm Chukwudumebi Orji</p>
        <img src={img} alt="" className="profile-img" />
      </div>
      <nav>
        <ul>
          {windowSize < 768 ? (
            <li
              onClick={() => {
                setShowSidebar(true)
              }}
            >
              <IoMenuOutline className="toggle" />
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
