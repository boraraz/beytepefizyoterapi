/**
 * Tüm düzenlenebilir içerik bu dosyada toplanmıştır.
 * Metinleri, fotoğraf yollarını ve iletişim bilgilerini buradan değiştirebilirsiniz.
 * Fotoğraflar: public/images/ klasöründe. Yolu "/images/dosya.jpg" şeklinde yazın.
 */

export const brand = {
  name: 'Özel Sağlık Meslek Hizmet Birimi',
  shortName: 'Özel Sağlık',
  tagline: 'Her beden farklı. Her süreç de öyle.',
  /** Logo eklemek için public/ klasörüne koyup yolu buraya yazın. Boş bırakılırsa yazı kullanılır. */
  logo: '/images/logo-mark.png?v=2',
}

/**
 * Klinik tek, işletme iki: her fizyoterapistin kendi "Özel Sağlık Meslek Hizmet Birimi" vardır.
 * Telefon ve e-posta kişiye özel, adres ve çalışma saatleri ortaktır.
 */
export type Practice = {
  /** Kısa ad (butonlarda görünür) */
  person: string
  /** Resmi işletme adı */
  businessName: string
  title: string
  phoneDisplay: string
  phoneE164: string
  whatsappE164: string
  email: string
}

export const practices: Practice[] = [
  {
    person: 'Berrak Deniz Yılmaz',
    businessName: 'Berrak Deniz Yılmaz Özel Sağlık Meslek Hizmet Birimi',
    title: 'Uzman Fizyoterapist',
    // --- yer tutucu, gerçek bilgilerle değiştirin ---
    phoneDisplay: '+90 (5xx) xxx xx x1',
    phoneE164: '+905000000001',
    whatsappE164: '905000000001',
    email: 'deniz@ornek.com',
  },
  {
    person: 'Bengüsu Ekmen',
    businessName: 'Bengüsu Ekmen Özel Sağlık Meslek Hizmet Birimi',
    title: 'Fizyoterapist',
    // --- yer tutucu, gerçek bilgilerle değiştirin ---
    phoneDisplay: '+90 (5xx) xxx xx x2',
    phoneE164: '+905000000002',
    whatsappE164: '905000000002',
    email: 'bengusu@ornek.com',
  },
]

export const whatsappMessage = 'Merhaba, randevu almak istiyorum.'

export const whatsappLinkFor = (p: Practice) =>
  `https://wa.me/${p.whatsappE164}?text=${encodeURIComponent(whatsappMessage)}`

export const contact = {
  // --- Ortak bilgiler (yer tutucu, gerçek bilgilerle değiştirin) ---
  instagramHandle: 'beytepefizyoterapi',
  instagramUrl: 'https://instagram.com/beytepefizyoterapi',
  addressLines: [
    'Beytepe Mahallesi, Kanuni Sultan Süleyman Bulvarı',
    '5387. Cadde, Mira Ofis 15-A/11',
    'Çankaya / Ankara',
  ],
  hours: [
    { days: 'Pazartesi - Cuma', time: '09:00 - 20:00' },
    { days: 'Cumartesi', time: '10:00 - 17:00' },
    { days: 'Pazar', time: 'Kapalı' },
  ],
  /**
   * Harita gömme. En doğru pin için Google Maps > Paylaş > Harita yerleştir > src değerini buraya yapıştırın.
   * Şimdilik adres aramasına dayalı genel gömme kullanılıyor.
   */
  mapsEmbedUrl:
    'https://www.google.com/maps?q=' +
    encodeURIComponent('Mira Ofis, Beytepe Mahallesi, Kanuni Sultan Süleyman Bulvarı 5387. Cadde 15-A, Çankaya Ankara') +
    '&output=embed&hl=tr',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Mira Ofis, Beytepe Mahallesi, Kanuni Sultan Süleyman Bulvarı 5387. Cadde 15-A, Çankaya Ankara'),
  /** https://formspree.io adresinden form oluşturup ID'yi buraya yazın (örn: "xyzabcde") */
  formspreeId: 'PLACEHOLDER',
}

export const navLinks = [
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'Ekip', href: '#ekip' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'İletişim', href: '#iletisim' },
]

export const hero = {
  image: '/images/hero.jpg',
  kicker: 'daha',
  words: ['Dengeli.', 'Güçlü.', 'Size göre.'],
  subtitle:
    'Uzman fizyoterapistler eşliğinde, bedeninize ve hedeflerinize özel tedavi ve egzersiz programları.',
}

export type Service = {
  title: string
  description: string
  image: string
}

