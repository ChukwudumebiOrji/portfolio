import React from "react"
import { BsFillFileEarmarkPdfFill } from "react-icons/bs"
import { FaGoogleDrive } from "react-icons/fa"
import { useLoaderData } from "react-router-dom"
import CV from "../components/CV"
import Header from "../components/Header"
import Links from "../components/Links"
const resumePdf = require("../assets/Resume.pdf")

const Resume = () => {
  const route = useLoaderData()

  return (
    <div className="resume-container">
      <Header route={route} />
      <div className="resume">
        <div>
          <ul className="download-links">
            <li>
              <a href={resumePdf} download={"Chukwudumebi-Orji-Resume"}>
                <BsFillFileEarmarkPdfFill />
                Download resume (PDF)
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1yQ8sNf4REM41gSk8wqjOn3DnJJHwwiKN/view?usp=share_link"
                target="_blank"
                rel="noreferrer"
              >
                <FaGoogleDrive />
                Download resume (Google drive)
              </a>
            </li>
          </ul>
          <Links />
        </div>
        <CV />
      </div>
    </div>
  )
}

export const loader = ({ request }: any) => {
  return request.url.split("/").pop()
}

export default Resume
