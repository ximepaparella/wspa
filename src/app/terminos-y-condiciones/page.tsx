import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'W Spa | Términos y Condiciones | Whyndham Nordelta Spa',
  description:
    'W Spa te brinda la posibilidad de complementar tu viaje de placer o negocios con una serie de tratamientos pensados para encontrar el equilibrio perfecto.',
  openGraph: {
    type: 'website',
    url: 'https://wspa.com.ar/terminos-y-condiciones',
    title: 'W Spa | Términos y Condiciones | Whyndham Nordelta Spa',
    description:
      'W Spa te brinda la posibilidad de complementar tu viaje de placer o negocios con una serie de tratamientos pensados para encontrar el equilibrio perfecto.',
    images: [
      {
        url: 'https://wspa.com.ar/wspa.jpg',
        width: 1200,
        height: 630,
        alt: 'W Spa - Términos y Condiciones',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'W Spa | Términos y Condiciones | Whyndham Nordelta Spa',
    description:
      'W Spa te brinda la posibilidad de complementar tu viaje de placer o negocios con una serie de tratamientos pensados para encontrar el equilibrio perfecto.',
    images: ['https://wspa.com.ar/wspa.jpg'],
  },
};

export default function TerminosPage() {
  return (
    <main>
      <h1>Términos y Condiciones</h1>
      <p>Contenido de términos y condiciones en desarrollo...</p>
    </main>
  );
}
