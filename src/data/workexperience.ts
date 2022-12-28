export interface IWorkExp {
  company: string
  role: string
  duration: string
  tasks: string[]
}

const workExperience: IWorkExp[] = [
  {
    company: "Digicore Ltd",
    role: "Junior Developer",
    duration: "October, 2021 - present",
    tasks: [
      "Used React/Angular to transform Figma prototypes to functional UI",
      "Provided support for the frontend team by working on bugs and other issues assigned by the team lead",
    ],
  },
  {
    company: "Appzone Group",
    role: "Intern",
    duration: "March, 2021 - May, 2021",
    tasks: [
      "Used C# to build a core banking application and learn the principles of Object-Oriented Programming",
      "Took meeting notes and compiled paperwork to support the team whenever necessary",
    ],
  },
]

export default workExperience
