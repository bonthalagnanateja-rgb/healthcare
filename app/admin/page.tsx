"use client"

import { useEffect, useState } from "react"
import { ShieldCheck, Users, BarChart3 } from "lucide-react"
import { GlassmorphismNavBar } from "@/components/ui/glassmorphism-navigation"
import SectionCard from "@/components/sections/SectionCard"

const adminCards = [
  {
    title: "User Management",
    description: "Control accounts, roles, and permissions for every platform user.",
    icon: Users,
  },
  {
    title: "Security Controls",
    description: "Monitor access, audit activity, and keep patient data safe with compliance tools.",
    icon: ShieldCheck,
  },
  {
    title: "Analytics",
    description: "Review usage trends, appointment volume, and service performance in one dashboard.",
    icon: BarChart3,
  },
]

export default function AdminPage() {
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
          { name: "Home", url: "/#home", icon: ShieldCheck },
          { name: "Appointments", url: "/appointments", icon: Users },
          { name: "Records", url: "/records", icon: BarChart3 },
          { name: "Prescriptions", url: "/prescriptions", icon: ShieldCheck },
          { name: "Admin", url: "/admin", icon: ShieldCheck },
        ]}
        defaultTheme="light"
      />

      <section className="relative overflow-hidden pt-28 pb-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(167,139,250,0.14),_transparent_45%)]" />
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                Admin
              </p>
              <h1 className="mt-6 text-4xl font-bold sm:text-5xl">
                Admin tools for secure oversight and healthcare operations.
              </h1>
              <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
                Control user access, monitor activity, and maintain compliance across the care platform.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={handleShowDetails}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90"
                >
                  {showDetails ? "Hide Admin Tools" : "Review Admin Tools"}
                </button>
                <a href="/appointments" className="inline-flex items-center justify-center rounded-full border border-border bg-card px-8 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary">
                  Go to Appointments
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] bg-[#ede9fe] dark:bg-slate-900 p-6 shadow-xl shadow-violet-200/20 dark:shadow-violet-500/20">
              <img
                src="https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1000&q=80"
                alt="Admin dashboard"
                className="h-full w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {showDetails && (
        <section id="details" className="container mx-auto px-4 py-20">
          <div className="max-w-4xl text-center mx-auto mb-12">
            <h2 className="text-3xl font-semibold">Platform control built for administrators</h2>
            <p className="mt-4 text-muted-foreground">
              Manage users, monitor data security, and keep the healthcare experience reliable for everyone.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {adminCards.map((card) => (
              <SectionCard key={card.title} title={card.title} description={card.description} />
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
