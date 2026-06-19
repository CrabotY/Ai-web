import { useEffect, useState } from 'react'

const romanPhoto = '/roman.jpg'

export default function BioHero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="bio-hero">
      {/* Background blobs */}
      <div className="bio-hero__bg">
        <div className="blob blob--purple" />
        <div className="blob blob--red" />
        <div className="blob blob--blue" />
        <div className="bio-hero__grid" />
      </div>

      <div className={`bio-hero__content ${loaded ? 'bio-hero__content--visible' : ''}`}>
        {/* Photo */}
        <div className="bio-hero__photo-wrap">
          <div className="bio-hero__photo-glow" />
          <img
            src={romanPhoto}
            alt="Роман Игнатович"
            className="bio-hero__photo"
          />
          <div className="bio-hero__photo-ring" />
        </div>

        {/* Text */}
        <div className="bio-hero__text">
          <div className="bio-hero__badge">
            <span className="badge-dot" />
            Биография
          </div>
          <h1 className="bio-hero__name">
            Роман <span className="gradient-text">Игнатович</span>
          </h1>
          <p className="bio-hero__tagline">
            Геймер · Фурри · Затрат
          </p>
          <div className="bio-hero__tags">
            {['Valorant', 'Furry', 'Big Spender', 'Gamer'].map((tag) => (
              <span key={tag} className="bio-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="bio-hero__scroll">
        <div className="scroll-line" />
        <span>Скролли вниз</span>
      </div>
    </section>
  )
}
