import { useState } from 'react'
import AdminLogin from '../components/AdminLogin'
import AdminDashboard from '../components/AdminDashboard'
import './Admin.css'

function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />
  }

  return <AdminDashboard onLogout={handleLogout} />
}

export default Admin

