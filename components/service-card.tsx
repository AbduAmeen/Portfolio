import type { ReactNode } from "react";
import { Card, CardDescription, CardTitle } from "./ui/card";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <Card className="bg-[#0a1530]">
      <div className="w-16 h-16 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <CardTitle>{title}</CardTitle>
      <CardDescription className="text-base text-gray-400">
        {description}
      </CardDescription>
    </Card>
  );
}
