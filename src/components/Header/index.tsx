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

  const activeLinkHandler = (e: any) => {
    const target = e.target as HTMLLinkElement
    const parent = target.parentElement?.parentElement
    parent
      ?.querySelectorAll(".routerlink")
      .forEach((el) => el.classList.remove("highlighted"))
    target.classList.add("highlighted")
  }

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
                <Link
                  to="/"
                  className="highlighted routerlink"
                  onMouseEnter={activeLinkHandler}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/resume"
                  className="routerlink"
                  onMouseEnter={activeLinkHandler}
                >
                  Resume
                </Link>
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
