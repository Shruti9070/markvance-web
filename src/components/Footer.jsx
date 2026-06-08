import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BRAND, SERVICES, NAV } from '../data.js'
import { fadeUp, viewportOnce } from '../lib/motion.js'
import logoLight from '../assets/markvance-logo-light.png'

const SOCIALS = ['Instagram', 'LinkedIn', 'YouTube', 'X (Twitter)', 'Facebook']

export default function Footer() {
  return (
    <footer>
      {/* CTA band */}
      <section className="relative grain-dark overflow-hidden bg-ink text-paper">
        <div className="wrap py-16 text-center md:py-24">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto max-w-3xl font-display text-4xl font-500 leading-[1.1] md:text-6xl"
          >
            Let's build your{' '}
            <span className="font-900 italic text-signal">growth engine.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto mt-5 max-w-xl text-[15px] text-neutral-400"
          >
            Book a free strategy call. We'll find the real lever for your growth —
            no decks, no fluff, just a plan we can build together.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-8"
          >
            <Link to="/contact" className="btn btn-signal mx-auto">
              Book a Strategy Call →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer body */}
      <div className="bg-black text-neutral-400">
        <div className="wrap py-14">
          <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
            <div>
              <img
                src={logoLight}
                alt={`${BRAND.name} logo`}
                className="mb-4 h-12 w-auto"
                draggable="false"
              />
              <p className="max-w-[260px] text-[13px] leading-relaxed">
                {BRAND.tagline} {BRAND.blurb}
              </p>
            </div>

            <div>
              <h5 className="mb-4 font-mono text-[11px] font-700 uppercase tracking-[0.18em] text-white">
                Services
              </h5>
              <ul className="space-y-2.5">
                {SERVICES.map((s) => (
                  <li key={s.id}>
                    <Link
                      to="/services"
                      className="text-[13px] transition-colors hover:text-signal"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="mb-4 font-mono text-[11px] font-700 uppercase tracking-[0.18em] text-white">
                Company
              </h5>
              <ul className="space-y-2.5">
                {NAV.filter((n) => n.to !== '/').map((n) => (
                  <li key={n.to}>
                    <Link
                      to={n.to}
                      className="text-[13px] transition-colors hover:text-signal"
                    >
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="mb-4 font-mono text-[11px] font-700 uppercase tracking-[0.18em] text-white">
                Connect
              </h5>
              <ul className="space-y-2.5">
                {SOCIALS.map((s) => (
                  <li key={s}>
                    <a
                      href="#"
                      className="text-[13px] transition-colors hover:text-signal"
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-5 space-y-1.5 text-[13px]">
                <a href={BRAND.phoneHref} className="block hover:text-signal">
                  {BRAND.phone}
                </a>
                <a href={`mailto:${BRAND.email}`} className="block hover:text-signal">
                  {BRAND.email}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-neutral-800 pt-6 text-[11px] tracking-[0.06em] text-neutral-600 sm:flex-row sm:justify-between">
            <span>© {new Date().getFullYear()} Markvance. All rights reserved.</span>
            <span>{BRAND.location}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
