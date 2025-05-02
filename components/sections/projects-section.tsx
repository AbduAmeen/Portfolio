import ProjectCard from "@/components/project-card";
import {
  Section,
  SectionCategoryText,
  SectionContent,
  SectionTitle,
} from "../ui/section";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Chromium",
      description:
        "Made contributions to the password manager within the Chrome browser.",
      skills: ["C++"],
      link: "#",
    },
    {
      title: "Newpipe",
      description: "An alternative frontend for various streaming sites.",
      skills: ["Java", "Android"],
      link: "#",
    },
    {
      title: "AI Email Spam Checker",
      description:
        "Email spam checker which takes an email and runs it against an AI model to determine whether the email is spam or not spam (ham).",
      skills: ["Python"],
      link: "#",
    },
  ];

  return (
    <Section className="max-w-7xl mx-auto">
      <SectionCategoryText>FEATURED PROJECTS</SectionCategoryText>
      <SectionTitle>MY WORK</SectionTitle>
      <SectionContent className="lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            skills={project.skills}
            link={project.link}
          />
        ))}
      </SectionContent>
    </Section>
  );
}
