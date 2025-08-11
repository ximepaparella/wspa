import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'W Spa | Tratamientos | Whyndham Nordelta Spa',
  description:
    'W Spa dispone de tratamientos faciales, corporales y una gama exclusiva de tratamientos Premium Germaine de Capuccini',
  openGraph: {
    type: 'website',
    url: 'https://wspa.com.ar/tratamientos',
    title: 'W Spa | Tratamientos | Whyndham Nordelta Spa',
    description:
      'W Spa dispone de tratamientos faciales, corporales y una gama exclusiva de tratamientos Premium Germaine de Capuccini',
    images: [
      {
        url: 'https://wspa.com.ar/wspa.jpg',
        width: 1200,
        height: 630,
        alt: 'W Spa - Tratamientos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'W Spa | Tratamientos | Whyndham Nordelta Spa',
    description:
      'W Spa dispone de tratamientos faciales, corporales y una gama exclusiva de tratamientos Premium Germaine de Capuccini',
    images: ['https://wspa.com.ar/wspa.jpg'],
  },
};

export default function TratamientosPage() {
  return (
    <main>
      <h1>Tratamientos</h1>
      <p>Contenido de tratamientos en desarrollo...</p>
    </main>
  );
}
