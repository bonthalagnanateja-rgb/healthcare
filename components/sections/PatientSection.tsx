"use client"

import { motion } from "framer-motion"
import SectionCard from "./SectionCard"

export default function PatientSection() {
  return (
    <section id="appointments" className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-semibold mb-4">Patient Appointments</h2>
        <p className="text-muted-foreground mb-6">
          Patients can book secure virtual consultations, choose doctors, and receive reminders.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <SectionCard
            title="Book a Visit"
            description="Select symptoms, choose available time slots, and confirm your online consultation."
          />
          <SectionCard
            title="Doctor Matching"
            description="Match with specialists based on availability, condition, and patient preferences."
          />
          <SectionCard
            title="Appointment Scheduling"
            description="Schedule follow-ups, manage reminders, and keep appointments organized in one place."
          />
        </div>
      </motion.div>
    </section>
  )
}
