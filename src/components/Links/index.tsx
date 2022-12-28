import React from "react"
import { AiFillGithub, AiFillTwitterCircle, AiFillMail } from "react-icons/ai"

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
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/ChukwudumebiOrji"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillTwitterCircle />
          </a>
        </li>
        <li>
          <a
            href="mailto:dumebi.orji1@yahoo.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillMail />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Links
