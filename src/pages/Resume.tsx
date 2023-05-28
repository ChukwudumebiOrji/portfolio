import { motion } from "framer-motion"
import React from "react"
import { BsFillFileEarmarkPdfFill } from "react-icons/bs"
import { FaGoogleDrive } from "react-icons/fa"
import { useLoaderData } from "react-router-dom"
import CV from "../components/CV"
import Header from "../components/Header"
import Links from "../components/Links"
const resumePdf = require("../assets/Resume.pdf")

const resumeVariants = {
  leftInitial: { x: "-50vw", opacity: 0 },
  left: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      type: "spring",
      bounce: 0.4,
    },
  },
  rightInitial: { x: "50vw", opacity: 0 },
  right: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      type: "spring",
      bounce: 0.4,
    },
  },
}

const Resume = () => {
  const route = useLoaderData()

  return (
    <div className="resume-container">
      <Header route={route} />
      <div className="resume">
        <motion.div
          variants={resumeVariants}
          initial="leftInitial"
          animate="left"
        >
          <ul className="download-links">
            <li>
              <a href={resumePdf} download={"Chukwudumebi-Orji-Resume"}>
                <BsFillFileEarmarkPdfFill />
                Download resume (PDF)
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/12zpgvyPhbk7PIzDge-rOnX34Tny6_XMY/view"
                target="_blank"
                rel="noreferrer"
              >
                <FaGoogleDrive />
                Download resume (Google drive)
              </a>
            </li>
          </ul>
          <Links />
        </motion.div>
        <motion.div
          variants={resumeVariants}
          initial="rightInitial"
          animate="right"
        >
          <CV />
        </motion.div>
      </div>
    </div>
  )
}

export const loader = ({ request }: any) => {
  return request.url.split("/").pop()
}

export default Resume
