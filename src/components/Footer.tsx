import { brand, contact, navLinks, practices } from '../data/site'
import { InstagramIcon } from './Gallery'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-pinkSoft/60 bg-blush">
      <div className="container-x py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <a href="#top" className="flex items-center gap-4">
              {brand.logo && (
                <img src={brand.logo} alt="" className="h-16 w-16 shrink-0 rounded-full object-cover" />
              )}
              <span>
                <span className="block text-base font-semibold leading-snug text-ink sm:text-lg">
                  {brand.name}
                </span>
                <span className="mt-1 block text-sm text-pinkDeep">{brand.tagline}</span>
              </span>
            </a>
            <ul className="mt-4 space-y-1 text-xs text-ink/50">
              {practices.map((p) => (
                <li key={p.person}>
                  {p.businessName} · {p.phoneDisplay} · {p.email}
                </li>
              ))}
            </ul>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-ink/60 transition hover:text-pinkDeep">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-ink/60 transition hover:text-pinkDeep"
          >
            <InstagramIcon className="h-4 w-4" />@{contact.instagramHandle}
          </a>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-pinkSoft/60 pt-6 text-xs text-ink/45 sm:flex-row sm:justify-between">
          <p>
            © {year} {brand.name}. Tüm hakları saklıdır.
          </p>
          <p>Bu site tıbbi tavsiye yerine geçmez. Değerlendirme için randevu alınız.</p>
        </div>
      </div>
    </footer>
  )
}
