import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import markMascot from '../assets/mark-mascot.png'
import PageHero from '../components/PageHero.jsx'
import Marquee from '../components/Marquee.jsx'
import { SERVICES, PROCESS } from '../data.js'
import { fadeUp, stagger, popIn, viewportOnce } from '../lib/motion.js'

function MarkFrame() {
  return (
    <div className="relative mx-auto w-full max-w-[220px]">
      <img
        src={markMascot}
        alt="Mark, the Markvance mascot"
        className="w-full object-contain"
        loading="lazy"
      />
    </div>
  )
}

export default function Services() {
  return (
    <>
      <PageHero
        crumb="Home / Services"
        kicker="What we do"
        title={
          <>
            Six services.{' '}
            <span className="font-500 italic">One team.</span>
          </>
        }
        lead="Everything a modern brand needs to grow — introduced, as always, by Mark. Strategy, story, creative, content and paid growth, delivered under one roof."
      />

      <Marquee
        items={[
          'Strategy',
          'Branding',
          'Content',
          'Community',
          'Web & SEO',
          'GTM',
          'Lead Gen',
        ]}
      />

      {/* Alternating service rows */}
      <section className="wrap py-8 md:py-12">
        {SERVICES.map((s, i) => {
          const flip = i % 2 === 1
          return (
            <motion.article
              key={s.id}
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className={`relative grid items-center gap-8 border-t border-dashed border-line py-12 first:border-t-0 md:gap-12 ${
                flip
                  ? 'md:grid-cols-[1fr_240px]'
                  : 'md:grid-cols-[240px_1fr]'
              }`}
            >
              {/* big background number */}
              <span
                className={`pointer-events-none absolute top-6 z-0 font-display text-[80px] font-900 italic leading-none text-ink/[0.06] md:text-[110px] ${
                  flip ? 'left-0' : 'right-0'
                }`}
                aria-hidden="true"
              >
                {s.num}
              </span>

              <motion.div
                variants={popIn}
                className={`relative z-10 ${flip ? 'md:order-2' : ''}`}
              >
                <MarkFrame />
              </motion.div>

              <motion.div
                variants={fadeUp}
                className={`relative z-10 ${
                  flip ? 'md:order-1 md:text-right' : ''
                }`}
              >
                <div className="mb-2 font-mono text-[11px] font-500 uppercase tracking-[0.18em] text-signal">
                  {s.intro}
                </div>
                <h2 className="font-display text-[clamp(26px,3.5vw,40px)] font-600 leading-[1.05]">
                  {s.name}
                </h2>
                <p
                  className={`mt-3 max-w-md text-[15px] leading-relaxed text-neutral-700 ${
                    flip ? 'md:ml-auto' : ''
                  }`}
                >
                  {s.long}
                </p>
                <div
                  className={`mt-5 flex flex-wrap gap-2 ${
                    flip ? 'md:justify-end' : ''
                  }`}
                >
                  {s.deliverables.map((d) => (
                    <span
                      key={d}
                      className="rounded-[2px] border border-line bg-tag px-3 py-1.5 font-mono text-[11px] font-500"
                    >
                      {d}
                    </span>
                  ))}
                </div>
                <div className={`mt-5 ${flip ? 'md:text-right' : ''}`}>
                  <Link
                    to="/contact"
                    className="inline-block border-b-2 border-ink pb-1 font-mono text-[11px] font-700 uppercase tracking-[0.1em] transition-colors hover:border-signal hover:text-signal"
                  >
                    Start with {s.name} →
                  </Link>
                </div>
              </motion.div>
            </motion.article>
          )
        })}
      </section>

      {/* Process recap */}
      <section className="relative grain-dark overflow-hidden bg-ink text-paper">
        <div className="wrap py-16 md:py-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <div className="mb-3 font-mono text-[11px] font-500 uppercase tracking-[0.22em] text-signal">
              How we work
            </div>
            <h2 className="mb-12 max-w-2xl font-display text-3xl font-500 leading-[1.15] md:text-5xl">
              Every engagement follows the same{' '}
              <span className="font-900 italic">four-step path.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-4 md:grid-cols-4"
          >
            {PROCESS.map((p) => (
              <motion.div
                key={p.n}
                variants={popIn}
                className="rounded-[3px] border border-neutral-700 p-6 transition-colors hover:border-signal"
              >
                <div className="font-display text-3xl font-900 italic text-neutral-700">
                  {p.n}
                </div>
                <h3 className="mt-2 font-display text-xl font-600">{p.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-neutral-400">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
