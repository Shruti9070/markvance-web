import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import markMascot from '../assets/mark-mascot.png'
import Marquee from '../components/Marquee.jsx'
import StatStrip from '../components/StatStrip.jsx'
import Founders from '../components/Founders.jsx'
import {
  BRAND,
  STATS,
  DIFFERENTIATORS,
  SERVICES,
  PROCESS,
  WORK,
  TESTIMONIALS,
  FAQ,
} from '../data.js'
import { fadeUp, fadeIn, stagger, popIn, viewportOnce } from '../lib/motion.js'
import ServiceMedia from "../components/ServiceMedia";

function SectionLabel({ num, name }) {
  return (
    <div className="sec-label">
      <span className="num">{num}</span>
      <span className="nm">{name}</span>
      <span className="ln" />
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden">
        <div className="wrap grid items-center gap-8 py-8 md:grid-cols-[1.1fr_1fr] md:py-12">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp} className="eyebrow mb-5">
              Full-stack marketing agency
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-display text-[clamp(34px,6vw,68px)] font-900 leading-[0.98] tracking-[-0.02em]"
            >
              We don't just create content.{' '}
              <span className="font-500 italic">We build brand identities.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-md text-[16px] leading-relaxed text-neutral-700"
            >
              Through strategy, creativity, positioning and storytelling, we
              transform products into memorable brands -for founders, creators
              and ambitious brands, executed alongside you from day one.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-solid">
                Book a Strategy Call →
              </Link>
              <Link to="/services" className="btn btn-ghost">
                See Our Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Mark mascot composition (right side) */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="show"
            className="mark-stage relative mx-auto w-full max-w-[480px]"
          >
            {/* soft circular backdrop */}
            <span className="mark-circle" aria-hidden="true" />

            {/* thought bubble */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.7, ease: 'easeOut' }}
              className="mark-bubble"
            >
              <p className="font-display text-[16px] font-700 leading-tight text-ink">
                Hi, I'm <span className="italic">Mark.</span>
              </p>
              <p className="mt-1.5 text-[11.5px] leading-snug text-neutral-600">
                Your full-stack marketing partner.
              </p>
              <p className="mt-1 text-[11.5px] leading-snug text-neutral-600">
                Let's build brands people remember.
              </p>
              <span className="mark-bubble-dot mark-bubble-dot-1" aria-hidden="true" />
              <span className="mark-bubble-dot mark-bubble-dot-2" aria-hidden="true" />
              <span className="mark-bubble-dot mark-bubble-dot-3" aria-hidden="true" />
            </motion.div>

            {/* Mark */}
            <img
              src={markMascot}
              alt="Mark, the Markvance mascot, in a black hoodie"
              className="mark-img relative z-[2] mx-auto max-h-[clamp(330px,46vh,480px)] w-auto object-contain grayscale transition-all duration-500 hover:grayscale-0"
              loading="eager"
            />

            {/* dotted curved arc following the circle edge */}
            <svg className="mark-arc" viewBox="0 0 120 360" fill="none" aria-hidden="true" preserveAspectRatio="none">
              <path d="M20 30 C 95 70, 95 290, 20 330" stroke="#0a0a0a" strokeWidth="1.5" strokeDasharray="2.5 7" strokeLinecap="round" opacity="0.3" />
            </svg>

            {/* vertical stack of icon nodes on the right */}
            <div className="mark-rail">
              <div className="mark-node">
                <span className="mark-node-icon">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0a0a0a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.4" fill="#0a0a0a" />
                  </svg>
                </span>
                <span className="mark-node-text">Strategy<br /><em>that works</em></span>
              </div>
              <div className="mark-node">
                <span className="mark-node-icon">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0a0a0a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                  </svg>
                </span>
                <span className="mark-node-text">Content<br /><em>that connects</em></span>
              </div>
              <div className="mark-node">
                <span className="mark-node-icon">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0a0a0a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" /><path d="M19 7v4h-4" />
                  </svg>
                </span>
                <span className="mark-node-text">Growth<br /><em>that lasts</em></span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- TRUST INDICATORS ---------------- */}
      <section className="wrap pb-12">
        <StatStrip stats={STATS} />
      </section>

      <Marquee
        items={[
          'Personal Branding',
          'Content & Social',
          'Website & SEO',
          'Creative Direction',
          'Community Building',
          'GTM & Lead Gen',
        ]}
      />

      {/* ---------------- ABOUT PREVIEW ---------------- */}
      <section className="wrap py-16 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <SectionLabel num="01" name="Who we are" />
            <h2 className="font-display text-3xl font-600 leading-[1.1] md:text-5xl">
              Mark + adVANCE. <span className="italic text-signal">Marketing that advances.</span>
            </h2>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-5 text-justify leading-relaxed text-neutral-700"
          >
            <motion.p variants={fadeUp}>
              We're a full-stack marketing agency for founders, creators, and brands. Our team has 25+ years of cumulative experience across marketing, branding and fundraising.
            </motion.p>
            <motion.p variants={fadeUp}>
             From branding to GTM and lead generation, we don't just plan your growth. We roll up our sleeves and execute it alongside you, right from day one.
            </motion.p>
            <motion.p variants={fadeUp}>
              Branding, content, websites, SEO, creative direction, community building. All under one roof and built to do one thing: 𝐡𝐞𝐥𝐩 𝐲𝐨𝐮 𝐠𝐫𝐨𝐰.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                to="/about"
                className="inline-block border-b-2 border-ink pb-1 font-mono text-[11px] font-700 uppercase tracking-[0.1em] transition-colors hover:border-signal hover:text-signal"
              >
                More about us →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- FOUNDERS ---------------- */}
      <Founders />

      {/* ---------------- WHY CHOOSE MARKVANCE (differentiators) ---------------- */}
      <section className="relative grain-dark overflow-hidden bg-ink text-paper">
        <div className="wrap py-16 md:py-24">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="max-w-3xl font-display text-3xl font-500 leading-[1.15] md:text-5xl"
          >
            Most agencies disappear after the GTM doc.{' '}
            <span className="font-900">We stay. We execute</span> -strategy,
            creative and growth under one roof.
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-12 grid gap-4 md:grid-cols-3"
          >
            {DIFFERENTIATORS.map((d) => (
              <motion.div
                key={d.title}
                variants={popIn}
                className="rounded-[3px] border border-neutral-700 p-6 transition-colors hover:border-signal"
              >
                <div className="mb-4 grid h-9 w-9 place-items-center rounded-full border border-neutral-600 text-signal">
                  ✦
                </div>
                <h3 className="font-display text-xl font-600">{d.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-neutral-400">
                  {d.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- SERVICES OVERVIEW ---------------- */}
      <section className="wrap py-16 md:py-24">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <SectionLabel num="03" name="What we do" />
            <h2 className="font-display text-4xl font-600 leading-[1.05] md:text-6xl">
              Six services.{' '}
              <span className="block italic">One team.</span>
            </h2>
          </motion.div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="max-w-sm text-[14px] leading-relaxed text-neutral-600"
          >
            Everything a modern brand needs to grow -strategy, story, content,
            community and paid growth -delivered by one team that actually
            executes.
          </motion.p>
        </div>

        <div className="space-y-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.id}
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className={`service-row ${i % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="service-ornament">{String(i + 1).padStart(2, '0')}</div>

              <motion.div
                variants={popIn}
                className={`grid items-center gap-6 md:grid-cols-2`}
              >
                {/* image / visual block */}
                <motion.div
                  variants={popIn}
                  className={`relative order-1 md:order-${i % 2 === 0 ? '1' : '2'} flex items-center justify-center`}
                >
                  <div className="service-image-box w-full max-w-sm h-[265px] md:h-[330px] overflow-hidden">
                    <span className="service-badge">M</span>
                    {/* <img src={markMascot} alt={s.name} /> */}
                    <ServiceMedia
                      video={s.video}
                      fallback={markMascot}
                      alt={s.name}
                    />
                  </div>
                </motion.div>

                {/* connector (dashed line) */}
                <div className="connector" aria-hidden="true" />

                {/* text block */}
                <motion.div
                  variants={popIn}
                  className={`order-2 space-y-3 md:order-${i % 2 === 0 ? '2' : '1'}`}
                >
                  <div className="eyebrow">MARK INTRODUCES · SERVICE {s.num}</div>
                  <h3 className="font-display text-3xl md:text-4xl font-700">{s.name}</h3>
                  <p className="text-[15px] leading-relaxed text-neutral-600">{s.long}</p>
                  <Link to={`/services#${s.id}`} className="inline-block mt-3 btn btn-solid">
                    Learn more →
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- PROCESS ---------------- */}
      <section className="border-y border-line bg-paper-2">
        <div className="wrap py-16 md:py-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <SectionLabel num="04" name="How we work" />
            <h2 className="mb-12 max-w-2xl font-display text-3xl font-600 leading-[1.1] md:text-5xl">
              A clear path from{' '}
              <div className="italic text-signal">idea to growth.</div>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid overflow-hidden rounded-[3px] border-[1.5px] border-ink bg-white md:grid-cols-4"
          >
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.n}
                variants={fadeUp}
                className={`p-7 ${
                  i < PROCESS.length - 1
                    ? 'border-b border-line md:border-b-0 md:border-r'
                    : ''
                }`}
              >
                <div className="font-display text-3xl font-900 italic text-line">
                  {p.n}
                </div>
                <h3 className="mt-2 font-display text-xl font-600">{p.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-neutral-600">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- FEATURED WORK ---------------- */}
      <section className="wrap py-16 md:py-24">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <SectionLabel num="05" name="Featured work" />
            <h2 className="font-display text-4xl font-600 leading-[1.05] md:text-6xl">
              Work that moves{' '}
              <span className="italic">the needle.</span>
            </h2>
          </motion.div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="max-w-sm text-[14px] leading-relaxed text-neutral-600"
          >
            A selection of Markvance engagements. Real projects and outcomes
            land here as we publish them.
          </motion.p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-4 md:grid-cols-3"
        >
          {WORK.slice(0, 3).map((w, i) => (
            <motion.div
              key={i}
              variants={popIn}
              className={`group block overflow-hidden rounded-[3px] border-ink bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-offset ${
                w.isPlaceholder ? 'border-[1.5px] border-dashed' : 'border-[1.5px]'
              }`}
            >
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border-b border-line bg-gradient-to-br from-paper-2 to-line/60">
                <span className="font-display text-5xl font-900 italic text-ink/15">
                  {w.tag}
                </span>
                <span className="absolute bottom-3 left-3 rounded-[2px] bg-ink px-2.5 py-1 font-mono text-[10px] font-700 uppercase tracking-[0.1em] text-paper">
                  {w.metric}
                </span>
              </div>
              <div className="p-5">
                <div className="font-mono text-[10px] font-500 uppercase tracking-[0.1em] text-muted">
                  {w.role}
                </div>
                <h3 className="mt-2 font-display text-xl font-600">{w.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-neutral-600">
                  {w.summary}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <section className="relative grain-dark overflow-hidden bg-ink text-paper">
        <div className="wrap py-16 md:py-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mb-12"
          >
            <div className="mb-3 font-mono text-[11px] font-500 uppercase tracking-[0.22em] text-signal">
              What clients say
            </div>
            <h2 className="max-w-2xl font-display text-3xl font-500 leading-[1.15] md:text-5xl">
              Founders don't hire us for decks.{' '}
              <span className="font-900 italic">They hire us to build.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-4 md:grid-cols-3"
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.figure
                key={i}
                variants={popIn}
                className={`flex flex-col rounded-[3px] p-6 ${
                  t.isPlaceholder
                    ? 'border border-dashed border-neutral-700'
                    : 'border border-neutral-700'
                }`}
              >
                <div className="mb-4 text-2xl text-signal" aria-hidden="true">
                  "
                </div>
                <blockquote className="flex-1 text-[14px] leading-relaxed text-neutral-200">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 border-t border-neutral-800 pt-4">
                  <div className="font-display text-base font-600 text-white">
                    {t.name}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-neutral-500">
                    {t.role}
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="wrap py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <SectionLabel num="0" name="Questions" />
            <h2 className="font-display text-3xl font-600 leading-[1.1] md:text-5xl">
              Frequently{' '}
              <span className="italic text-signal">asked.</span>
            </h2>
            <p className="mt-4 text-[14px] leading-relaxed text-neutral-600">
              Still curious? A quick strategy call answers more than any FAQ can.
            </p>
            <Link to="/contact" className="btn btn-solid mt-6">
              Talk to us →
            </Link>
          </motion.div>

          <Faq />
        </div>
      </section>
    </>
  )
}

function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="divide-y divide-line border-y border-line"
    >
      {FAQ.map((item, i) => {
        const isOpen = open === i
        return (
          <motion.div key={item.q} variants={fadeUp}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg font-600">{item.q}</span>
              <span
                className={`shrink-0 text-2xl text-signal transition-transform duration-300 ${
                  isOpen ? 'rotate-45' : ''
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <motion.div
              initial={false}
              animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <p className="pb-5 text-[14px] leading-relaxed text-neutral-600">
                {item.a}
              </p>
            </motion.div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
