import { useContext } from "react"
import { RouterProvider } from "react-router-dom"
import router from "./router/index"
import { AppContext } from "./store/store"

const App = () => {
  const {
    state: { isDark },
  } = useContext(AppContext)

  return (
    <div className={isDark ? "dark" : "light"}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
