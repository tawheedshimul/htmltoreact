import React from 'react'
import Navbar from './Pages/MenuBar'
import RoadmapSection from './Pages/RoadmapSection'
import TeamSection from './Pages/TeamSection'
import WorkingLeadersSection from './Pages/WorkingLeadersSection'
import CheapestSection from './Pages/CheapestSection'
import Coin from './Pages/Coin'
import Footer from './Pages/Footer'
import "./App.css"
import ContactPage from './Pages/Contact'
import Banner from './Pages/Banner'
import NoFees from './Pages/NoFees'
import TokenEconomy from './Pages/TokenEconomy'
import GdpCoin from './Pages/GdpCoin'
import BlueSection from './Pages/BlueSection'

function App() {
  return (
    <div style={{ background: 'black', color: 'white' }}>
      <Navbar />
      <Banner />
      <BlueSection />
      <GdpCoin />
      <NoFees />
      <TokenEconomy />
      <CheapestSection />
      <WorkingLeadersSection />
      <TeamSection />
      <RoadmapSection />
      <Coin />
      <ContactPage />
      <Footer />
    </div>
  )
}

export default App