import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import markMascot from '../assets/mark-mascot.png'
import founderSumit from '../assets/founder.jpg'
import founderAarushi from '../assets/aarushi.png'
import PageHero from '../components/PageHero.jsx'
import StatStrip from '../components/StatStrip.jsx'
import { STATS, FOUNDER_PROFILES, BRAND } from '../data.js'
import { fadeUp, fadeIn, stagger, popIn, viewportOnce } from '../lib/motion.js'

const FOUNDER_IMAGES = {
  'founder.jpg': founderSumit,
  'aarushi.png': founderAarushi,
}

const VALUES = [
  {
    title: 'Build, don\'t just advise',
    body: 'We earn our keep by shipping. Strategy without execution is just an expensive opinion.',
  },
  {
    title: 'One team, no handoffs',
    body: 'Brand, content, web and growth sit together -so nothing gets lost in translation.',
  },
  {
    title: 'Tied to revenue',
    body: 'We measure ourselves in pipeline, customers and growth -not impressions and vanity metrics.',
  },
  {
    title: 'Founders first',
    body: 'We\'ve mentored 4,200+ founders. We think like owners because we treat your brand like one.',
  },
]

const CAPABILITIES = [
  'Brand strategy & positioning',
  'Content systems & social',
  'Website design, build & SEO',
  'Creative & art direction',
  'Community building',
  'Paid media & performance',
  'Go-to-market & funnels',
  'Fundraising & pitch support',
]

