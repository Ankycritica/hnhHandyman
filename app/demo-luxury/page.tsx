"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Search, Settings, Award, Package, CheckCircle, Shield } from "lucide-react"

// Fade-in animation component
function LuxuryFadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function LuxuryDemoPage() {
  const steps = [
    {
      icon: Search,
      title: "Initial Agreement And Email Thread",
      description:
        "Once both parties choose Bennisson, we create a secure email thread for seamless communication, ensuring transparency throughout the transaction process.",
      delay: 0,
    },
    {
      icon: Settings,
      title: "Authentication And Secure Handling Of Timepieces",
      description:
        "Bennisson does not handle payments but ensures secure authentication and inspection. Once verified, the buyer sends funds directly to the seller.",
      delay: 0.15,
    },
    {
      icon: Award,
      title: "Buyer And Seller Responsibilities",
      description:
        "The buyer and seller manage payments and shipping, while Bennisson ensures secure handling and verification for a transparent transaction process.",
      delay: 0.3,
    },
    {
      icon: Package,
      title: "Shipping Instructions",
      description:
        "Ship your watch to Bennisson Escrow at the listed address, ensuring it's double-boxed, securely packed, and insured, with buyer and seller details enclosed.",
      delay: 0.45,
    },
    {
      icon: CheckCircle,
      title: "Completion Of Transaction",
      description:
        "Once authentication is complete, the buyer proceeds with payment. The seller must confirm via email before Bennisson releases the timepiece securely.",
      delay: 0.6,
    },
    {
      icon: Shield,
      title: "Security Precautions",
      description:
        "For security, contact Bennisson at (561)-629-7815 before sending funds. Bennisson does not handle payments or assume liability for any financial transfers.",
      delay: 0.75,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-neutral-900 to-zinc-950">
      {/* Subtle background pattern */}
      <div
        className="fixed inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mb-12 mx-auto max-w-md"
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-amber-500/80 uppercase tracking-[0.3em] text-sm font-light mb-6 font-serif"
            >
              Bennisson Escrow
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-tight"
            >
              Secure <span className="font-serif italic text-amber-500">&</span> Seamless
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-light text-white/90 mb-12"
            >
              Transactions<span className="text-amber-500">.</span>
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 1.1 }}
              className="h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto max-w-md"
            />
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <LuxuryFadeIn key={index} delay={step.delay}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                  className="group relative h-full"
                >
                  {/* Card */}
                  <div className="relative h-full bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 backdrop-blur-sm border border-amber-500/10 hover:border-amber-500/30 rounded-sm p-8 transition-all duration-500">
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-500/20 group-hover:border-amber-500/60 transition-colors duration-500" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-500/20 group-hover:border-amber-500/60 transition-colors duration-500" />

                    {/* Number */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: step.delay + 0.3 }}
                      className="absolute -top-4 -right-4 w-12 h-12 bg-amber-500/10 border border-amber-500/30 rounded-full flex items-center justify-center backdrop-blur-sm"
                    >
                      <span className="text-amber-500 font-serif text-lg">{index + 1}</span>
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                      className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-amber-500/20 to-yellow-600/20 border border-amber-500/30 flex items-center justify-center"
                    >
                      <step.icon className="w-8 h-8 text-amber-500" strokeWidth={1.5} />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-light text-white mb-4 tracking-wide leading-relaxed">
                      {step.title}
                    </h3>

                    <div className="w-12 h-px bg-gradient-to-r from-amber-500/50 to-transparent mb-4" />

                    <p className="text-neutral-400 font-light text-sm leading-relaxed">
                      {step.description}
                    </p>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/0 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm pointer-events-none" />
                  </div>
                </motion.div>
              </LuxuryFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-24 px-6">
        <LuxuryFadeIn delay={0.2}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mb-12" />
            
            <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
              Experience <span className="font-serif italic text-amber-500">Unparalleled</span> Security
            </h3>
            
            <p className="text-neutral-400 font-light text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Every transaction is handled with the utmost care, ensuring authenticity, 
              transparency, and peace of mind for both buyers and sellers.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-4 bg-transparent border border-amber-500/50 hover:border-amber-500 text-amber-500 hover:text-white font-light tracking-widest text-sm uppercase transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Begin Your Journey</span>
              <motion.div
                className="absolute inset-0 bg-amber-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <div className="h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mt-12" />
          </div>
        </LuxuryFadeIn>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-amber-500/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-neutral-500 text-sm font-light tracking-wider">
            BENNISSON ESCROW © 2025 — WHERE LUXURY MEETS SECURITY
          </p>
        </div>
      </footer>
    </div>
  )
}


