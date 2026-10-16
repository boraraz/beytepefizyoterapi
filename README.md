# Özel Sağlık Meslek Hizmet Birimi – Tanıtım Sitesi

Tek sayfalık, fotoğraf odaklı tanıtım sitesi. Vite + React 18 + TypeScript + Tailwind CSS.

## Çalıştırma

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # dist/ klasörüne üretim çıktısı
npm run preview    # üretim çıktısını yerelde önizle
```

Node 18+ gerekir (Vite 5).

## İçeriği düzenleme

Tüm metin ve iletişim bilgileri tek dosyada: `src/data/site.ts`

| Ne | Nerede |
| --- | --- |
| Marka adı, slogan, logo yolu | `brand` |
| Her fizyoterapistin telefonu, WhatsApp'ı, e-postası, işletme adı | `practices` |
| Ortak adres, çalışma saatleri, Instagram, harita | `contact` |
| Form servisi (Formspree) ID'si | `contact.formspreeId` |
| Hero başlığı ve alt metni | `hero` |
| 8 hizmet (başlık, açıklama, görsel) | `services` |
| Hakkımızda metinleri ve sayılar | `about` |
| Ekip (isim, unvan, bio, görsel) | `team` |
| Galeri görselleri | `gallery` |

### Fotoğrafları değiştirme

Görseller `public/images/` içindedir. Yeni bir fotoğrafı aynı adla üzerine yazın ya da yeni dosya ekleyip
`site.ts` içindeki yolu güncelleyin (`/images/dosya.jpg`). Büyük orijinalleri web için küçültün
(macOS'ta `sips -Z 1600 -s formatOptions 80 kaynak.JPG --out public/images/hedef.jpg`).

Mevcut eşleme:

- `hero.jpg` – ana görsel (reformer stüdyo, şehir manzarası)
- `about.jpg`, `studio-mirror.jpg` – Hakkımızda
- `team-berrak.jpg` (siyah üst), `team-bengusu.jpg` (beyaz bluz) – Ekip
- `svc-*.jpg` – hizmet kartları
- `gal-*.jpg` – galeri

### Randevu formunu aktifleştirme

1. https://formspree.io adresinde ücretsiz hesap açın ve yeni form oluşturun.
2. Form ID'sini (`https://formspree.io/f/XXXXXXXX` içindeki `XXXXXXXX`) `site.ts` → `contact.formspreeId` alanına yazın.
3. Form, seçilen fizyoterapist adını `fizyoterapist` alanı olarak gönderir; Formspree'de bu alana göre yönlendirme kurabilirsiniz.

ID `PLACEHOLDER` olduğu sürece form gönderimi kapalıdır ve kullanıcıya WhatsApp/telefon önerilir.

### Harita

`contact.mapsEmbedUrl` adres aramasına dayalı genel bir gömme kullanır. Kesin pin için Google Maps'te
işletmeyi bulun → Paylaş → "Harita yerleştir" → `src` değerini bu alana yapıştırın.

## Yayınlama

`npm run build` sonrası `dist/` klasörünü Netlify, Vercel, GitHub Pages veya herhangi bir statik barındırmaya yükleyin.