export default function About() {
  return (
    <>
      <PageHero
        crumb="Home / About"
        kicker="Who we are"
        title={
          <>
            Marketing that{' '}
            <span className="font-500 italic">advances</span> your brand.
          </>
        }
        lead="Markvance is a full-stack marketing agency for founders, creators and ambitious brands -strategy, creative and growth under one roof, backed by 25+ years of cumulative experience in marketing, branding and fundraising."
      />

      {/* Story */}
      <section className="wrap py-16 md:py-24">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <h2 className="font-display text-3xl font-600 leading-[1.1] md:text-5xl">
              The name says it. 
              <div className="italic text-signal">Mark + adVANCE.</div>

            </h2>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-5 text-[15px] leading-relaxed text-neutral-700"
          >
            <motion.p variants={fadeUp}>
              Markvance was built on a simple frustration: too many brands were
              handed a beautiful strategy deck and then left to figure out the
              hard part alone. We do the opposite. We build the strategy with
              you -and then we stay to execute it.
            </motion.p>
            <motion.p variants={fadeUp}>
              With 25+ years of cumulative experience, our team has shaped
              brands, grown audiences and mentored founders from raw idea to
              investor-ready. That range -strategy, brand, content and growth —
              now lives under one roof.
            </motion.p>
          </motion.div>
        </div>

        {/* Pull quote */}
        <motion.blockquote
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 border-l-4 border-signal pl-6 font-display text-2xl font-500 italic leading-snug md:text-4xl"
        >
          "We're not here to simply create your GTM strategy and hand over a
          document. We work alongside you -and execute the strategy from day
          one."
        </motion.blockquote>
      </section>

      {/* Stats */}
      <section className="wrap pb-16 md:pb-24">
        <StatStrip stats={STATS} />
      </section>

      {/* Meet Mark */}
      <section className="border-y border-line bg-paper-2">
        <div className="wrap grid items-center gap-12 py-16 md:grid-cols-[0.85fr_1.15fr] md:py-24">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative mx-auto w-full max-w-xs"
          >
            <img
              src={markMascot}
              alt="Mark, the Markvance mascot"
              className="w-full object-contain"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <div className="mb-3 font-mono text-[11px] font-500 uppercase tracking-[0.22em] text-signal">
              Say hi to Mark
            </div>
            <h2 className="font-display text-3xl font-600 leading-[1.1] md:text-4xl">
              The face that introduces every service.
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-neutral-700">
              Mark is our mascot and your guide across everything we do. Friendly,
              sharp and always on -he's the through-line that keeps Markvance
              feeling like one team rather than a stack of vendors.
            </p>
            <Link to="/services" className="btn btn-solid mt-6">
              See what Mark does →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="wrap py-16 md:py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-12"
        >
          <div className="mb-3 font-mono text-[11px] font-500 uppercase tracking-[0.22em] text-signal">
            What we believe
          </div>
          <h2 className="max-w-2xl font-display text-3xl font-600 leading-[1.1] md:text-5xl">
            Principles we{' '}
            <span className="italic">actually run on.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-4 sm:grid-cols-2"
        >
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              variants={popIn}
              className="rounded-[3px] border-[1.5px] border-ink bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-offset"
            >
              <div className="font-mono text-[12px] font-700 text-signal">
                0{i + 1}
              </div>
              <h3 className="mt-2 font-display text-xl font-600">{v.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-neutral-600">
                {v.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Capabilities (dark) */}
      <section className="relative grain-dark overflow-hidden bg-ink text-paper">
        <div className="wrap py-16 md:py-24">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mb-12 max-w-2xl font-display text-3xl font-500 leading-[1.15] md:text-5xl"
          >
            One roof. <span className="font-900 italic">Every capability</span> a
            growing brand needs.
          </motion.h2>

          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-x-8 gap-y-0 sm:grid-cols-2"
          >
            {CAPABILITIES.map((c) => (
              <motion.li
                key={c}
                variants={fadeUp}
                className="flex items-center gap-4 border-b border-neutral-800 py-4 font-display text-lg font-500"
              >
                <span className="text-signal" aria-hidden="true">
                  ✦
                </span>
                {c}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Founders */}
      <section className="wrap py-16 md:py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-12"
        >
          <div className="mb-3 font-mono text-[11px] font-500 uppercase tracking-[0.22em] text-signal">
            The founders
          </div>
          <h2 className="font-display text-3xl font-600 leading-[1.1] md:text-5xl">
            Led by people who've{' '}
            <span className="italic">done it.</span>
          </h2>
        </motion.div>

        <div className="space-y-10">
          {FOUNDER_PROFILES.map((f) => (
            <motion.article
              key={f.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="grid items-start gap-8 rounded-[3px] border-[1.5px] border-ink bg-white p-6 md:grid-cols-[0.34fr_1fr] md:gap-10 md:p-8"
            >
              {/* Photo + headline column */}
              <div className="md:sticky md:top-28">
                <div className="overflow-hidden rounded-[3px] border border-line">
                  <img
                    src={FOUNDER_IMAGES[f.image]}
                    alt={f.name}
                    className="aspect-[4/5] w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-5 font-display text-3xl font-600">{f.name}</h3>
                <div className="mt-1.5 font-mono text-[11px] font-500 uppercase tracking-[0.14em] text-signal">
                  {f.role}
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-neutral-600">
                  {f.headline}
                </p>
              </div>

              {/* Detail column */}
              <div>
                <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                  {f.bio.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Positioning (Sumit) */}
                {f.positioning && (
                  <div className="mt-7">
                    <div className="mb-3 font-mono text-[11px] font-700 uppercase tracking-[0.14em] text-muted">
                      Marketing positioning
                    </div>
                    <ul className="grid gap-y-2 sm:grid-cols-2 sm:gap-x-8">
                      {f.positioning.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2.5 text-[14px] leading-relaxed text-neutral-700"
                        >
                          <span className="mt-1 text-signal" aria-hidden="true">
                            ✦
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Expertise (Aarushi) */}
                {f.expertise && (
                  <div className="mt-7">
                    <div className="mb-3 font-mono text-[11px] font-700 uppercase tracking-[0.14em] text-muted">
                      Marketing-focused expertise
                    </div>
                    <ul className="grid gap-y-2 sm:grid-cols-2 sm:gap-x-8">
                      {f.expertise.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2.5 text-[14px] leading-relaxed text-neutral-700"
                        >
                          <span className="mt-1 text-signal" aria-hidden="true">
                            →
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Roles */}
                <div className="mt-7">
                  <div className="mb-3 font-mono text-[11px] font-700 uppercase tracking-[0.14em] text-muted">
                    Roles & associations
                  </div>
                  <ul className="space-y-3">
                    {f.roles.map((r) => (
                      <li
                        key={r.org}
                        className="border-l-2 border-line pl-4 transition-colors hover:border-signal"
                      >
                        <div className="font-display text-[15px] font-600">
                          {r.org}
                        </div>
                        <div className="text-[13px] leading-relaxed text-neutral-600">
                          {r.detail}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Education (Aarushi) */}
                {f.education && (
                  <div className="mt-7">
                    <div className="mb-1.5 font-mono text-[11px] font-700 uppercase tracking-[0.14em] text-muted">
                      Education
                    </div>
                    <p className="text-[14px] leading-relaxed text-neutral-700">
                      {f.education}
                    </p>
                  </div>
                )}

                {/* Quote */}
                {f.quote && (
                  <blockquote className="mt-7 border-l-4 border-signal pl-5 font-display text-lg font-500 italic leading-snug text-ink md:text-xl">
                    "{f.quote}"
                  </blockquote>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  )
}
