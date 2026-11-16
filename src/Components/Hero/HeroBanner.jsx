import React, { useState, useEffect } from 'react';
import './HeroBanner.css';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  WhatsAppIcon,
  PhoneIcon,
  CloseIcon,
} from '../Common/Icons';

const HERO_SLIDES = [
  {
    id: 1,
    theme: 'grandeur',
    subtitle: 'Where Gifting Meets',
    title: 'Aesthetics',
    tagline: 'CURATED • KOREAN • THOUGHTFUL',
    ctaText: 'SHOP HAMPERS',
    category: 'Aesthetic Hampers',
    ctaLink: '#aesthetic-hampers',
    bgImage: '/images/hero-banner-cropped.png',
    accentColor: '#9b7ede',
  },
  {
    id: 2,
    theme: 'celebrity',
    subtitle: 'Signature Collections',
    title: 'The Tara Luxe Edits',
    tagline: 'TRADITIONAL • ANTI-TARNISH • ELEGANT',
    ctaText: 'EXPLORE TARA LUXE',
    category: 'Anti-Tarnish',
    ctaLink: '#tara-luxe',
    bgImage: '/images/reference-hero.png',
    accentColor: '#f7c5d8',
  },
  {
    id: 3,
    theme: 'festive',
    subtitle: 'PACKED WITH LOVE',
    title: 'The Gifting Studio',
    tagline: 'KOREAN • TRADITIONAL • CURATED',
    ctaText: 'CUSTOMIZE HAMPER',
    category: 'Customize Hamper',
    ctaLink: '#create-your-own',
    bgImage: '/images/bangles.png',
    accentColor: '#c9ece1',
  },
];

export default function HeroBanner({ onCtaClick }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const displayPhone = '+91 78715 01939';
  const whatsappNumber = '917871501939';
  const whatsappMessage = encodeURIComponent(
    'Hello Aztheticlyf! I need help curating a custom gift hamper.'
  );

  // Auto advance slides every 7 seconds
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      className="hero-banner-section"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Background Image Container */}
      <div className="hero-banner-viewport">
        <div
          className="hero-banner-slide"
          style={{
            backgroundImage: `url(${slide.bgImage})`,
          }}
        >
          {/* Subtle gradient vignette to ensure text contrast */}
          <div className="hero-overlay-gradient"></div>

          {/* Left Arrow Navigation Button */}
          <button
            type="button"
            className="hero-arrow-btn left-arrow"
            onClick={prevSlide}
            aria-label="Previous Slide"
          >
            <ChevronLeftIcon size={26} color="#ffffff" />
          </button>

          {/* Right Arrow Navigation Button */}
          <button
            type="button"
            className="hero-arrow-btn right-arrow"
            onClick={nextSlide}
            aria-label="Next Slide"
          >
            <ChevronRightIcon size={26} color="#ffffff" />
          </button>

          {/* Hero Content Overlay */}
          <div className="hero-content-container">
            <div className="hero-text-block">
              <span className="hero-subtitle">{slide.subtitle}</span>

              <h1 className="hero-title-script">{slide.title}</h1>

              <p className="hero-tagline">{slide.tagline}</p>

              <div className="hero-cta-wrapper">
                <button
                  type="button"
                  className="hero-luxury-cta"
                  onClick={() => onCtaClick && onCtaClick(slide)}
                >
                  {slide.ctaText}
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Left Concierge Chat Trigger */}
          <div className="concierge-trigger-wrap">
            <button
              type="button"
              className="concierge-avatar-btn"
              onClick={() => setIsConciergeOpen((prev) => !prev)}
              aria-label="Chat with Aztheticlyf Concierge"
              title="Chat with Aztheticlyf Gift Stylist"
            >
              <div className="concierge-avatar-ring">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80"
                  alt="Aztheticlyf Gift Stylist"
                  className="concierge-avatar-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <span className="online-status-dot"></span>
              </div>
            </button>

            {/* Concierge Popover Card */}
            {isConciergeOpen && (
              <div className="concierge-card-popover">
                <button
                  type="button"
                  className="concierge-close-btn"
                  onClick={() => setIsConciergeOpen(false)}
                  aria-label="Close Concierge Chat"
                >
                  <CloseIcon size={16} color="#6e657a" />
                </button>
                <div className="concierge-card-header">
                  <div className="concierge-card-avatar">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&auto=format&fit=crop&q=80"
                      alt="Aztheticlyf Stylist"
                    />
                  </div>
                  <div>
                    <h5>Aztheticlyf | Gift Studio</h5>
                    <span className="concierge-status-badge">Online Now</span>
                  </div>
                </div>
                <p className="concierge-card-msg">
                  Looking for Korean stationery, anti-tarnish jewellery, or a custom saree hamper? Let’s curate it together!
                </p>
                <div className="concierge-action-btns">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="concierge-whatsapp-btn"
                  >
                    <WhatsAppIcon size={16} />
                    <span>WhatsApp Studio</span>
                  </a>
                  <a
                    href={`tel:+${whatsappNumber}`}
                    className="concierge-call-btn"
                  >
                    <PhoneIcon size={15} />
                    <span>Call {displayPhone}</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Slide Indicator Dots */}
          <div className="hero-indicators">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`indicator-dot ${currentSlide === idx ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}