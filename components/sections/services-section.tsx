import { Code, Server, Database } from "lucide-react";
import ServiceCard from "@/components/service-card";
import {
  Section,
  SectionCategoryText,
  SectionContent,
  SectionSubtitleText,
  SectionTitle,
} from "../ui/section";
export default function ServicesSection() {
  const services = [
    {
      icon: <Code size={32} className="text-blue-400" />,
      title: "Backend Development",
      description:
        "Building robust APIs and services using Java, Kotlin, and TypeScript. Experienced with Spring, AWS, and microservices architecture.",
    },
    {
      icon: <Server size={32} className="text-blue-400" />,
      title: "Cloud Infrastructure",
      description:
        "Deploying and managing applications on AWS. Experience with containerization using Docker and orchestration with Kubernetes.",
    },
    {
      icon: <Database size={32} className="text-blue-400" />,
      title: "Database Design",
      description:
        "Designing and optimizing database schemas for performance. Experience with PostgreSQL, SQL, and data migration strategies.",
    },
  ];

  return (
    <Section className="relative" id="services">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <SectionCategoryText>WHAT I DO</SectionCategoryText>
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          BACKEND DEVELOPMENT & <br />
          CLOUD SOLUTIONS
        </h2>
        <SectionSubtitleText>
          Specializing in building robust backend systems and APIs that power
          modern applications. From database design to deployment, I create
          scalable solutions that drive business growth.
        </SectionSubtitleText>
      </div>
      <SectionContent className=" md:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </SectionContent>
    </Section>
  );
}
