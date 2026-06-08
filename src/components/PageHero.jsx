import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/motion.js'

export default function PageHero({ crumb, kicker, title, lead }) {
  return (
    <section className="border-b border-line">
      <div className="wrap py-16 md:py-24">
        <motion.div variants={stagger} initial="hidden" animate="show">
          {crumb && (
            <motion.div variants={fadeUp} className="eyebrow mb-4">
              {crumb}
            </motion.div>
          )}
          {kicker && (
            <motion.div
              variants={fadeUp}
              className="mb-3 font-mono text-[11px] font-500 uppercase tracking-[0.22em] text-signal"
            >
              {kicker}
            </motion.div>
          )}
          <motion.h1
            variants={fadeUp}
            className="max-w-4xl font-display text-5xl font-900 leading-[0.98] md:text-7xl hero-title-shadow"
          >
            {title}
          </motion.h1>
          {lead && (
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-[16px] leading-relaxed text-neutral-700"
            >
              {lead}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
