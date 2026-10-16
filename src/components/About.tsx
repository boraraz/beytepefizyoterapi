import { about } from '../data/site'

export default function About() {
  return (
    <section id="hakkimizda" className="relative overflow-hidden bg-pinkPale py-24 text-ink sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-pink/25 blur-[160px]"
      />
      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="reveal lg:col-span-5">
            <p className="eyebrow">Hakkımızda</p>
            <h2 className="display mt-3 text-5xl text-ink sm:text-6xl lg:text-7xl">
              {about.title}
              <br />
              <span className="text-pinkDeep">{about.titleAccent}</span>
            </h2>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-ink/65 sm:text-lg">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-pinkSoft pt-8">
              {about.stats.map((s) => (
                <div key={s.label}>
                  <dt className="display text-4xl text-pinkDeep sm:text-5xl">{s.value}</dt>
                  <dd className="mt-1 text-xs text-ink/55 sm:text-sm">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative lg:col-span-7">
            <div className="reveal overflow-hidden rounded-[2rem] shadow-soft">
              <img
                src={about.image}
                alt="Klinik"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/4]"
              />
            </div>
            <div
              className="reveal absolute -bottom-8 -left-4 hidden w-[42%] overflow-hidden rounded-3xl border-[6px] border-white shadow-2xl sm:block lg:-left-10"
              style={{ transitionDelay: '150ms' }}
            >
              <img
                src={about.secondaryImage}
                alt="Klinik aynası"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
            <span
              className="tape reveal absolute -top-4 right-6 text-sm sm:text-base"
              style={{ transitionDelay: '250ms' }}
            >
              size göre
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
