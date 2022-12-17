import React from "react"
import { IoCloseOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
import Links from "../Links"

const Sidebar = ({ onclick }: any) => {
  return (
    <div className="sidebar">
      <IoCloseOutline
        className="close"
        onClick={() => {
          onclick(false)
        }}
      />
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
