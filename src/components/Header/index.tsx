import { useContext, useEffect } from "react"
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs"
import { FiMenu } from "react-icons/fi"
import { useNavigate } from "react-router-dom"
import Sidebar from "../Sidebar"
import img from "../../assets/me.png"
import { AppContext } from "../../store/store"
import {
  closeCurtain,
  openSidebar,
  resizeWindow,
  toggleTheme,
} from "../../store/actions"

const Header = ({ route }: any) => {
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
  }, [dispatch])

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
              <FiMenu className="toggle" />
            </li>
          ) : (
            <>
              <li
                onClick={(e) => {
                  linkHandler("/")
                }}
                className={
                  route === "home" ? "routerlink highlighted" : "routerlink"
                }
              >
                Home
              </li>
              <li
                onClick={(e) => {
                  linkHandler("/resume")
                }}
                className={
                  route === "resume" ? "routerlink highlighted" : "routerlink"
                }
              >
                Resume
              </li>
              <li onClick={() => dispatch(toggleTheme())}>
                {isDark ? <BsFillMoonFill /> : <BsFillSunFill />}
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default Header
