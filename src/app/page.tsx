import type { Metadata } from 'next';
import { getHomeData } from '../../lib/fetcher/rscFetch';

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

export default async function Home() {
  // Fetch data using RSC data layer
  const data = await getHomeData();

  return (
    <main>
      <h1>
        {data.intro.preTitle} {data.intro.title}
      </h1>
      <p>{data.intro.description}</p>

      {/* Hero Section Preview */}
      <section>
        <h2>Destacados</h2>
        {data.hero.slides.map((slide) => (
          <div key={slide.id}>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
            <a href={slide.cta.href}>{slide.cta.text}</a>
          </div>
        ))}
      </section>

      {/* Services Grid Preview */}
      <section>
        <h2>Nuestros Servicios</h2>
        <div>
          {data.services.grid.map((service) => (
            <div key={service.id}>
              <h3>{service.title}</h3>
              <a href={service.href}>Ver más</a>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>Datos cargados desde JSON estático - Epic E3 funcionando ✅</p>
      </footer>
    </main>
  );
}
