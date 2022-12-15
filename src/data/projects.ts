export interface IProject {
  title: string
  shortDesc: string
  longDesc: string
  year: string
  languages: string[]
  liveLink: string
  repoLink: string
}

const projects: IProject[] = [
  {
    title: "Room Landing Page",
    shortDesc: "A landing page for a fictional furniture company",
    year: "2022",
    languages: ["react", "sass"],
    liveLink: "http://roomlandingpage.vercel.app",
    longDesc: "",
    repoLink: "https://github.com/ChukwudumebiOrji/RoomLandingPage/",
  },
  {
    title: "WhereInTheWorld",
    shortDesc:
      "A simple website that displays countries all around the world and their information",
    year: "2022",
    languages: ["react", "sass"],
    liveLink: "http://whereintheworld-ochre.vercel.app/",
    longDesc: "",
    repoLink: "https://github.com/ChukwudumebiOrji/whereintheworld",
  },
  {
    title: "Employee Management App",
    shortDesc: "A simple crud app to manage employees in a company",
    year: "2022",
    languages: ["angular", "css"],
    liveLink:
      "https://chukwudumebiorji.github.io/AngularEmployeeManagementApp/",
    longDesc: "",
    repoLink:
      "https://github.com/ChukwudumebiOrji/AngularEmployeeManagementApp",
  },
]

export default projects
