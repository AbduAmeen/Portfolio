import { Badge } from "@/components/ui/badge";
import { Card, CardTitle, CardContent } from "./ui/card";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  variant: "primary" | "secondary";
}

export default function SkillCategory({
  title,
  skills,
  variant,
}: SkillCategoryProps) {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardContent>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <Badge key={index} variant={variant}>
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
