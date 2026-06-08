export default function Marquee({ items, dark = false }) {
  const doubled = [...items, ...items]
  return (
    <div
      className={`group overflow-hidden border-y py-3.5 ${
        dark ? 'border-neutral-800 bg-ink text-paper' : 'border-line bg-paper-2 text-ink'
      }`}
    >
      <div className="flex w-max animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="mx-7 font-display text-lg font-500 italic">{item}</span>
            <span className="text-signal" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
