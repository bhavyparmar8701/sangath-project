import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import ExportsImports from './pages/ExportsImports'
import Quality from './pages/Quality'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    // Initialize from URL path
    const path = window.location.pathname
    return path === '/admin' ? 'admin' : 'home'
  })

  // Check URL path for admin route and handle navigation
  useEffect(() => {
    const checkPath = () => {
      const path = window.location.pathname
      if (path === '/admin') {
        setCurrentPage('admin')
      } else if (currentPage === 'admin' && path !== '/admin') {
        // If we're on admin but URL changed away from /admin, reset
        setCurrentPage('home')
      }
    }
    
    // Listen for popstate (browser back/forward)
    window.addEventListener('popstate', checkPath)
    
    return () => {
      window.removeEventListener('popstate', checkPath)
    }
  }, [currentPage])

  // Check if admin page
  if (currentPage === 'admin') {
    return <Admin />
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />
      case 'products':
        return <Products setCurrentPage={setCurrentPage} />
      case 'about':
        return <About />
      case 'exports-imports':
        return <ExportsImports setCurrentPage={setCurrentPage} />
      case 'quality':
        return <Quality />
      case 'contact':
        return <Contact />
      default:
        return <Home setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="app">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App
