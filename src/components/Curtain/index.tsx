import React, { useContext, useEffect } from "react"
import {
  changeCurtainState,
  changeLoadingText,
  closeCurtain,
} from "../../store/actions"
import { AppContext } from "../../store/store"
import { motion } from "framer-motion"

const loadingDuration = 3.5

const curtainVariants: any = {
  // loading bar animation
  loadingBar: {
    width: "90vw",
    transition: { duration: loadingDuration },
    ease: [0.06, 0.21, 0.34, 0.84],
  },
  // pulsing circle animation
  circle: {
    backgroundColor: "#1E1E1E",
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.3,
    },
  },
  // welcome text animation
  textInitial: { scale: 1.2, opacity: 0 },
  text: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: 1.5,
    },
  },
  // curtain exit animation
  curtain: {
    y: "-100%",
  },
}

const Curtain = () => {
  const {
    state: { curtainState, loadingText },
    dispatch,
  } = useContext(AppContext)

  const curtainBtnHandler = () => {
    dispatch(changeCurtainState("loading"))
    setTimeout(() => {
      dispatch(changeLoadingText("tidying up"))
    }, 1000)
    setTimeout(() => {
      dispatch(closeCurtain())
    }, loadingDuration * 1000)
  }

  useEffect(() => {
    setTimeout(() => {
      dispatch(changeCurtainState("welcome"))
    }, 2000)
  }, [dispatch])

  switch (curtainState) {
    case "welcome":
      return (
        <div className="curtain">
          <motion.p
            variants={curtainVariants}
            initial="textInitial"
            animate="text"
            className="welcome-text"
          >
            Welcome to my world
          </motion.p>
          <button onClick={curtainBtnHandler}>
            Check me out{" "}
            <motion.div
              className="circle"
              animate="circle"
              variants={curtainVariants}
            ></motion.div>
          </button>
        </div>
      )

    case "loading":
      return (
        <motion.div
          className="curtain"
          variants={curtainVariants}
          exit="curtain"
        >
          <motion.div
            className="loading-bar"
            animate="loadingBar"
            variants={curtainVariants}
          ></motion.div>
          <p className="loading-text">Gimme a sec, {loadingText}...</p>
        </motion.div>
      )

    default:
      return (
        <div className="curtain">
          <motion.p
            variants={curtainVariants}
            initial="textInitial"
            animate="text"
            className="welcome-text"
          >
            Hello
          </motion.p>
        </div>
      )
  }
}

export default Curtain
