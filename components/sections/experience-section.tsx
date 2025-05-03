import ExperienceItem from "@/components/experience-item";
import { Section, SectionCategoryText, SectionTitle } from "../ui/section";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Amazon",
      period: "Fall 2022 - Current",
      positions: [
        {
          title: "Software Development Engineer 2",
          description:
            "Currently working as an SDE 2 at Amazon, focusing on backend development and cloud infrastructure. Building ETL pipelines for geographic data.",
          skills: ["Kotlin", "Java", "Spring", "AWS", "Python", "TypeScript"],
        },
        {
          title: "Software Development Engineer",
          description:
            "Worked on the implementation of Protected Audience API (Cookie-less tracking) in Chrome browsers for all Amazon shoppers. This project was built using Kotlin and a Spring based internal framework. The application was deployed on the AWS cloud. Developed the Universal Targeting API for managing targeting settings for advertisers. This project was built using Java and an internal framework built on Spring. The application was deployed on the AWS cloud.",
          skills: ["Kotlin", "Java", "Spring", "AWS", "TypeScript"],
        },
      ],
    },
    {
      company: "Gitcharger",
      period: "2022 - Early 2023",
      positions: [
        {
          title: "Backend Developer",
          description:
            "Worked on the development of the API which is used for the mobile applications and web platform. The API searches for EV chargers in an area. The API also facilitates user creation. The API was built with Nest.js and Typescript. Assisted in migrating their data from CSV files to a Postgres database. The migration was done using SQL and a Go CLI tool.",
          skills: ["Nest.js", "TypeScript", "PostgreSQL", "SQL", "Go"],
        },
      ],
    },
    {
      company: "Amazon",
      period: "Fall 2021 - Fall 2022",
      positions: [
        {
          title: "SDE Intern",
          description:
            "Built a leaderboard for an internal game that connected to their oauth2 system.",
          skills: ["OAuth2"],
        },
      ],
    },
  ];

  return (
    <Section id="experience">
      <div className="max-w-7xl mx-auto">
        <SectionCategoryText>WORK EXPERIENCE</SectionCategoryText>
        <SectionTitle>WHERE I'VE WORKED</SectionTitle>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={index}
              company={experience.company}
              period={experience.period}
              positions={experience.positions}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
