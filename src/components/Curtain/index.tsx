import React, { useContext, useEffect } from "react"
import {
  changeCurtainState,
  changeLoadingText,
  closeCurtain,
} from "../../store/actions"
import { AppContext } from "../../store/store"
import { motion } from "framer-motion"

const loadingDuration = 1.5

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

  textInitial: { scale: 3, opacity: 0 },

  // hello text animation
  helloText: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: 1.5,
    },
  },

  // welcome text animation
  welcomeText: {
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
    transition: {
      ease: [0.75, 0.6, 0.22, 1.0],
      duration: 1,
    },
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
    }, loadingDuration * 1000 * 0.6)
    setTimeout(() => {
      dispatch(closeCurtain())
    }, loadingDuration * 1000)
  }

  useEffect(() => {
    setTimeout(() => {
      dispatch(changeCurtainState("welcome"))
    }, 1500)
  }, [dispatch])

  switch (curtainState) {
    case "welcome":
      return (
        <div className="curtain">
          <motion.p
            variants={curtainVariants}
            initial="textInitial"
            animate="welcomeText"
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
            animate="helloText"
            className="welcome-text"
          >
            Hello
          </motion.p>
        </div>
      )
  }
}

export default Curtain
