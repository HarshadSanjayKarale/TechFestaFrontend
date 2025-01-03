import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { CategoryNav } from './components/category-nav'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <div className="max-w-9xl mx-auto py-6 sm:px-6 lg:px-8">
                <CategoryNav/>
                <Features/>
                <HowItWorks/>
                <Testimonials/>
                <Footer/>
              </div>
            </main>
          } />
          <Route path="/deals" element={<div>Deals Page</div>} />
          <Route path="/support" element={<div>Support Page</div>} />
          <Route path="/partnership" element={<div>Partnership Page</div>} />
          <Route path="/bookings" element={<div>Bookings Page</div>} />
          <Route path="/login" element={<div>Login Page</div>} />
          <Route path="/register" element={<div>Register Page</div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

