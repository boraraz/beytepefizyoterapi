type Props = {
  eyebrow?: string
  title: string
  accent?: string
  description?: string
  align?: 'left' | 'center'
  /** true when rendered on a dark background */
  dark?: boolean
  /** Vurgulu kısmı kendi satırına al */
  stack?: boolean
}

export default function SectionTitle({
  eyebrow,
  title,
  accent,
  description,
  align = 'left',
  dark = false,
  stack = false,
}: Props) {
  const centered = align === 'center'
  return (
    <div className={`reveal ${centered ? 'mx-auto text-center' : ''} max-w-3xl`}>
      {eyebrow && <p className={`eyebrow ${dark ? '!text-pinkSoft' : ''}`}>{eyebrow}</p>}
      <h2 className={`display mt-3 text-5xl sm:text-6xl lg:text-7xl ${dark ? 'text-white' : 'text-ink'}`}>
        {title}{' '}
        {accent && (
          <span className={`${stack ? 'block' : ''} ${dark ? 'text-pinkSoft' : 'text-pinkDeep'}`}>
            {accent}
          </span>
        )}
      </h2>
      {description && (
        <p className={`mt-5 text-base sm:text-lg ${dark ? 'text-white/70' : 'text-ink/60'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
