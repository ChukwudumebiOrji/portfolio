import React, { useContext, useEffect, useState } from "react"
import { BsMoon, BsSun } from "react-icons/bs"
import { IoMenuOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
import Sidebar from "../Sidebar"
import img from "../../assets/me.png"
import { AppContext } from "../../store/store"
import { openSidebar, toggleTheme } from "../../store/actions"

const Header = () => {
  const {
    state: { showMenuBtn, isDark, showSidebar },
    dispatch,
  } = useContext(AppContext)

  return (
    <div className="header">
      {showSidebar && <Sidebar />}
      <div>
        <p className="name">Hi there, I'm Chukwudumebi Orji</p>
        <img src={img} alt="" className="profile-img" />
      </div>
      <nav>
        <ul>
          {showMenuBtn ? (
            <li onClick={() => dispatch(openSidebar())}>
              <IoMenuOutline className="toggle" />
            </li>
          ) : (
            <>
              <li>
                <Link to="/" className="highlighted routerlink">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/resume" className="routerlink">
                  Resume
                </Link>
              </li>
              <li onClick={() => dispatch(toggleTheme())}>
                {isDark ? <BsMoon /> : <BsSun />}
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default Header
