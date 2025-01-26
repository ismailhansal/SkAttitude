import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Discovery from "./components/Discovery"
import Services from "./components/Services"
import Footer from "./components/Footer"


function App() {

  return (
    <>


    <main className="flex flex-col items-center">
  <Navbar/>
  <Hero/>
  <Discovery/>
  <Services/>
  <Footer/>
  

  </main>

  </>

      
  )
}

export default App
