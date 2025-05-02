import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Software Development Engineer 2",
    company: "Amazon",
    period: "Early 2025 - Current",
    description: "",
    skills: [],
  },
  {
    title: "Software Development Engineer",
    company: "Amazon",
    period: "Fall 2022 - Early 2025",
    description:
      "Worked on the implementation of Protected Audience API (Cookie-less tracking) in Chrome browsers for all Amazon shoppers. This project was built using Kotlin and a Spring based internal framework. The application was deployed on the AWS cloud. Developed the Universal Targeting API for managing targeting settings for advertisers. This project was built using Java and an internal framework built on Spring. The application was deployed on the AWS cloud.",
    skills: ["Kotlin", "Java", "Spring", "AWS"],
  },
  {
    title: "Backend Developer",
    company: "Gitcharger",
    period: "2022 - Early 2023",
    description:
      "Worked on the development of the API which is used for the mobile applications and web platform. The API searches for EV chargers in an area. The API also facilitates user creation. The API was built with Nest.js and Typescript. Assisted in migrating their data from CSV files to a Postgres database. The migration was done using SQL and a Go CLI tool.",
    skills: ["Nest.js", "TypeScript", "PostgreSQL", "SQL", "Go"],
  },
  {
    title: "SDE Intern",
    company: "Amazon",
    period: "Fall 2021 - Fall 2022",
    description: "Built a leaderboard for an internal game that connected to their oauth2 system.",
    skills: ["OAuth2"],
  },
]

export default function ExperienceTimeline() {
  return (
    <div className="space-y-8">
      {experiences.map((experience, index) => (
        <Card
          key={index}
          className="border-l-4 border-l-emerald-500 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm"
        >
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <CardTitle className="text-xl text-emerald-800">{experience.title}</CardTitle>
              <CardDescription className="text-emerald-600 font-medium">{experience.period}</CardDescription>
            </div>
            <CardDescription className="text-lg font-semibold text-emerald-700">{experience.company}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-emerald-900 mb-4">{experience.description}</p>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill, skillIndex) => (
                <Badge key={skillIndex} className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
