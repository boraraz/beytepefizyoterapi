import { useState, type FormEvent } from 'react'
import SectionTitle from './SectionTitle'
import { InstagramIcon } from './Gallery'
import { contact, practices, services } from '../data/site'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget

    const formData = new FormData(form)
    const person = formData.get('fizyoterapist')
    const practice = practices.find((p) => p.person === person)
    if (!practice?.formspreeId) {
      setStatus('error')
      setErrorMsg('Lütfen bir fizyoterapist seçin.')
      return
    }

    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch(`https://formspree.io/f/${practice.formspreeId}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        const data = (await res.json().catch(() => null)) as { errors?: { message: string }[] } | null
        setErrorMsg(data?.errors?.map((x) => x.message).join(', ') ?? 'Gönderim başarısız oldu.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Bağlantı hatası. Lütfen tekrar deneyin.')
      setStatus('error')
    }
  }

  return (
    <section id="iletisim" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-pink/20 blur-[140px]"
      />
      <div className="container-x relative">
        <SectionTitle
          eyebrow="İletişim & Randevu"
          title="İlk adımı"
          accent="birlikte atalım."
          description="Aynı klinik, iki ayrı fizyoterapist. Formu doldurun veya e-posta ile ulaşın."
        />

        {/* Two practices */}
        <ul className="mt-14 grid gap-4 md:grid-cols-2">
          {practices.map((p, i) => (
            <li
              key={p.person}
              className="reveal rounded-[2rem] border border-pinkSoft/70 bg-blush p-6 shadow-soft sm:p-7"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="eyebrow">{p.title}</p>
              <h3 className="display mt-2 text-3xl text-ink sm:text-4xl">{p.person}</h3>
              <p className="mt-1 text-xs text-ink/45">{p.businessName}</p>
              <div className="mt-5">
                <a href={`mailto:${p.email}`} className="btn-primary justify-between !px-5 !py-3.5">
                  <span className="flex items-center gap-3">
                    <MailIcon /> {p.email}
                  </span>
                  <Arrow />
                </a>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Form */}
          <div className="reveal lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="rounded-[2rem] border border-ink/5 bg-mist p-6 shadow-soft sm:p-8"
            >
              <fieldset className="mb-5">
                <legend className="mb-2 block text-xs font-medium text-ink/60">
                  Kime ulaşmak istiyorsunuz?
                </legend>
                <div className="grid gap-2 sm:grid-cols-2">
                  {practices.map((p, i) => (
                    <label
                      key={p.person}
                      className="flex cursor-pointer items-center gap-3 rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm transition has-[:checked]:border-pink has-[:checked]:bg-pinkPale"
                    >
                      <input
                        type="radio"
                        name="fizyoterapist"
                        value={p.person}
                        defaultChecked={i === 0}
                        className="h-4 w-4 accent-pinkDeep"
                      />
                      <span>
                        <span className="block font-medium text-ink">{p.person}</span>
                        <span className="block text-xs text-ink/50">{p.title}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Ad Soyad" htmlFor="name">
                  <input id="name" name="name" required className="input" placeholder="Adınız Soyadınız" autoComplete="name" />
                </Field>
                <Field label="E-posta" htmlFor="email">
                  <input id="email" name="email" type="email" required className="input" placeholder="ornek@eposta.com" autoComplete="email" />
                </Field>
                <Field label="İlgilendiğiniz hizmet" htmlFor="service">
                  <select id="service" name="service" className="input appearance-none" defaultValue="">
                    <option value="" disabled>
                      Seçiniz
                    </option>
                    {services.map((s) => (
                      <option key={s.title} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Emin değilim">Emin değilim</option>
                  </select>
                </Field>
              </div>
              <div className="mt-4">
                <Field label="Mesajınız" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="input resize-none"
                    placeholder="Şikayetinizi veya hedefinizi kısaca anlatın."
                  />
                </Field>
              </div>

              <label className="mt-5 flex items-start gap-3 text-xs text-ink/55">
                <input
                  type="checkbox"
                  name="kvkk"
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-ink/20 accent-pinkDeep"
                />
                <span>
                  Kişisel verilerimin randevu ve iletişim amacıyla KVKK kapsamında işlenmesini kabul
                  ediyorum.
                </span>
              </label>

              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="_subject" value="Web sitesi randevu talebi" />

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button type="submit" disabled={status === 'sending'} className="btn-primary min-w-[10rem] disabled:opacity-60">
                  {status === 'sending' ? 'Gönderiliyor…' : 'Gönder'}
                </button>
                {status === 'success' && (
                  <p className="text-sm font-medium text-pinkDeep" role="status">
                    Teşekkürler! Mesajınız alındı, en kısa sürede dönüş yapacağız.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-sm text-red-500" role="alert">
                    {errorMsg}
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* Shared info */}
          <aside className="reveal flex flex-col gap-6 lg:col-span-5" style={{ transitionDelay: '120ms' }}>
            <a href={contact.instagramUrl} target="_blank" rel="noreferrer" className="btn-outline justify-between !px-5 !py-4">
              <span className="flex items-center gap-3">
                <InstagramIcon className="h-5 w-5" /> @{contact.instagramHandle}
              </span>
              <Arrow />
            </a>

            <div className="rounded-[2rem] border border-pinkSoft/70 bg-pinkPale p-6 sm:p-7">
              <p className="mb-5 text-xs text-ink/50">Ortak klinik adresi ve çalışma saatleri</p>
              <h3 className="eyebrow">Adres</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">
                {contact.addressLines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </p>
              <a href={contact.mapsLink} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-pinkDeep hover:underline">
                Yol tarifi al <Arrow className="h-3.5 w-3.5" />
              </a>

              <h3 className="eyebrow mt-7">Çalışma saatleri</h3>
              <dl className="mt-2 divide-y divide-pinkSoft/70 text-sm">
                {contact.hours.map((h) => (
                  <div key={h.days} className="flex justify-between py-2">
                    <dt className="text-ink/60">{h.days}</dt>
                    <dd className="font-medium text-ink">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-ink/5 shadow-soft">
              <iframe
                title="Harita"
                src={contact.mapsEmbedUrl}
                className="h-56 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-medium text-ink/60">
        {label}
      </label>
      {children}
    </div>
  )
}

function Arrow({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

