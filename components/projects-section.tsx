import ProjectCard from "@/components/project-card";

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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-blue-400 font-medium mb-4">FEATURED PROJECTS</div>
        <h2 className="text-4xl font-bold mb-12">MY WORK</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              skills={project.skills}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
