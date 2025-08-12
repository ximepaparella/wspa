'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { HeroSlide } from '../../../lib/types/data';
import styles from './Hero.module.css';

interface HeroProps {
  slides: HeroSlide[];
}

export default function Hero({ slides }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // Pause auto-play on user interaction
  const handleUserInteraction = () => {
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of no interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    handleUserInteraction();
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    handleUserInteraction();
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    handleUserInteraction();
  };

  if (!slides || slides.length === 0) {
    return null;
  }

  const currentSlideData = slides[currentSlide];

  return (
    <section
      className={styles.heroSection}
      aria-label="Hero slideshow"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Hero Slide */}
      <div className={styles.heroSlideContainer}>
        <div
          className={styles.heroSlide}
          role="region"
          aria-label={`Slide ${currentSlide + 1} of ${slides.length}`}
        >
          {/* Background Image */}
          <div className={styles.heroImageContainer}>
            <Image
              src={currentSlideData.image.src}
              alt={currentSlideData.image.alt}
              width={currentSlideData.image.width}
              height={currentSlideData.image.height}
              priority={currentSlide === 0}
              className={styles.heroBackgroundImage}
              sizes="100vw"
            />
          </div>

          {/* Content Overlay */}
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>{currentSlideData.title}</h1>
              <p className={styles.heroDescription}>
                {currentSlideData.description}
              </p>
              <Link
                href={currentSlideData.cta.href}
                className={styles.heroCtaButton}
                onClick={handleUserInteraction}
              >
                {currentSlideData.cta.text}
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        {slides.length > 1 && (
          <>
            {/* Previous/Next Buttons */}
            <button
              type="button"
              className={`${styles.heroNavButton} ${styles.heroNavPrev}`}
              onClick={goToPrevSlide}
              aria-label="Previous slide"
              onFocus={handleUserInteraction}
            >
              <span className={styles.heroNavIcon}>‹</span>
            </button>

            <button
              type="button"
              className={`${styles.heroNavButton} ${styles.heroNavNext}`}
              onClick={goToNextSlide}
              aria-label="Next slide"
              onFocus={handleUserInteraction}
            >
              <span className={styles.heroNavIcon}>›</span>
            </button>

            {/* Slide Indicators */}
            <div
              className={styles.heroIndicators}
              role="tablist"
              aria-label="Slide navigation"
            >
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`${styles.heroIndicator} ${index === currentSlide ? styles.active : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-selected={index === currentSlide}
                  role="tab"
                  onFocus={handleUserInteraction}
                >
                  <span className={styles.srOnly}>Slide {index + 1}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
