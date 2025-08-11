import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'W Spa | Home Page | Whyndham Nordelta Spa',
  description:
    'W Spa te brinda la posibilidad de complementar tu viaje de placer o negocios con una serie de tratamientos pensados para encontrar el equilibrio perfecto.',
  openGraph: {
    type: 'website',
    url: 'https://wspa.com.ar/',
    title: 'Wspa - Whyndham Nordelta Spa',
    description:
      'W Spa te brinda la posibilidad de complementar tu viaje de placer o negocios con una serie de tratamientos pensados para encontrar el equilibrio perfecto.',
    images: [
      {
        url: 'https://wspa.com.ar/wspa.jpg',
        width: 1200,
        height: 630,
        alt: 'W Spa - Whyndham Nordelta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wspa - Whyndham Nordelta Spa',
    description:
      'W Spa te brinda la posibilidad de complementar tu viaje de placer o negocios con una serie de tratamientos pensados para encontrar el equilibrio perfecto.',
    images: ['https://wspa.com.ar/wspa.jpg'],
  },
};

export default function Home() {
  return (
    <main>
      <h1>W Spa | Whyndham Nordelta Spa</h1>
      <p>Página principal en desarrollo...</p>
    </main>
  );
}
