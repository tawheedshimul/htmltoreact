import React from 'react'
import Navbar from './Pages/MenuBar/MenuBar'
import RoadmapSection from './Pages/RoadmapSection/RoadmapSection'
import TeamSection from './Pages/TeamSection'
import WorkingLeadersSection from './Pages/WorkingLeadersSection'
import CheapestSection from './Pages/CheapestSection/CheapestSection'
import Coin from './Pages/Coin/Coin'
import Footer from './Pages/Footer/Footer'

function App() {
  return (
    <div style={{ background: 'black', color: 'white'}}>
      <Navbar/>
      <CheapestSection/>
      <WorkingLeadersSection/>
      <TeamSection/>
      <RoadmapSection/>
      <Coin/>
      <Footer/>
    </div>
  )
}

export default App