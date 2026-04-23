import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Collection from "./components/Collection"
import Gallery from "./components/Gallery"
import About from "./components/About"
import Founder from "./components/Founder"
import Contact from "./components/Contact"
import Testimonials from "./components/Testimonials"

function App () {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <Collection/>
      <Gallery/>
      <Founder/>
      <Testimonials/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App