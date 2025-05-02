import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  skills: string[];
  link: string;
}

export default function ProjectCard({
  title,
  description,
  skills,
  link,
}: ProjectCardProps) {
  return (
    <Card className="p-6">
      <CardTitle>{title}</CardTitle>
      <CardDescription className="mb-3">{description}</CardDescription>
      <div className="flex justify-between items-center ">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant="primary">
              {skill}
            </Badge>
          ))}
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-blue-400 hover:text-blue-300"
        >
          <Github className="mr-2 h-4 w-4" /> View Project
        </Button>
      </div>
    </Card>

    // <div className="bg-[#0a1530] rounded-lg overflow-hidden group p-6 border border-blue-900/50 hover:border-blue-600/50 transition-all">
    //   <h3 className="text-xl font-bold mb-3">{title}</h3>
    //   <p className="text-gray-300 mb-6">{description}</p>
    //   <div className="flex justify-between items-center">
    //     <div className="flex flex-wrap gap-2">
    //       {skills.map((skill, index) => (
    //         <Badge key={index} className="bg-blue-900/50 text-blue-300">
    //           {skill}
    //         </Badge>
    //       ))}
    //     </div>
    //     <Button
    //       variant="ghost"
    //       size="sm"
    //       className="text-blue-400 hover:text-blue-300"
    //     >
    //       <>
    //         <Github className="mr-2 h-4 w-4" /> View Project
    //       </>
    //     </Button>
    //   </div>
    // </div>
  );
}
