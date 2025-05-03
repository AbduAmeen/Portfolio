"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Card, CardDescription, CardTitle } from "./ui/card";

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
          onClick={() => window.open(link)}
        >
          <Github className="mr-2 h-4 w-4" /> View Project
        </Button>
      </div>
    </Card>
  );
}
