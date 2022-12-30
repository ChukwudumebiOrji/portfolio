export interface IProject {
  title: string
  shortDesc: string
  longDesc: string
  year: string
  languages: string[]
  liveLink: string
}

const projects: IProject[] = [
  {
    title: "Room Landing Page",
    shortDesc: "A landing page for a fictional furniture company",
    year: "2022",
    languages: ["react", "sass"],
    liveLink: "http://roomlandingpage.vercel.app",
    longDesc:
      "I got the design for this application from a frontendmentor challenge. The design really appealed to me so I decided to do it. The focus was on styling the grid and implementing the carousel so I did not bother with responsiveness. Regardless, this is my personal favorite project and I'm really proud of it",
  },
  {
    title: "WhereInTheWorld",
    shortDesc:
      "A website that displays countries all around the world and their information",
    year: "2022",
    languages: ["react", "sass"],
    liveLink: "http://whereintheworld-ochre.vercel.app/",
    longDesc: "",
  },
  {
    title: "Employee Management App",
    shortDesc: "A simple crud application to manage employees in a company",
    year: "2022",
    languages: ["angular", "css"],
    liveLink:
      "https://chukwudumebiorji.github.io/AngularEmployeeManagementApp/",
    longDesc: "",
  },
]

export default projects
