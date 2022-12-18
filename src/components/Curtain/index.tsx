import React, { useContext, useEffect } from "react"
import { changeCurtainState, changeLoadingText } from "../../store/actions"
import { AppContext } from "../../store/store"

const Curtain = () => {
  const {
    state: { curtainState, loadingText },
    dispatch,
  } = useContext(AppContext)

  useEffect(() => {
    setTimeout(() => {
      dispatch(changeCurtainState("welcome"))
    }, 2000)
  }, [])

  if (curtainState === "welcome")
    return (
      <div className="curtain">
        <p className="welcome-text">Welcome to my world</p>
        <button
          onClick={() => {
            dispatch(changeCurtainState("loading"))
            setTimeout(() => {
              dispatch(changeLoadingText("tidying up"))
            }, 2000)
          }}
        >
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
