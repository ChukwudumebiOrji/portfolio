import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import ProjectDetail, {
  loader as ProjectDetailLoader,
} from "../pages/ProjectDetail"
import Resume from "../pages/Resume"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="" element={<Home />}></Route>
      <Route path="resume" element={<Resume />}></Route>
      <Route
        path="project/:name"
        element={<ProjectDetail />}
        loader={ProjectDetailLoader}
      ></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Route>
  )
)

export default router
