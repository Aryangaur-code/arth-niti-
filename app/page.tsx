
'use client'

import { motion } from 'framer-motion'
import { BarChart3, Brain, Globe2, Users } from 'lucide-react'

export default function HomePage() {
  const cards = [
    {
      title: 'AI Product Fit',
      desc: 'Analyze FMCG market acceptance with AI-powered insights.',
      icon: Brain
    },
    {
      title: 'Synthetic Personas',
      desc: 'Generate 25,000+ realistic customer personas.',
      icon: Users
    },
    {
      title: 'Regional Analytics',
      desc: 'Target customers based on demographics and region.',
      icon: Globe2
    },
    {
      title: 'Business Intelligence',
      desc: 'Interactive dashboards and predictive analytics.',
      icon: BarChart3
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-cyan-900/20 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-6xl font-bold leading-tight"
          >
            Arth Niti
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-gray-300 max-w-3xl"
          >
            AI-powered business intelligence and FMCG product-fit simulation platform.
          </motion.p>

          <div className="mt-10 flex gap-4">
            <button className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition">
              Launch Dashboard
            </button>

            <button className="px-6 py-3 rounded-2xl border border-gray-700 hover:bg-white/10 transition">
              Explore Analytics
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6"
              >
                <card.icon className="w-10 h-10 text-cyan-400" />
                <h3 className="mt-4 text-xl font-semibold">{card.title}</h3>
                <p className="mt-2 text-gray-400">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
