import Navbar from '../components/navigation/Navbar'
import Footer from '../components/layout/Footer'
import PageContainer from '../components/layout/PageContainer'

function MainLayout({ children }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </div>
  )
}

export default MainLayout
