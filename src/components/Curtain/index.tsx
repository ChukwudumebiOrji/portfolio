import React, { useContext, useEffect } from "react"
import {
  changeCurtainState,
  changeLoadingText,
  closeCurtain,
} from "../../store/actions"
import { AppContext } from "../../store/store"

const Curtain = () => {
  const {
    state: { curtainState, loadingText },
    dispatch,
  } = useContext(AppContext)

  const curtainBtnHandler = () => {
    dispatch(changeCurtainState("loading"))
    setTimeout(() => {
      dispatch(changeLoadingText("tidying up"))
    }, 2000)
    setTimeout(() => {
      dispatch(closeCurtain())
    }, 4000)
  }

  useEffect(() => {
    setTimeout(() => {
      dispatch(changeCurtainState("welcome"))
    }, 2000)
  }, [dispatch])

  if (curtainState === "welcome")
    return (
      <div className="curtain">
        <p className="welcome-text">Welcome to my world</p>
        <button onClick={curtainBtnHandler}>
          Check me out <div className="circle"></div>
        </button>
      </div>
    )

  if (curtainState === "loading")
    return (
      <div className="curtain">
        <div className="loading-bar"></div>
        <p className="loading-text">Gimme a sec, {loadingText}...</p>
      </div>
    )

  return (
    <div className="curtain">
      <p className="welcome-text">Hello</p>
    </div>
  )
}

export default Curtain
