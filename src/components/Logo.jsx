import { Link } from 'react-router-dom'
import { BRAND } from '../data.js'
import logoDark from '../assets/markvance-logo.png'
import logoLight from '../assets/markvance-logo-light.png'

export default function Logo({ inverted = false, onClick }) {
  // The official MARKVANCE logo already contains the wordmark, so it replaces
  // the previous icon + text lockup entirely. A light-tinted variant is used
  // on dark (inverted) surfaces such as the footer so it stays visible.
  const src = inverted ? logoLight : logoDark
  return (
    <Link
      to="/"
      onClick={onClick}
      className="group inline-flex items-center"
      aria-label={`${BRAND.name} home`}
    >
      <img
        src={src}
        alt={`${BRAND.name} logo`}
        className="h-16 w-20 transition-transform duration-200 group-hover:-translate-y-0.5"
        draggable="false"
      />
    </Link>
  )
}
