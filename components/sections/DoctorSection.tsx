"use client"

import { motion } from "framer-motion"
import SectionCard from "./SectionCard"

export default function DoctorSection() {
  return (
    <section id="records" className="container mx-auto px-4 py-20 bg-background/70">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-semibold mb-4">Doctor Workflows</h2>
        <p className="text-muted-foreground mb-6">
          Doctors manage patient records, notes, consultations, and e-prescription creation.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <SectionCard
            title="Patient Records"
            description="Access secure patient histories, diagnoses, and lab summaries during consultations."
          />
          <SectionCard
            title="E-Prescriptions"
            description="Create prescriptions instantly, send them to pharmacies, and track fulfillment."
          />
          <SectionCard
            title="Consult Notes"
            description="Document visit summaries, treatment plans, and handoffs in a single workflow." 
          />
        </div>
      </motion.div>
    </section>
  )
}
