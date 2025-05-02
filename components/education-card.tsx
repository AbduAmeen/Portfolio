import { Card, CardTitle } from "./ui/card";

interface EducationCardProps {
  school: string;
  location: string;
  degree: string;
  period: string;
  notes: string;
  coursework: string;
}

export default function EducationCard({
  school,
  location,
  degree,
  period,
  notes,
  coursework,
}: EducationCardProps) {
  return (
    <Card>
      <div className="flex justify-between items-start mb-4">
        <div>
          <CardTitle className="mb-0">{school}</CardTitle>
          <p className="text-gray-400">{location}</p>
        </div>
        <div className="text-right">
          <p className="text-blue-400 font-medium">{period}</p>
        </div>
      </div>
      <p className="text-lg font-medium mb-4">{degree}</p>
      {notes && <p className="text-gray-300 mb-4">{notes}</p>}
      <div>
        <p className="text-sm font-medium text-blue-400 mb-2">Coursework:</p>
        <p className="text-gray-300">{coursework}</p>
      </div>
    </Card>
  );
}
