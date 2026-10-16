import { useCallback, useState } from 'react'
import SectionTitle from './SectionTitle'
import Lightbox from './Lightbox'
import { gallery, contact } from '../data/site'

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null)
  const close = useCallback(() => setActive(null), [])
  const change = useCallback((i: number) => setActive(i), [])

  return (
    <section id="galeri" className="bg-mist py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            eyebrow="Galeri"
            title="Klinikten"
            accent="kareler."
          />
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-outline reveal self-start lg:self-auto"
          >
            <InstagramIcon className="h-4 w-4" />@{contact.instagramHandle}
          </a>
        </div>

        <ul className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 lg:grid-cols-4 lg:auto-rows-[240px]">
          {gallery.map((img, i) => (
            <li
              key={img.src}
              className={`reveal group relative overflow-hidden rounded-2xl bg-pinkPale shadow-soft ${
                img.tall ? 'row-span-2' : ''
              }`}
              style={{ transitionDelay: `${(i % 4) * 70}ms` }}
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                className="block h-full w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-pink"
                aria-label={`${img.alt} - büyüt`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-pink/0 transition group-hover:bg-pink/15" />
                <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 shadow transition group-hover:opacity-100">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 9V4h5M20 15v5h-5M20 4l-6 6M4 20l6-6" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Lightbox images={gallery} index={active} onClose={close} onChange={change} />
    </section>
  )
}

export function InstagramIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
