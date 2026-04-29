import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Collection from "./components/Collection"
import ReadyWear from "./components/ReadyWear"
import Gallery from "./components/Gallery"
import About from "./components/About"
import Founder from "./components/Founder"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"

import AdminLogin from "./components/AdminLogin"
import AdminDashboard from "./components/AdminDashboard"

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Collection />
      <Gallery />
      <Founder />
      <ReadyWear />
      <Testimonials />
      <About />
      <Contact />
    </>
  )
}

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/admin-login"
        element={<AdminLogin />}
      />

      <Route
        path="/admin-dashboard"
        element={<AdminDashboard />}
      />

    </Routes>
  )
}

export default App