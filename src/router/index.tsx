import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom"
import Home, { loader as HomeLoader } from "../pages/Home"
import NotFound from "../pages/NotFound"
import ProjectDetail, {
  loader as ProjectDetailLoader,
} from "../pages/ProjectDetail"
import Resume, { loader as ResumeLoader } from "../pages/Resume"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="" element={<Navigate to="home" />}></Route>
      <Route path="home" element={<Home />} loader={HomeLoader}></Route>
      <Route path="resume" element={<Resume />} loader={ResumeLoader}></Route>
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
