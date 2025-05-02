import EducationCard from "@/components/education-card";
import { Section, SectionCategoryText, SectionTitle } from "../ui/section";
import { SectionContent } from "../ui/section";

export default function EducationSection() {
  const educationItems = [
    {
      school: "Western Governors University",
      location: "Millcreek, UT",
      degree: "B.S.E. in Computer Science",
      period: "Feb 2024 – Nov 2024",
      notes: "",
      coursework:
        "Artificial Intelligence, Operating Systems, Databases, Algorithms, Programming Languages, Comp. Architecture, Software Design, IT Leadership, Data Management",
    },
    {
      school: "Portland Community College",
      location: "Portland, OR",
      degree: "AS-T. in Computer Science",
      period: "Spring 2021 – Fall 2023",
      notes: "Transferred in 2024 to WGU before completion. In-major GPA: 3.8",
      coursework: "Databases, Algorithms, Programming Languages, Calculus I",
    },
  ];

  return (
    <Section className="bg-[#060c24] max-w-7xl mx-auto">
      <SectionCategoryText>EDUCATION</SectionCategoryText>
      <SectionTitle>ACADEMIC BACKGROUND</SectionTitle>
      <SectionContent className="lg:grid-cols-2">
        {educationItems.map((item, index) => (
          <EducationCard
            key={index}
            school={item.school}
            location={item.location}
            degree={item.degree}
            period={item.period}
            notes={item.notes}
            coursework={item.coursework}
          />
        ))}
      </SectionContent>
    </Section>
  );
}
