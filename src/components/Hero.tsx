import { hero } from '../data/site'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden">
      <img
        src={hero.image}
        alt=""
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-center scale-105 animate-[heroZoom_12s_ease-out_forwards]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/15" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-transparent to-transparent" />
      {/* soft pink glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 h-[28rem] w-[28rem] rounded-full bg-pink/20 blur-[140px]"
      />

      <div className="container-x relative z-10 pb-16 pt-32 sm:pb-28 lg:pb-32">
        <div className="max-w-4xl">
          <span className="tape-pink animate-fadeUp text-sm sm:text-base" style={{ animationDelay: '0.1s' }}>
            {hero.kicker}
          </span>
          <h1 className="display -mt-1 text-[15.5vw] !leading-[1.25] text-white sm:text-[11vw] lg:text-[7.5rem] xl:text-[8.5rem]">
            {hero.words.map((w, i) => (
              <span
                key={w}
                className="block animate-fadeUp"
                style={{ animationDelay: `${0.2 + i * 0.12}s` }}
              >
                {i === hero.words.length - 1 ? <span className="text-pinkSoft">{w}</span> : w}
              </span>
            ))}
          </h1>
          <p
            className="mt-6 max-w-xl text-base text-white/80 animate-fadeUp sm:text-lg"
            style={{ animationDelay: '0.6s' }}
          >
            {hero.subtitle}
          </p>
          <div
            className="mt-8 flex flex-wrap items-center gap-3 animate-fadeUp"
            style={{ animationDelay: '0.75s' }}
          >
            <a href="#iletisim" className="btn-primary">
              Randevu Al
            </a>
            <a href="#iletisim" className="btn-ghost">
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp ile yazın
            </a>
          </div>
        </div>
      </div>

      <a
        href="#hizmetler"
        aria-label="Aşağı kaydır"
        className="absolute bottom-6 right-6 hidden h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-white hover:text-white sm:flex"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 animate-bounce" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14m0 0l-6-6m6 6l6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>

      <style>{`@keyframes heroZoom { from { transform: scale(1.08) } to { transform: scale(1) } }`}</style>
    </section>
  )
}

export function WhatsAppIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.78h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.89 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.33.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41" />
    </svg>
  )
}
