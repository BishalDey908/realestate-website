import './App.css'
import Navbar from './Components/Navbar'
import FirstSection from './pages/FirstSection'
import FourthSection from './pages/FourthSection'
import Landingpage from './pages/Landingpage'
import SecondSection from './pages/SecondSection'
import ThirdSection from './pages/ThirdSection'
import FifthSection from './pages/FifthSection'
import EighthSection from './pages/EighthSection'


function App() {
  

  return (
    <>
    <Navbar/>
      <Landingpage/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      
      {/* the other components is on fifthSection */}
      
    </>
  )
}

export default App
