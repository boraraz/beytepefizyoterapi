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
