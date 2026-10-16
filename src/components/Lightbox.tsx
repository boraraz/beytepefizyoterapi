import { useEffect } from 'react'
import type { GalleryImage } from '../data/site'

type Props = {
  images: GalleryImage[]
  index: number | null
  onClose: () => void
  onChange: (index: number) => void
}

export default function Lightbox({ images, index, onClose, onChange }: Props) {
  const isOpen = index !== null

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onChange(((index ?? 0) + 1) % images.length)
      if (e.key === 'ArrowLeft') onChange(((index ?? 0) - 1 + images.length) % images.length)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, index, images.length, onClose, onChange])

  if (!isOpen || index === null) return null
  const img = images[index]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={img.alt}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm animate-[fadeIn_0.25s_ease-out]"
      onClick={onClose}
    >
      <img
        src={img.src}
        alt={img.alt}
        className="max-h-[88vh] max-w-full rounded-2xl object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        type="button"
        aria-label="Kapat"
        onClick={onClose}
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
        </svg>
      </button>

      <NavButton
        side="left"
        onClick={(e) => {
          e.stopPropagation()
          onChange((index - 1 + images.length) % images.length)
        }}
      />
      <NavButton
        side="right"
        onClick={(e) => {
          e.stopPropagation()
          onChange((index + 1) % images.length)
        }}
      />

      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs text-white/60">
        {index + 1} / {images.length}
      </p>
      <style>{`@keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }`}</style>
    </div>
  )
}

function NavButton({
  side,
  onClick,
}: {
  side: 'left' | 'right'
  onClick: (e: React.MouseEvent) => void
}) {
  return (
    <button
      type="button"
      aria-label={side === 'left' ? 'Önceki' : 'Sonraki'}
      onClick={onClick}
      className={`absolute top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 sm:flex ${
        side === 'left' ? 'left-4' : 'right-4'
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        {side === 'left' ? (
          <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  )
}
