"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Calendar, ClipboardList, Clock4 } from "lucide-react"
import { GlassmorphismNavBar } from "@/components/ui/glassmorphism-navigation"
import SectionCard from "@/components/sections/SectionCard"

const appointmentCards = [
  {
    title: "Book a Visit",
    description: "Choose your specialist, pick a date, and confirm your virtual appointment with ease.",
    icon: Calendar,
  },
  {
    title: "Smart Reminders",
    description: "Receive timely reminders and alerts for upcoming consultations and follow-ups.",
    icon: Clock4,
  },
  {
    title: "Personalized Care",
    description: "Share symptoms and medical history to get matched with the right provider.",
    icon: ClipboardList,
  },
]

const appointmentPanels = {
  workflow: {
    title: "Appointment Workflow",
    description: "Step through the appointment process from booking to consultation.",
    tasks: [
      "Select a provider and specialty.",
      "Pick a date, time, and appointment type.",
      "Confirm the appointment and receive notification.",
      "Join the consultation when scheduled.",
    ],
  },
  records: {
    title: "Appointment Records",
    description: "View and manage the documentation created during appointments.",
    tasks: [
      "Capture visit summaries and clinician observations.",
      "Attach lab reports, prescriptions, and referral notes.",
      "Maintain a centralized patient history record.",
      "Share visit results securely with care team members.",
    ],
  },
  followup: {
    title: "Follow-Up Actions",
    description: "Track the next steps after each appointment for better patient care.",
    tasks: [
      "Send post-visit instructions and medication reminders.",
      "Schedule follow-up consultations or tests.",
      "Update the care plan based on outcomes.",
      "Collect feedback and adjust the patient journey.",
    ],
  },
} as const

const appointmentRecords = [
  {
    date: "2026-06-20",
    provider: "Dr. Mehta",
    type: "Follow-up Consultation",
    summary: "Reviewed medication and adjusted dosage based on symptoms.",
  },
  {
    date: "2026-05-28",
    provider: "Dr. Joshi",
    type: "Routine Check-up",
    summary: "Completed annual wellness exam and ordered lab tests.",
  },
  {
    date: "2026-04-10",
    provider: "Dr. Rao",
    type: "Virtual Consultation",
    summary: "Provided prescription refill and e-prescription to pharmacy.",
  },
]

type AppointmentPanelKey = keyof typeof appointmentPanels

export default function AppointmentsPage() {
  const router = useRouter()
  const [activePanel, setActivePanel] = useState<AppointmentPanelKey | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#details") {
      setActivePanel("workflow")
    }
  }, [])

  const handleSelectPanel = (panel: AppointmentPanelKey) => {
    setActivePanel((current) => (current === panel ? null : panel))

    if (typeof window !== "undefined") {
      const details = document.getElementById("details")
      if (details) details.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleBookAppointment = () => {
    router.push("/appointments/bookappointment")
  }


  return (
    <main className="min-h-screen bg-background text-foreground">
      <GlassmorphismNavBar
        items={[
          { name: "Home", url: "/#home", icon: Calendar },
          { name: "Appointments", url: "/appointments", icon: Calendar },
          { name: "Records", url: "/records", icon: ClipboardList },
          { name: "Prescriptions", url: "/prescriptions", icon: Clock4 },
          { name: "Admin", url: "/admin", icon: ClipboardList },
        ]}
        defaultTheme="light"
      />

      <section className="relative overflow-hidden pt-28 pb-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.15),_transparent_45%)]" />
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                Appointments
              </p>
              <h1 className="mt-6 text-4xl font-bold sm:text-5xl">
                Secure, fast appointment scheduling for every patient.
              </h1>
              <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
                Manage bookings, choose remote or in-person consultations, and keep your care timeline organized in one place.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <button
                  type="button"
                  onClick={() => handleSelectPanel("workflow")}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90"
                >
                  {activePanel === "workflow" ? "Hide Workflow" : "View Workflow"}
                </button>
                <button
                  type="button"
                  onClick={handleBookAppointment}
                  className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3 text-sm font-semibold text-secondary-foreground shadow-lg shadow-secondary/20 transition hover:bg-secondary/90"
                >
                  Book Appointment
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectPanel("records")}
                  className="inline-flex items-center justify-center rounded-full border border-border bg-card px-8 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
                >
                  {activePanel === "records" ? "Hide Records" : "View Records"}
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectPanel("followup")}
                  className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition hover:bg-accent/90"
                >
                  {activePanel === "followup" ? "Hide Follow-Up" : "Follow-Up Actions"}
                </button>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] bg-[#d8f5ee] dark:bg-slate-900 p-6 shadow-xl shadow-teal-200/20 dark:shadow-teal-500/20">
              <img
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1000&q=80"
                alt="Appointment scheduling"
                className="h-full w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {activePanel && (
        <section id="details" className="container mx-auto px-4 py-20">
          <div className="max-w-4xl text-center mx-auto mb-12">
            <h2 className="text-3xl font-semibold">{appointmentPanels[activePanel].title}</h2>
            <p className="mt-4 text-muted-foreground">{appointmentPanels[activePanel].description}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            <div className="rounded-3xl bg-card border border-border p-6 shadow-sm">
              <h3 className="font-semibold text-xl mb-4">Tasks completed for this action</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {appointmentPanels[activePanel].tasks.map((task) => (
                  <li key={task} className="rounded-2xl bg-background/80 p-4 ring-1 ring-border">
                    {task}
                  </li>
                ))}
              </ul>
            </div>
            {activePanel === "records" ? (
              <div className="rounded-3xl bg-card border border-border p-6 shadow-sm">
                <h3 className="font-semibold text-xl mb-4">Recent appointment records</h3>
                <div className="space-y-4">
                  {appointmentRecords.map((record) => (
                    <div key={record.date} className="rounded-3xl bg-background/80 p-4 ring-1 ring-border">
                      <p className="text-sm text-muted-foreground">{record.date} · {record.type}</p>
                      <h4 className="mt-2 font-semibold">{record.provider}</h4>
                      <p className="mt-2 text-sm text-muted-foreground">{record.summary}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="rounded-3xl bg-card border border-border p-6 shadow-sm">
                <h3 className="font-semibold text-xl mb-4">Related appointment cards</h3>
                <div className="grid gap-4">
                  {appointmentCards.map((card) => (
                    <SectionCard key={card.title} title={card.title} description={card.description} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </main>
  )
}
