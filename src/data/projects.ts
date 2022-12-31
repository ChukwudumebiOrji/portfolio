import { FaGoogleDrive } from "react-icons/fa"
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
    title: "WhereInTheWorld",
    shortDesc:
      "A website that displays countries all around the world and their information",
    year: "2022",
    languages: ["react", "sass", "typescript", "redux"],
    liveLink: "http://whereintheworld-ochre.vercel.app/",
    longDesc:
      "This application was the first time I ever used React with Redux and I remember running into a lot of errors. Regardless, it was fun to build and it really helped me understand more about React. The design was gotten from a frontendmentor challenge and I really spent time understanding how to properly implement the countries api.",
  },
  {
    title: "Room Landing Page",
    shortDesc: "A landing page for a fictional furniture company",
    year: "2022",
    languages: ["react", "sass"],
    liveLink: "http://roomlandingpage.vercel.app",
    longDesc:
      "I got the design for this application from a frontendmentor challenge. The design really appealed to me so I decided to attempt it. The focus was on styling the grid and implementing the carousel so I did not bother with responsiveness. Regardless, this is my personal favorite project and I'm really proud of it",
  },

  {
    title: "Employee Management App",
    shortDesc: "A simple crud application to manage employees in a company",
    year: "2022",
    languages: ["angular", "css"],
    liveLink:
      "https://chukwudumebiorji.github.io/AngularEmployeeManagementApp/",
    longDesc:
      "This project was a battle. I was applying for a job as a junior developer in an organization and their frontend team used Angular(at the time I had only ever used React and Vue). I had a week before the application closed so I spent the first three days going over the basics of Angular with a youtube tutorial, before deciding to build an application that showcased my understanding of the language. For a basic crud application, it took me multiple days and plenty of googling before I finally did get it up and running, but I did. And most importantly, I got the job :)",
  },
]

export default projects
