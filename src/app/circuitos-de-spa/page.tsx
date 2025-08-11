import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'W Spa | Circuitos de Spa | Whyndham Nordelta Spa',
  description:
    'W Spa te ofrece experiencias exclusivas para disfrutar de forma individual o en grupos de 2, 3 o más personas',
  openGraph: {
    type: 'website',
    url: 'https://wspa.com.ar/circuitos-de-spa',
    title: 'W Spa | Circuitos de Spa | Whyndham Nordelta Spa',
    description:
      'W Spa te ofrece experiencias exclusivas para disfrutar de forma individual o en grupos de 2, 3 o más personas',
    images: [
      {
        url: 'https://wspa.com.ar/wspa.jpg',
        width: 1200,
        height: 630,
        alt: 'W Spa - Circuitos de Spa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'W Spa | Circuitos de Spa | Whyndham Nordelta Spa',
    description:
      'W Spa te ofrece experiencias exclusivas para disfrutar de forma individual o en grupos de 2, 3 o más personas',
    images: ['https://wspa.com.ar/wspa.jpg'],
  },
};

export default function CircuitosPage() {
  return (
    <main>
      <h1>Circuitos de Spa</h1>
      <p>Contenido de circuitos de spa en desarrollo...</p>
    </main>
  );
}
