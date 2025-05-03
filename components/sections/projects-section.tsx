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
      link: "https://chromium.googlesource.com/chromium/src/+/HEAD/AUTHORS#23",
    },
    {
      title: "Newpipe",
      description: "An alternative frontend for various streaming sites.",
      skills: ["Java", "Android"],
      link: "https://github.com/TeamNewPipe/NewPipe/issues/1974",
    },
    {
      title: "AI Email Spam Checker",
      description:
        "Email spam checker which takes an email and runs it against an AI model to determine whether the email is spam or not spam (ham).",
      skills: ["Python"],
      link: "https://github.com/AbduAmeen/C946/tree/main",
    },
  ];

  return (
    <Section id="projects">
      <div className="max-w-7xl mx-auto">
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
      </div>
    </Section>
  );
}
