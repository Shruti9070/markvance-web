import { motion } from 'framer-motion'
import founderImg from '../assets/founder.jpg'
import aarushiImg from '../assets/aarushi.png'
import { fadeUp, popIn, stagger, viewportOnce } from '../lib/motion.js'
import { FOUNDERS } from '../data.js'

function SectionLabel({ num, name }) {
  return (
    <div className="sec-label">
      <span className="num">{num}</span>
      <span className="nm">{name}</span>
      <span className="ln" />
    </div>
  )
}

export default function Founders() {
  return (
    <section className="wrap py-16 md:py-24">
      <div className="mb-12">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <SectionLabel num="02" name="Meet the founders" />
          <h2 className="font-display text-3xl font-600 leading-[1.1] md:text-5xl">
            The people who build with founders.
          </h2>
        </motion.div>
      </div>

      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="grid gap-8 md:grid-cols-2">
        {FOUNDERS.map((f) => (
          <motion.article key={f.name} variants={popIn} className="flex gap-6 rounded-[3px] border-[1.5px] border-ink bg-white p-6">
            <div className="w-28 flex-shrink-0 overflow-hidden rounded-[3px] border border-line">
              <img
                src={f.image === 'aarushi.png' ? aarushiImg : founderImg}
                alt={f.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col">
              <div className="font-display text-lg font-700">{f.name}</div>
              <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-neutral-500">{f.role}</div>
              <div className="mt-3 text-[14px] text-neutral-700">{f.bio}</div>
              <ul className="mt-4 list-disc pl-5 text-[13px] text-neutral-600">
                {f.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
