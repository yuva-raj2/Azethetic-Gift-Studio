import React, { useState, useEffect, useCallback, useRef } from 'react';
import './InstagramFeed.css';

const INSTAGRAM_POSTS = [
  {
    id: 'ig-1',
    type: 'image',
    handle: 'aztheticlyf',
    profileUrl: 'https://www.instagram.com/aztheticlyf/',
    postUrl: 'https://www.instagram.com/aztheticlyf/p/DY1FTbJs5xN/',
    image: '/images/InstaFeed-1.png',
    caption:
      'Turn everyday moments into happy little memories with our adorable pastel-themed hamper! Packed with cute stationery, fun collectibles, and colorful accessories that are perfect for kids, gifting, return gifts, and stationery lovers',
    date: 'May 27',
    tag: 'Birthday Gifts',
  },
  {
    id: 'ig-2',
    type: 'image',
    handle: 'tara.luxe.in',
    profileUrl: 'https://www.instagram.com/tara.luxe.in/',
    postUrl: 'https://www.instagram.com/tara.luxe.in/',
    image: '/images/Anniversary-Hamper.png',
    caption:
      'Waterproof, sweat-proof, and made for everyday elegance ✨ Our 18k gold-plated anti-tarnish pieces paired with traditional saree drapes make unforgettable anniversary keepsakes. 💛\n\n[tara luxe, anti tarnish jewellery, saree hamper, anniversary gift box]',
    date: 'November 12',
    tag: 'Tara Luxe',
  },
  {
    id: 'ig-3',
    type: 'video',
    // Optional: Add local .mp4 in public/videos/ for native autoplay without Instagram login walls:
    // video: '/videos/InstaFeed-3.mp4',
    handle: 'aztheticlyf',
    profileUrl: 'https://www.instagram.com/aztheticlyf/',
    postUrl: 'https://www.instagram.com/aztheticlyf/reel/DePLhpDpT90/',
    image: '/images/InstaFeed-3.png',
    caption:
      'For the stationery obsessed bestie 🎀 Pastel journals, smooth gel pens, cute sticker sheets, and scented candles wrapped in our signature floral box.\n\n[korean stationery, birthday gift box, pastel aesthetic, cute gifts]',
    date: 'November 6',
    tag: 'Stationery Drop',
  },
  {
    id: 'ig-4',
    type: 'image',
    handle: 'aztheticlyf',
    profileUrl: 'https://www.instagram.com/aztheticlyf/',
    postUrl: 'https://www.instagram.com/aztheticlyf/',
    image: '/images/Wedding-Gifting.png',
    caption:
      'Trousseau trunks & wedding return favors crafted with timeless grace 💍✨ Customise your wedding hampers with traditional sarees, dry fruit jars & personalised notes.\n\n[wedding gifting, bridal trousseau, wedding return gifts, aesthetic hampers]',
    date: 'November 6',
    tag: 'Wedding Edit',
  },
  {
    id: 'ig-5',
    type: 'image',
    handle: 'aztheticlyf',
    profileUrl: 'https://www.instagram.com/aztheticlyf/',
    postUrl: 'https://www.instagram.com/aztheticlyf/',
    image: '/images/Personalized-Images.png',
    caption:
      'Some bonds come with endless teasing, little fights, and a whole lot of memories ❤️ Turn your favourite snapshots into retro polaroid keepsake boxes.\n\n[personalised gifts, polaroid gift box, memory keepsake, couple gifting]',
    date: 'November 3',
    tag: 'Personalised',
  },
  {
    id: 'ig-6',
    type: 'image',
    handle: 'aztheticlyf',
    profileUrl: 'https://www.instagram.com/aztheticlyf/',
    postUrl: 'https://www.instagram.com/aztheticlyf/',
    image: '/images/Bulk-Order-Gift.png',
    caption:
      'Corporate milestones & festive bulk gifting, elevated 🥂 Custom branding, gourmet treats, and pastel keepsakes delivered pan-India.\n\n[corporate gifting, bulk hampers, event return favors, aztheticlyf]',
    date: 'October 29',
    tag: 'Bulk & Corporate',
  },
];

