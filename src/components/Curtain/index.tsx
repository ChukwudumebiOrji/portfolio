import React, { useEffect, useState } from "react"

const Curtain = () => {
  const [curtainState, setCurtainState] = useState("hello")
  const [loadingText, setLoadingText] = useState("fixing stuff")

  useEffect(() => {
    setTimeout(() => setCurtainState("welcome"), 3000)
  }, [])

  const openCurtain = () => {
    setCurtainState("loading")
    setTimeout(() => setLoadingText("tidying up"), 2000)
  }

  if (curtainState === "welcome")
    return (
      <div className="curtain">
        <p className="welcome-text">Welcome to my world</p>
        <button onClick={openCurtain}>
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
