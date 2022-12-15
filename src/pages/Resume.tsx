import React from "react"
import { BsFillFileEarmarkPdfFill } from "react-icons/bs"
import { FaGoogleDrive } from "react-icons/fa"
import CV from "../components/CV"
import Header from "../components/Header"
import Links from "../components/Links"

const Resume = () => {
  return (
    <div>
      <Header />
      <div>
        <div>
          <ul>
            <li>
              <a href="">
                <BsFillFileEarmarkPdfFill />
                Download resume (PDF)
              </a>
            </li>
            <li>
              <a href="" download>
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

export default Resume
