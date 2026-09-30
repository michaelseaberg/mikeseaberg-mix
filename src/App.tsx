import { useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import Bio from './pages/Bio'
import Credits from './pages/Credits'
import Contact from './pages/Contact'

const titles: Record<string, string> = {
  '/': 'Mike Seaberg — Mixing Engineer',
  '/bio': 'Bio — Mike Seaberg',
  '/credits': 'Credits — Mike Seaberg',
  '/contact': 'Contact — Mike Seaberg',
}

function AnimatedRoutes() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = titles[location.pathname] ?? titles['/']
  }, [location.pathname])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <main>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <AnimatedRoutes />
    </BrowserRouter>
  )
}
