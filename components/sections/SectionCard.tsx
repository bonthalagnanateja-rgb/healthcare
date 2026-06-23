"use client"

interface SectionCardProps {
  title: string
  description: string
}

export default function SectionCard({ title, description }: SectionCardProps) {
  return (
    <div className="rounded-3xl bg-card border border-border p-6 shadow-sm">
      <h3 className="font-semibold text-xl mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
