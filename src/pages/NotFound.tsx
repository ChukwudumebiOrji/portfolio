import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { closeCurtain } from "../store/actions"
import { AppContext } from "../store/store"

const NotFound = () => {
  const nav = useNavigate()
  const { dispatch } = useContext(AppContext)

  const btnHandler = () => {
    dispatch(closeCurtain())
    nav("/home")
  }

  return (
    <div className="not-found">
      <div className="hit-the-floor">404</div>
      <p>There's nothing to see here. Maybe you have the wrong link?</p>
      <button onClick={btnHandler}>home page</button>
    </div>
  )
}

export default NotFound
