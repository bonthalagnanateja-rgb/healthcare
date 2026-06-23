"use client"

import { motion } from "framer-motion"
import SectionCard from "./SectionCard"

export default function PharmacistSection() {
  return (
    <section id="prescriptions" className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-semibold mb-4">Pharmacy Orders</h2>
        <p className="text-muted-foreground mb-6">
          Pharmacists receive digital prescriptions and manage medication fulfillment in real time.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <SectionCard
            title="Order Tracking"
            description="View prescription status, confirm fulfillment, and manage shipment updates."
          />
          <SectionCard
            title="Medication Info"
            description="Provide drug guidance, dosage instructions, and safety warnings for patients."
          />
          <SectionCard
            title="Pharmacy Fulfillment"
            description="Coordinate medication preparation, pickup, and delivery for every prescription."
          />
        </div>
      </motion.div>
    </section>
  )
}
