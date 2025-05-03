import SkillCategory from "@/components/skill-category";
import {
  Section,
  SectionCategoryText,
  SectionContent,
  SectionTitle,
} from "../ui/section";

export default function SkillsSection() {
  const skills = {
    languages: [
      "Java",
      "Kotlin",
      "SQL",
      "JavaScript",
      "Python",
      "C++",
      "TypeScript",
      "Go",
    ],
    technologies: [
      "Visual Studio",
      "IntelliJ",
      "AWS",
      "Visual Studio Code",
      "Android Studio",
      "Docker",
      "Kubernetes",
      "Postgres",
      "Sqlite",
      "Spring",
      "Next.js",
    ],
  };

  return (
    <Section>
      <div className="max-w-7xl mx-auto">
        <SectionCategoryText>TECHNICAL SKILLS</SectionCategoryText>
        <SectionTitle>MY TOOLKIT</SectionTitle>
        <SectionContent>
          <SkillCategory
            title="Programming Languages"
            skills={skills.languages}
            variant="primary"
          />
          <SkillCategory
            title="Technologies & Tools"
            skills={skills.technologies}
            variant="primary"
          />
        </SectionContent>
      </div>
    </Section>
  );
}
