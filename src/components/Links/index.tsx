import React from "react"
import { BsGithub, BsTwitter } from "react-icons/bs"
import { GrMail } from "react-icons/gr"

const Links = () => {
  return (
    <div>
      <p>Want to work with me or say hello?</p>
      <ul>
        <li>
          <BsTwitter />
        </li>
        <li>
          <BsGithub />
        </li>
        <li>
          <GrMail />
        </li>
      </ul>
    </div>
  )
}

export default Links
