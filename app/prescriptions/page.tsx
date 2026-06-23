"use client"

import { useEffect, useState } from "react"
import { Pill, ClipboardList, Truck } from "lucide-react"
import { GlassmorphismNavBar } from "@/components/ui/glassmorphism-navigation"
import SectionCard from "@/components/sections/SectionCard"

const prescriptionCards = [
  {
    title: "E-Prescribing",
    description: "Send prescriptions instantly to the patient’s pharmacy of choice.",
    icon: Pill,
  },
  {
    title: "Order Tracking",
    description: "Track fulfillment status and receive delivery updates in real time.",
    icon: Truck,
  },
  {
    title: "Medication Guidance",
    description: "Provide dosing, interactions, and safety information with every prescription.",
    icon: ClipboardList,
  },
]

export default function PrescriptionsPage() {
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
          { name: "Home", url: "/#home", icon: Pill },
          { name: "Appointments", url: "/appointments", icon: ClipboardList },
          { name: "Records", url: "/records", icon: Truck },
          { name: "Prescriptions", url: "/prescriptions", icon: Pill },
          { name: "Admin", url: "/admin", icon: ClipboardList },
        ]}
        defaultTheme="light"
      />

      <section className="relative overflow-hidden pt-28 pb-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.14),_transparent_45%)]" />
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                Prescriptions
              </p>
              <h1 className="mt-6 text-4xl font-bold sm:text-5xl">
                Speed up medication delivery with digital prescription workflows.
              </h1>
              <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
                Prescribe safely, manage refills, and keep patients informed from clinic to pharmacy.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={handleShowDetails}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90"
                >
                  {showDetails ? "Hide Details" : "Learn More"}
                </button>
                <a href="/admin" className="inline-flex items-center justify-center rounded-full border border-border bg-card px-8 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary">
                  Go to Admin
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] bg-[#fef3c7] dark:bg-slate-900 p-6 shadow-xl shadow-orange-200/20 dark:shadow-orange-500/20 h-[28rem] md:h-[32rem]">
              <img
                src="https://img.freepik.com/premium-photo/medical-prescription-concept-illustration_776674-740433.jpg?w=1200"
                alt="Medical prescription illustration"
                className="h-full w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {showDetails && (
        <section id="details" className="container mx-auto px-4 py-20">
          <div className="max-w-4xl text-center mx-auto mb-12">
            <h2 className="text-3xl font-semibold">Manage prescriptions with transparency and speed</h2>
            <p className="mt-4 text-muted-foreground">
              Improve patient adherence and pharmacy coordination with digital medication workflows.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {prescriptionCards.map((card) => (
              <SectionCard key={card.title} title={card.title} description={card.description} />
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
