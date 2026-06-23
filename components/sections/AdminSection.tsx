"use client"

import { motion } from "framer-motion"
import SectionCard from "./SectionCard"

export default function AdminSection() {
  return (
    <section id="admin" className="container mx-auto px-4 py-20 bg-background/70">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-semibold mb-4">Admin Dashboard</h2>
        <p className="text-muted-foreground mb-6">
          Administrators manage platform settings, data security, and user roles across the system.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <SectionCard
            title="User & Role Management"
            description="Control access levels for patients, doctors, pharmacists, and admin users."
          />
          <SectionCard
            title="Security & Compliance"
            description="Ensure data encryption, audit trails, and secure healthcare workflows."
          />
          <SectionCard
            title="Admin Analytics"
            description="Track platform usage, monitor performance, and review operational metrics."
          />
        </div>
      </motion.div>
    </section>
  )
}