// Converts an Instagram post or reel URL into an embeddable URL
function getInstagramEmbedUrl(postUrl) {
  if (!postUrl) return null;
  const match = postUrl.match(/instagram\.com\/(?:[^/]+\/)?(p|reel|reels)\/([^/?#&]+)/i);
  if (!match) return null;
  const mediaType = match[1].toLowerCase() === 'reels' ? 'reel' : match[1].toLowerCase();
  const shortcode = match[2];
  return `https://www.instagram.com/${mediaType}/${shortcode}/embed/`;
}

export default function InstagramFeed() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const closeModal = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const showPrev = useCallback((e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === 0 ? INSTAGRAM_POSTS.length - 1 : prev - 1
    );
  }, []);

  const showNext = useCallback((e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === INSTAGRAM_POSTS.length - 1 ? 0 : prev + 1
    );
  }, []);

  // Keyboard navigation (Escape, Left Arrow, Right Arrow)
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex, closeModal, showPrev, showNext]);

  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted((prev) => {
      const next = !prev;
      if (videoRef.current) {
        videoRef.current.muted = next;
      }
      return next;
    });
  };

  const activePost =
    selectedIndex !== null ? INSTAGRAM_POSTS[selectedIndex] : null;
  const isVideoPost =
    activePost &&
    (activePost.type === 'video' ||
      Boolean(activePost.video) ||
      /\/reel\//i.test(activePost.postUrl || ''));
  const embedUrl = activePost ? getInstagramEmbedUrl(activePost.postUrl) : null;

  return (
    <section className="ig-feed-section" id="instagram-feed">
      <div className="ig-feed-container">
        <div className="ig-feed-header">
          <h2>Instagram</h2>
          <div className="ig-handles-row">
            <a
              href="https://www.instagram.com/aztheticlyf/"
              target="_blank"
              rel="noopener noreferrer"
              className="ig-handle-pill"
            >
              @aztheticlyf
            </a>
            <span className="ig-handle-dot">•</span>
            <a
              href="https://www.instagram.com/tara.luxe.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="ig-handle-pill"
            >
              @tara.luxe.in
            </a>
          </div>
        </div>

        {/* 6-Column Square Grid */}
        <div className="ig-strip-grid">
          {INSTAGRAM_POSTS.map((post, idx) => {
            const tileIsVideo =
              post.type === 'video' ||
              Boolean(post.video) ||
              /\/reel\//i.test(post.postUrl || '');

            return (
              <button
                key={post.id}
                type="button"
                className="ig-tile-btn"
                onClick={() => setSelectedIndex(idx)}
                aria-label={`View Instagram ${tileIsVideo ? 'reel' : 'post'} by @${post.handle}`}
              >
                <img
                  src={post.image}
                  alt={post.tag}
                  className="ig-tile-img"
                />

                {tileIsVideo && (
                  <span className="ig-reel-badge" aria-hidden="true">
                    ▶
                  </span>
                )}

                <div className="ig-tile-hover">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span>{tileIsVideo ? 'Watch Reel' : `@${post.handle}`}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox Pop-Up Modal */}
      {activePost && (
        <div
          className="ig-lightbox-backdrop"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={`Instagram post by ${activePost.handle}`}
        >
          {/* Top-Right Close Button */}
          <button
            type="button"
            className="ig-lightbox-close"
            onClick={closeModal}
            aria-label="Close Instagram popup"
          >
            ✕
          </button>

          {/* Left Navigation Arrow */}
          <button
            type="button"
            className="ig-lightbox-nav ig-nav-prev"
            onClick={showPrev}
            aria-label="Previous post"
          >
            ‹
          </button>

          {/* Split Post Card */}
          <div
            className="ig-lightbox-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Side: Local Video, Instagram Reel Embed, or Image */}
            <div className="ig-lightbox-media">
              {activePost.video ? (
                <>
                  <video
                    ref={videoRef}
                    key={activePost.video}
                    src={activePost.video}
                    poster={activePost.image}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="ig-lightbox-video"
                  />
                  <button
                    type="button"
                    className="ig-mute-btn"
                    onClick={toggleMute}
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  >
                    {isMuted ? '🔇' : '🔊'}
                  </button>
                </>
              ) : isVideoPost && embedUrl ? (
                <iframe
                  key={embedUrl}
                  src={embedUrl}
                  title={activePost.tag}
                  className="ig-lightbox-iframe"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <img src={activePost.image} alt={activePost.tag} />
              )}
            </div>

            {/* Right Side: Profile Header, Caption & Date */}
            <div className="ig-lightbox-details">
              <div className="ig-lightbox-top">
                <a
                  href={activePost.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ig-profile-link"
                >
                  <span className="ig-avatar-ring">
                    <span className="ig-avatar-initial">
                      {activePost.handle === 'tara.luxe.in' ? 'T' : 'A'}
                    </span>
                  </span>
                  <span className="ig-profile-name">{activePost.handle}</span>
                </a>

                <a
                  href={activePost.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ig-follow-btn"
                >
                  View Profile
                </a>
              </div>

              <div className="ig-lightbox-caption">
                {activePost.caption.split('\n').map((line, i) => (
                  <p key={i}>{line || <br />}</p>
                ))}
              </div>

              <div className="ig-lightbox-footer">
                <span className="ig-post-date">{activePost.date}</span>
                <a
                  href={activePost.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ig-open-app-link"
                >
                  Open on Instagram ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right Navigation Arrow */}
          <button
            type="button"
            className="ig-lightbox-nav ig-nav-next"
            onClick={showNext}
            aria-label="Next post"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}