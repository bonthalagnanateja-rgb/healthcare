"use client"

import { motion } from "framer-motion"
import { Calendar, Video, FileText } from "lucide-react"

export default function HowItWorks() {
  const container: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
  }

  const item: any = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  }

  return (
    <section className="container mx-auto px-4 py-20">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container} className="max-w-4xl mx-auto text-center">
        <motion.h2 variants={item} className="text-3xl font-semibold mb-4">
          How it works
        </motion.h2>
        <motion.p variants={item} className="text-lg text-muted-foreground mb-8">
          Simple, secure virtual consultations—book, consult, get e-prescriptions, and access records.
        </motion.p>

        <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Book a slot", desc: "Choose a time and doctor that suits you.", icon: Calendar },
            { title: "Secure video consult", desc: "Encrypted video calls for your privacy.", icon: Video },
            { title: "E-prescription", desc: "Receive prescriptions instantly after consult.", icon: FileText },
          ].map((c, i) => {
            const Icon = c.icon
            return (
              <motion.article key={i} variants={item} whileHover={{ y: -6 }} className="card p-6">
                <div className="h-12 w-12 bg-primary-10 text-primary rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </motion.article>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}
