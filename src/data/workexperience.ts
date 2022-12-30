export interface IWorkExp {
  company: string
  role: string
  duration: string
  tasks: string[]
}

const workExperience: IWorkExp[] = [
  {
    company: "HNG Internship",
    role: "Frontend Intern",
    duration: "October, 2022 - December, 2022",
    tasks: [
      "Used React to build the login page, settings page and profile page for my team's project. Also implemented the authentication and user endpoints.",
      "Worked on two individual projects to achieve promotion.",
      "Finished as a finalist",
    ],
  },
  {
    company: "Digicore Ltd",
    role: "Junior Developer",
    duration: "October, 2022 - present",
    tasks: [
      "Used React/Angular to transform Figma prototypes to functional UI",
      "Provided support for the frontend team by working on bugs and other issues assigned by the team lead",
    ],
  },
  {
    company: "Appzone Group",
    role: "Intern",
    duration: "March, 2022 - May, 2022",
    tasks: [
      "Used C# to build a core banking application and learn the principles of Object-Oriented Programming",
      "Took meeting notes and compiled paperwork to support the team whenever necessary",
    ],
  },
]

export default workExperience
