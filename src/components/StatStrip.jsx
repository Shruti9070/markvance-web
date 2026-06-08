import { motion } from 'framer-motion'
import { stagger, popIn, viewportOnce } from '../lib/motion.js'

export default function StatStrip({ stats }) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="grid grid-cols-2 overflow-hidden rounded-[3px] border-[1.5px] border-ink bg-white md:grid-cols-4"
    >
      {stats.map((s, i) => (
        <motion.div
          key={s.sm}
          variants={popIn}
          className={`p-6 text-center ${
            i % 2 === 0 ? 'border-r border-line' : ''
          } ${i < 2 ? 'border-b border-line md:border-b-0' : ''} ${
            i === 1 ? 'md:border-r' : ''
          } ${i === 3 ? 'md:border-r-0' : ''}`}
        >
          <div className="font-display text-3xl font-900 md:text-4xl">{s.big}</div>
          <div className="mt-2 font-mono text-[10px] font-500 uppercase tracking-[0.12em] text-muted">
            {s.sm}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
