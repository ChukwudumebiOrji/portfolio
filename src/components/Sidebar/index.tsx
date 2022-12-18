import React, { useContext } from "react"
import { IoCloseOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
import { closeSidebar } from "../../store/actions"
import { AppContext } from "../../store/store"
import Links from "../Links"

const Sidebar = () => {
  const { dispatch } = useContext(AppContext)

  return (
    <div className="sidebar">
      <span className="close">
        <IoCloseOutline
          onClick={() => {
            dispatch(closeSidebar())
          }}
        />
      </span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
      <Links />
    </div>
  )
}

export default Sidebar
