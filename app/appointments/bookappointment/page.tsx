"use client"

import { FormEvent, useState } from "react"
import Link from "next/link"
import { Calendar, ClipboardList } from "lucide-react"
import { GlassmorphismNavBar } from "@/components/ui/glassmorphism-navigation"

export default function BookAppointmentPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    visitType: "Virtual",
    reason: "",
  })

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <GlassmorphismNavBar
        items={[
          { name: "Home", url: "/#home", icon: Calendar },
          { name: "Appointments", url: "/appointments", icon: Calendar },
          { name: "Records", url: "/records", icon: ClipboardList },
        ]}
        defaultTheme="light"
      />

      <section className="relative overflow-hidden pt-28 pb-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.15),_transparent_45%)]" />
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-[2rem] bg-card border border-border p-10 shadow-xl shadow-teal-200/20 dark:shadow-teal-500/20">
            <div className="mb-8 text-center">
              <p className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                Book Appointment
              </p>
              <h1 className="mt-6 text-4xl font-bold sm:text-5xl">Schedule your visit with confidence.</h1>
              <p className="mt-4 text-muted-foreground">
                Fill in the details below to request a new appointment. A care coordinator will confirm your booking.
              </p>
            </div>

            {submitted ? (
              <div className="rounded-3xl bg-emerald-50 border border-emerald-200 p-8 text-emerald-900">
                <h2 className="text-2xl font-semibold">Booking request submitted!</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  Thank you, {formData.name || "patient"}. We will review your appointment request and follow up via email.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-between">
                  <Link href="/appointments" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90">
                    Return to Appointments
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2 text-sm">
                    <span>Name</span>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(event) => handleChange("name", event.target.value)}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                      required
                    />
                  </label>
                  <label className="space-y-2 text-sm">
                    <span>Email</span>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(event) => handleChange("email", event.target.value)}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                      required
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2 text-sm">
                    <span>Phone</span>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(event) => handleChange("phone", event.target.value)}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                      required
                    />
                  </label>
                  <label className="space-y-2 text-sm">
                    <span>Preferred Date</span>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(event) => handleChange("date", event.target.value)}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                      required
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2 text-sm">
                    <span>Visit Type</span>
                    <select
                      value={formData.visitType}
                      onChange={(event) => handleChange("visitType", event.target.value)}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                    >
                      <option value="Virtual">Virtual</option>
                      <option value="In-Person">In-Person</option>
                    </select>
                  </label>
                  <label className="space-y-2 text-sm">
                    <span>Reason for Visit</span>
                    <textarea
                      value={formData.reason}
                      onChange={(event) => handleChange("reason", event.target.value)}
                      rows={4}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                      required
                    />
                  </label>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <Link href="/appointments" className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary">
                    Back to Appointments
                  </Link>
                  <button type="submit" className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90">
                    Submit Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
