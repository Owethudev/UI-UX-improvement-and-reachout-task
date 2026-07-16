import Hero from '../components/home/Hero'
import Categories from '../components/home/Categories'
import FeaturedProducts from '../components/home/FeaturedProducts'
import Newsletter from '../components/home/Newsletter'

function Home() {
  return (
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Newsletter />
    </div>
  )
}

export default Home
