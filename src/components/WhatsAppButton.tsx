import { useEffect, useRef, useState } from 'react'
import { practices, whatsappLinkFor } from '../data/site'
import { WhatsAppIcon } from './Hero'

/** Floating WhatsApp button: opens a small chooser between the two physiotherapists. */
export default function WhatsAppButton() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={ref} className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <div
        className={`flex flex-col gap-2 transition-all duration-300 ${
          open ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        {practices.map((p) => (
          <a
            key={p.person}
            href={whatsappLinkFor(p)}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 rounded-2xl border border-pinkSoft bg-white/95 px-4 py-3 text-sm text-ink shadow-soft backdrop-blur transition hover:border-pink hover:bg-pinkPale"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
            <span>
              <span className="block font-medium leading-tight">{p.person}</span>
              <span className="block text-[11px] text-ink/50">{p.title}</span>
            </span>
          </a>
        ))}
      </div>

      <button
        type="button"
        aria-label="WhatsApp ile yazın"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition hover:scale-105 active:scale-95"
      >
        {open ? (
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        ) : (
          <WhatsAppIcon className="h-7 w-7" />
        )}
      </button>
    </div>
  )
}