export const services: Service[] = [
  {
    title: 'Manuel Terapi',
    description:
      'Eklem ve yumuşak doku mobilizasyonlarıyla ağrıyı azaltan, hareketi geri kazandıran elle uygulanan tedavi.',
    image: '/images/svc-manuel.jpg',
  },
  {
    title: 'Klinik Pilates',
    description:
      'Fizyoterapist gözetiminde reformer ve mat üzerinde, bedeninizin ihtiyacına göre uyarlanmış pilates.',
    image: '/images/svc-klinik-pilates.jpg',
  },
  {
    title: 'Postür Eğitimi',
    description:
      'Günlük yaşam ve çalışma alışkanlıklarınıza göre duruşunuzu analiz eder, kalıcı düzeltme stratejileri sunarız.',
    image: '/images/svc-postur.jpg',
  },
  {
    title: 'Ortopedik Rehabilitasyon',
    description:
      'Ameliyat sonrası, kırık, bağ ve menisküs yaralanmalarında güvenli ve hızlı iyileşme programları.',
    image: '/images/svc-ortopedik.jpg',
  },
  {
    title: 'Denge ve Koordinasyon Eğitimi',
    description:
      'Düşme riskini azaltan, propriyosepsiyonu ve vücut farkındalığını geliştiren hedefli egzersizler.',
    image: '/images/svc-denge.jpg',
  },
  {
    title: 'Sporcu Sağlığı',
    description:
      'Performans artışı, yaralanma önleme ve spora dönüş süreçlerinde branşa özel değerlendirme ve takip.',
    image: '/images/svc-sporcu.jpg',
  },
  {
    title: 'Hamile Pilatesi',
    description:
      'Gebelik döneminde güvenli hareket, ağrı yönetimi ve doğuma hazırlık için özel olarak planlanmış seanslar.',
    image: '/images/svc-hamile.jpg',
  },
  {
    title: 'Egzersiz Danışmanlığı',
    description:
      'Hedeflerinize ve yaşam tarzınıza uygun, sürdürülebilir ve bilimsel temelli egzersiz planlaması.',
    image: '/images/svc-egzersiz.jpg',
  },
]

export const about = {
  image: '/images/about.jpg',
  secondaryImage: '/images/studio-mirror.jpg',
  title: 'Her beden farklı.',
  titleAccent: 'Her süreç de öyle.',
  paragraphs: [
    'Kliniğimiz, iki fizyoterapistin ortak vizyonuyla kuruldu: herkese aynı protokolü uygulamak yerine, her bireyin bedenini, hikayesini ve hedeflerini dinleyerek yol almak.',
    'Gün ışığı alan kliniğimizde reformer, cadillac ve manuel terapi alanlarıyla; değerlendirmeden tedaviye, tedaviden sürdürülebilir egzersize uzanan bütüncül bir süreç sunuyoruz.',
  ],
  stats: [
    { value: '1:1', label: 'Birebir seanslar' },
    { value: '8', label: 'Uzmanlık alanı' },
    { value: '%100', label: 'Size özel plan' },
  ],
}

export type TeamMember = {
  name: string
  title: string
  image: string
  bio: string
  focus: string[]
}

/** Ekip fotoğrafları: team-berrak.jpg (siyah üst) / team-bengusu.jpg (beyaz bluz). */
export const team: TeamMember[] = [
  {
    name: 'Berrak Deniz Yılmaz',
    title: 'Uzman Fizyoterapist',
    image: '/images/team-berrak.jpg',
    bio: 'Sporcu sağlığı, omurga sağlığı ve klinik pilates odaklı çalışıyor; diyafram ve hamile pilatesiyle bedeni bütüncül ele alıyor.',
    focus: [
      'Sporcu Sağlığı',
      'Omurga Sağlığı',
      'Diyafram Egzersizleri',
      'Klinik Pilates',
      'Hamile Pilatesi',
    ],
  },
  {
    name: 'Bengüsu Ekmen',
    title: 'Fizyoterapist',
    image: '/images/team-bengusu.jpg',
    bio: 'Manuel terapi, klinik pilates ve fonksiyonel antrenmanla ağrıyı azaltıp hareketi günlük yaşama taşıyan programlar tasarlıyor.',
    focus: ['Manuel Terapi', 'Klinik Pilates', 'Fonksiyonel Antrenman'],
  },
]

export type GalleryImage = {
  src: string
  alt: string
  /** Izgarada yüksek görünsün mü (2 satır kaplar) */
  tall?: boolean
}

export const gallery: GalleryImage[] = [
  { src: '/images/gal-1.jpg', alt: 'Foam roller, direnç bandı ve yoga bloğu', tall: true },
  { src: '/images/gal-2.jpg', alt: 'Kettlebell ile kuvvet çalışması' },
  { src: '/images/gal-3.jpg', alt: 'Reformer üzerinde egzersiz' },
  { src: '/images/studio-mirror.jpg', alt: 'Klinik ve ayna', tall: true },
  { src: '/images/gal-4.jpg', alt: 'Uzm. Fzt. Berrak Deniz Yılmaz' },
  { src: '/images/gal-5.jpg', alt: 'Direnç bandı detayı' },
  { src: '/images/gal-6.jpg', alt: 'Kettlebell ve şehir manzarası' },
  { src: '/images/svc-egzersiz.jpg', alt: 'Dambıllar ve reformer' },
]
