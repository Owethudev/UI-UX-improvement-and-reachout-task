import heroBanner from '../../assets/images/hero-banner.webp'

function Hero() {
  return (
    <section style={{ display: 'grid', gap: '1rem', alignItems: 'center', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
      <div>
        <h1>Modern shopping experience</h1>
        <p>Designed for clarity, trust, and seamless mobile browsing.</p>
      </div>
      <img src={heroBanner} alt="Hero banner" style={{ width: '100%', borderRadius: '1rem' }} />
    </section>
  )
}

export default Hero
