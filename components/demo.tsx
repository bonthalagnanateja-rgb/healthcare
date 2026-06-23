"use client"

import { motion } from "framer-motion"
import { Home, Calendar, FileText, Pill, ShieldCheck } from "lucide-react"
import { GlassmorphismNavBar } from "./ui/glassmorphism-navigation"

const containerVariants: any = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants: any = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
}

const overviewCards = [
  {
    title: "Appointments",
    description: "Book consultations, manage visit times, and receive reminders.",
    href: "/appointments",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Records",
    description: "View secure patient histories, clinical notes, and lab results.",
    href: "/records",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Prescriptions",
    description: "Send e-prescriptions to pharmacies and track fulfillment.",
    href: "/prescriptions",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Admin",
    description: "Manage security, user roles, and operational workflows.",
    href: "/admin",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1200&q=80",
  },
]

export default function Demo() {
  const navItems = [
    { name: "Home", url: "/#home", icon: Home },
    { name: "Appointments", url: "/appointments", icon: Calendar },
    { name: "Records", url: "/records", icon: FileText },
    { name: "Prescriptions", url: "/prescriptions", icon: Pill },
    { name: "Admin", url: "/admin", icon: ShieldCheck },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 transition-colors duration-300">
      <GlassmorphismNavBar
        items={navItems}
        defaultTheme="light"
        onThemeChange={(theme) => console.log("Theme changed to:", theme)}
      />

      <div className="pt-28 pb-16">
        <div className="max-w-4xl mx-auto text-center mb-12 px-4">
          <h2 className="text-3xl font-semibold text-foreground">Explore healthcare workflows</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Select a dedicated page below to manage appointments, records, prescriptions, or administration.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-6 md:grid-cols-2 px-4"
        >
          {overviewCards.map((card, index) => (
            <motion.a
              key={card.title}
              href={card.href}
              variants={itemVariants}
              className="group block overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
