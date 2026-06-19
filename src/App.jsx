import BioHero from './components/BioHero'
import BioAbout from './components/BioAbout'
import BioGaming from './components/BioGaming'
import BioFurry from './components/BioFurry'
import BioFooter from './components/BioFooter'

function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f' }}>
      <BioHero />
      <BioAbout />
      <BioGaming />
      <BioFurry />
      <BioFooter />
    </div>
  )
}

export default App
