import { Badge } from "@/components/ui/badge";

interface Position {
  title: string;
  description: string;
  skills: string[];
}

interface ExperienceItemProps {
  company: string;
  period: string;
  positions: Position[];
}

export default function ExperienceItem({
  company,
  period,
  positions,
}: ExperienceItemProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      <div className="lg:col-span-1">
        <div className="text-xl font-bold text-blue-400">{company}</div>
        <div className="text-gray-400">{period}</div>
      </div>
      <div className="lg:col-span-4">
        {positions.map((position, index) => (
          <div key={index} className={index > 0 ? "mt-8" : ""}>
            <h3 className="text-xl font-bold mb-3">{position.title}</h3>
            <p className="text-gray-300 mb-4">{position.description}</p>
            {position.skills.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {position.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="primary">
                    {skill}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
