"use client"

import { useEffect, useState } from "react"
import { FileText, ShieldCheck, Archive } from "lucide-react"
import { GlassmorphismNavBar } from "@/components/ui/glassmorphism-navigation"
import SectionCard from "@/components/sections/SectionCard"

const recordCards = [
  {
    title: "Secure History",
    description: "Access encrypted patient records, summaries, and past diagnoses instantly.",
    icon: FileText,
  },
  {
    title: "Lab Results",
    description: "Review lab findings and upload reports directly into the patient file.",
    icon: Archive,
  },
  {
    title: "Care Notes",
    description: "Add clinician notes, treatment plans, and referral details with confidence.",
    icon: ShieldCheck,
  },
]

export default function RecordsPage() {
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#details") {
      setShowDetails(true)
    }
  }, [])

  const handleShowDetails = () => {
    setShowDetails((prev) => !prev)

    if (typeof window !== "undefined") {
      const details = document.getElementById("details")
      if (details) details.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <GlassmorphismNavBar
        items={[
          { name: "Home", url: "/#home", icon: FileText },
          { name: "Appointments", url: "/appointments", icon: ShieldCheck },
          { name: "Records", url: "/records", icon: FileText },
          { name: "Prescriptions", url: "/prescriptions", icon: Archive },
          { name: "Admin", url: "/admin", icon: ShieldCheck },
        ]}
        defaultTheme="light"
      />

      <section className="relative overflow-hidden pt-28 pb-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.14),_transparent_45%)]" />
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                Records
              </p>
              <h1 className="mt-6 text-4xl font-bold sm:text-5xl">
                Centralized medical records for clear clinician collaboration.
              </h1>
              <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
                Keep patient histories up to date, share secure files, and review clinical progress anytime.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={handleShowDetails}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90"
                >
                  {showDetails ? "Hide Records" : "View Records"}
                </button>
                <a href="/prescriptions" className="inline-flex items-center justify-center rounded-full border border-border bg-card px-8 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary">
                  Go to Prescriptions
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] bg-[#dbeafe] dark:bg-slate-900 p-6 shadow-xl shadow-sky-200/20 dark:shadow-sky-500/20 h-[28rem] md:h-[32rem]">
              <img
                src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1200&q=80"
                alt="Medical record form on clipboard"
                className="h-full w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {showDetails && (
        <section id="details" className="container mx-auto px-4 py-20">
          <div className="max-w-4xl text-center mx-auto mb-12">
            <h2 className="text-3xl font-semibold">Patient records built to support your care team</h2>
            <p className="mt-4 text-muted-foreground">
              Share documentation, maintain compliance, and give every practitioner the information they need.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {recordCards.map((card) => (
              <SectionCard key={card.title} title={card.title} description={card.description} />
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
