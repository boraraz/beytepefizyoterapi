import SectionTitle from './SectionTitle'
import { services } from '../data/site'

export default function Services() {
  return (
    <section id="hizmetler" className="bg-white py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            eyebrow="Hizmetlerimiz"
            title="Ağrıdan"
            accent="harekete."
            description="Değerlendirmeden tedaviye, tedaviden sürdürülebilir egzersize. Sekiz uzmanlık alanı, tek bir hedef: sizi daha iyi hissettirmek."
          />
          <a href="#iletisim" className="btn-outline reveal self-start lg:self-auto">
            Ücretsiz ön görüşme
          </a>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <li
              key={s.title}
              className="reveal group relative aspect-[16/11] overflow-hidden rounded-3xl bg-pinkPale shadow-soft sm:aspect-[3/4]"
              style={{ transitionDelay: `${(i % 4) * 80}ms` }}
            >
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/5 sm:via-ink/30 transition-opacity duration-500 group-hover:from-ink/95 group-hover:via-ink/65" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="inline-flex w-fit rounded-full bg-pinkSoft px-2.5 py-0.5 text-[11px] font-semibold tracking-[0.2em] text-ink">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="display mt-3 text-2xl text-white sm:text-[1.75rem]">
                  {s.title}
                </h3>
                <p className="mt-3 overflow-hidden text-sm text-white/80 transition-all duration-500 ease-out sm:max-h-0 sm:opacity-0 sm:group-hover:max-h-40 sm:group-hover:opacity-100">
                  {s.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
