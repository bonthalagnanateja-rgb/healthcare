"use client"

import { motion } from "framer-motion"
import { Calendar, Video, FileText, HeartPulse } from "lucide-react"

export default function HeroSection() {
  const containerVariants: any = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants: any = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium">Remote Healthcare Services</span>
          </motion.div>

          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 rounded-full border border-accent/20 bg-accent/10 px-4 py-3 text-accent mb-8 justify-center mx-auto md:justify-start">
            <HeartPulse className="w-5 h-5" />
            <div className="text-left">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Virtual Care</p>
              <p className="font-semibold">Healthcare Services</p>
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Virtual Consultations, <br className="hidden md:block" />
            <span className="text-primary">Real Healthcare.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Book virtual appointments, receive e-prescriptions, and access your medical records—all from the comfort of your home.
          </motion.p>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            {[
              { icon: Video, title: "Virtual Visits", desc: "Connect with top doctors via secure video." },
              { icon: Calendar, title: "Easy Scheduling", desc: "Book appointments 24/7 with zero hassle." },
              { icon: FileText, title: "E-Prescriptions", desc: "Instant prescriptions sent to your pharmacy." },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center p-6 bg-card rounded-2xl border shadow-sm"
              >
                <div className="h-12 w-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm text-center">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
