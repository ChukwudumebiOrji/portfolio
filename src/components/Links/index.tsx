import React from "react"
import { BsGithub, BsTwitter } from "react-icons/bs"
import { GrMail } from "react-icons/gr"

const Links = () => {
  return (
    <div className="links">
      <p>Want to work with me or say hello?</p>
      <ul>
        <li>
          <a
            href="https://twitter.com/morjman__"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/ChukwudumebiOrji"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
        </li>
        <li>
          <a
            href="mailto:dumebi.orji1@yahoo.com"
            target="_blank"
            rel="noreferrer"
          >
            <GrMail />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Links
