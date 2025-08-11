import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'W Spa | Membresías | Whyndham Nordelta Spa',
  description:
    'W Spa te ofrece membresias exclusivas para disfrutar tus tratamientos durante todo el mes.',
  openGraph: {
    type: 'website',
    url: 'https://wspa.com.ar/membresias',
    title: 'W Spa | Membresías | Whyndham Nordelta Spa',
    description:
      'W Spa te ofrece membresias exclusivas para disfrutar tus tratamientos durante todo el mes.',
    images: [
      {
        url: 'https://wspa.com.ar/wspa.jpg',
        width: 1200,
        height: 630,
        alt: 'W Spa - Membresías',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'W Spa | Membresías | Whyndham Nordelta Spa',
    description:
      'W Spa te ofrece membresias exclusivas para disfrutar tus tratamientos durante todo el mes.',
    images: ['https://wspa.com.ar/wspa.jpg'],
  },
};

export default function MembresiasPage() {
  return (
    <main>
      <h1>Membresías</h1>
      <p>Contenido de membresías en desarrollo...</p>
    </main>
  );
}
