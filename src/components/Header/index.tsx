import { useContext, useEffect } from "react"
import { BsMoon, BsSun } from "react-icons/bs"
import { IoMenuOutline } from "react-icons/io5"
import { Link, useNavigate } from "react-router-dom"
import Sidebar from "../Sidebar"
import img from "../../assets/me.png"
import { AppContext } from "../../store/store"
import {
  closeCurtain,
  openSidebar,
  resizeWindow,
  toggleTheme,
} from "../../store/actions"

const Header = () => {
  const {
    state: { showMenuBtn, isDark, showSidebar },
    dispatch,
  } = useContext(AppContext)
  const nav = useNavigate()

  const linkHandler = (path: string) => {
    dispatch(closeCurtain())
    nav(path)
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      dispatch(resizeWindow())
    })
  }, [window.innerWidth, dispatch])

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
              <li
                onClick={(e) => {
                  linkHandler("/")
                }}
                className="routerlink"
              >
                Home
              </li>
              <li
                onClick={(e) => {
                  linkHandler("/resume")
                }}
                className="routerlink"
              >
                Resume
              </li>
              <li onClick={() => dispatch(toggleTheme())}>
                {isDark ? <BsSun /> : <BsMoon />}
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default Header
