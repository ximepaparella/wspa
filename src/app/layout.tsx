import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'W Spa | Whyndham Nordelta Spa',
  description:
    'W Spa te brinda la posibilidad de complementar tu viaje de placer o negocios con una serie de tratamientos pensados para encontrar el equilibrio perfecto.',
  openGraph: {
    type: 'website',
    url: 'https://www.wspa.com.ar/',
    title: 'W Spa | Whyndham Nordelta Spa',
    description:
      'W Spa te brinda la posibilidad de complementar tu viaje de placer o negocios con una serie de tratamientos pensados para encontrar el equilibrio perfecto.',
    images: [
      {
        url: 'https://www.wspa.com.ar/wspa.jpg',
        width: 1200,
        height: 630,
        alt: 'W Spa - Whyndham Nordelta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'W Spa | Whyndham Nordelta Spa',
    description:
      'W Spa te brinda la posibilidad de complementar tu viaje de placer o negocios con una serie de tratamientos pensados para encontrar el equilibrio perfecto.',
    images: ['https://www.wspa.com.ar/wspa.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google Fonts - Open Sans */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />

        {/* Google Fonts - Playfair Display */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;0,800;0,900;1,400;1,500;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        {/* Preload custom icon font */}
        <link
          rel="preload"
          href="/fonts/icomoon.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
