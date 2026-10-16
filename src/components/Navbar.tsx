import { useEffect, useState } from 'react'
import { brand, navLinks } from '../data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.75)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)
  const light = scrolled || open // light (white) chrome vs. transparent over hero

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        light
          ? 'bg-white/80 text-ink backdrop-blur-xl border-b border-ink/5 shadow-[0_1px_0_rgba(0,0,0,0.02)]'
          : 'bg-transparent text-white border-b border-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#top" onClick={close} className="flex items-center gap-3">
          {brand.logo ? (
            <img src={brand.logo} alt="" className="h-11 w-11 rounded-full object-cover" />
          ) : (
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-pink">
              <svg viewBox="0 0 64 64" className="h-5 w-5" aria-hidden="true">
                <path d="M20 46 C20 30 28 22 44 18 C44 34 36 42 20 46 Z" fill="#ffffff" />
                <circle cx="24" cy="42" r="5" fill="#141416" />
              </svg>
            </span>
          )}
          <span className="hidden text-sm font-semibold tracking-tight sm:block md:text-[15px]">
            {brand.name}
          </span>
          <span className="text-sm font-semibold tracking-tight sm:hidden">{brand.shortName}</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-[13px] font-medium transition ${
                  light ? 'text-ink/65 hover:text-pinkDeep' : 'text-white/75 hover:text-white'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#iletisim" className="btn-primary hidden !px-5 !py-2 text-[13px] md:inline-flex">
            Randevu Al
          </a>
          <button
            type="button"
            aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`relative flex h-10 w-10 items-center justify-center rounded-full border md:hidden ${
              light ? 'border-ink/10 bg-ink/5' : 'border-white/20 bg-white/10'
            }`}
          >
            <span
              className={`absolute h-[1.5px] w-5 bg-current transition-all duration-300 ${
                open ? 'rotate-45' : '-translate-y-[4px]'
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-5 bg-current transition-all duration-300 ${
                open ? '-rotate-45' : 'translate-y-[4px]'
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-x flex flex-col gap-1 pb-8 pt-4">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={close}
                className="display block py-3 text-4xl text-ink transition hover:text-pinkDeep"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a href="#iletisim" onClick={close} className="btn-primary w-full">
              Randevu Al
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
