import type { ReactNode } from "react"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-[#0a1530] p-8 rounded-lg border border-blue-900/50 hover:border-blue-600/50 transition-all">
      <div className="w-16 h-16 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}
