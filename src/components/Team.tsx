import SectionTitle from './SectionTitle'
import { team } from '../data/site'

export default function Team() {
  return (
    <section id="ekip" className="bg-white py-24 sm:py-32">
      <div className="container-x">
        <SectionTitle
          eyebrow="Ekibimiz"
          title="İki fizyoterapist,"
          accent="tek vizyon."
          description="Bilimsel yaklaşımı sıcak bir iletişimle birleştiren, sizi dinleyen bir ekip."
          align="center"
          stack
        />

        <ul className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
          {team.map((m, i) => (
            <li
              key={m.name}
              className="reveal group overflow-hidden rounded-[2rem] border border-pinkSoft/70 bg-blush shadow-soft"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-7 sm:p-8">
                <p className="eyebrow">{m.title}</p>
                <h3 className="display mt-2 text-3xl text-ink sm:text-4xl">{m.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/65 sm:text-base">{m.bio}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {m.focus.map((f) => (
                    <li
                      key={f}
                      className="rounded-full bg-pinkSoft/60 px-3 py-1 text-xs font-medium text-pinkDeep"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
