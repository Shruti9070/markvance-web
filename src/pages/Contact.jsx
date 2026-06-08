import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero.jsx'
import { BRAND, SERVICES } from '../data.js'
import { fadeUp, stagger, viewportOnce } from '../lib/motion.js'

const initial = { name: '', email: '', company: '', service: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    setErrors((er) => ({ ...er, [key]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please tell us your name.'
    if (!form.email.trim()) {
      next.email = 'We need an email to reply.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'That email looks off.'
    }
    if (!form.message.trim()) next.message = 'A few words about your goals help.'
    return next
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    if (Object.keys(next).length) {
      setErrors(next)
      return
    }
    // Front-end demo: no backend wired up.
    setSent(true)
  }

  return (
    <>
      <PageHero
        crumb="Home / Contact"
        kicker="Let's talk"
        title={
          <>
            Let's build your{' '}
            <span className="font-500 italic">growth engine.</span>
          </>
        }
        lead="Tell us where you are and where you want to go. We'll come back with a focused plan and a free strategy call -no decks, no fluff."
      />

      <section className="wrap py-12 md:py-16">
        <div className="grid items-start gap-10 md:grid-cols-[1.1fr_0.9fr]">
          {/* Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="rounded-[3px] border-[1.5px] border-ink bg-white p-6 md:p-8"
          >
            {sent ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-full border-2 border-signal text-2xl text-signal">
                  ✓
                </div>
                <h2 className="font-display text-3xl font-600">Message sent.</h2>
                <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-neutral-600">
                  Thanks, {form.name.split(' ')[0] || 'there'} -we've got it.
                  Expect a reply from the Markvance team within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm(initial)
                    setSent(false)
                  }}
                  className="btn btn-ghost mt-7"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <Field
                  label="Name"
                  value={form.name}
                  onChange={update('name')}
                  error={errors.name}
                  placeholder="Your full name"
                />
                <Field
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  error={errors.email}
                  placeholder="you@company.com"
                />
                <Field
                  label="Company"
                  value={form.company}
                  onChange={update('company')}
                  placeholder="Your company (optional)"
                />

                <div className="mb-4">
                  <label className="mb-1.5 block font-mono text-[11px] font-700 uppercase tracking-[0.1em] text-neutral-600">
                    Service you're interested in
                  </label>
                  <select
                    value={form.service}
                    onChange={update('service')}
                    className="h-11 w-full rounded-[2px] border border-line bg-[#faf9f6] px-3 font-body text-[14px] outline-none transition-colors focus:border-signal"
                  >
                    <option value="">Select a service (optional)</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>

                <div className="mb-5">
                  <label className="mb-1.5 block font-mono text-[11px] font-700 uppercase tracking-[0.1em] text-neutral-600">
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={update('message')}
                    rows={4}
                    placeholder="What are you trying to grow?"
                    className={`w-full resize-none rounded-[2px] border bg-[#faf9f6] px-3 py-2.5 font-body text-[14px] outline-none transition-colors focus:border-signal ${
                      errors.message ? 'border-signal' : 'border-line'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 font-mono text-[11px] text-signal">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button type="submit" className="btn btn-solid w-full justify-center">
                  Send message →
                </button>
              </form>
            )}
          </motion.div>

          {/* Side panel */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-4"
          >
            <ContactRow icon="✆" label="Call" value={BRAND.phone} href={BRAND.phoneHref} />
            <ContactRow
              icon="✉"
              label="Email"
              value={BRAND.email}
              href={`mailto:${BRAND.email}`}
            />
            <ContactRow icon="⚲" label="Location" value={BRAND.location} />

            <motion.div
              variants={fadeUp}
              className="relative grain-dark overflow-hidden rounded-[3px] border-[1.5px] border-ink bg-ink p-7 text-paper"
            >
              <div className="mb-2 font-mono text-[11px] font-500 uppercase tracking-[0.18em] text-signal">
                Prefer to talk?
              </div>
              <h3 className="font-display text-2xl font-600">
                Book a free strategy call.
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-neutral-400">
                30 minutes. We'll find your single biggest growth lever and how
                Markvance can build it with you.
              </p>
              <a
                href={BRAND.phoneHref}
                className="btn btn-signal mt-5 w-full justify-center"
              >
                Call {BRAND.phone}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

function Field({ label, error, type = 'text', ...props }) {
  return (
    <div className="mb-4">
      <label className="mb-1.5 block font-mono text-[11px] font-700 uppercase tracking-[0.1em] text-neutral-600">
        {label}
      </label>
      <input
        type={type}
        {...props}
        className={`h-11 w-full rounded-[2px] border bg-[#faf9f6] px-3 font-body text-[14px] outline-none transition-colors focus:border-signal ${
          error ? 'border-signal' : 'border-line'
        }`}
      />
      {error && <p className="mt-1 font-mono text-[11px] text-signal">{error}</p>}
    </div>
  )
}

function ContactRow({ icon, label, value, href }) {
  const inner = (
    <div className="flex items-center gap-4 rounded-[3px] border-[1.5px] border-ink bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-offset-sm">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-[1.5px] border-ink text-[15px]">
        {icon}
      </span>
      <div>
        <div className="font-display text-[15px] font-600">{label}</div>
        <div className="text-[13px] text-neutral-600">{value}</div>
      </div>
    </div>
  )
  return (
    <motion.div variants={fadeUp}>
      {href ? (
        <a href={href} className="block">
          {inner}
        </a>
      ) : (
        inner
      )}
    </motion.div>
  )
}
