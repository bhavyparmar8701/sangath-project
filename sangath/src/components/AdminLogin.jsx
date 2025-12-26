import { useState } from 'react'
import './AdminLogin.css'

function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // Default admin credentials (change these in production!)
  const ADMIN_USERNAME = 'admin'
  const ADMIN_PASSWORD = 'admin123'

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      onLogin()
    } else {
      setError('Invalid username or password')
    }
  }

  return (
    <div className="admin-login">
      <div className="login-container">
        <div className="login-header">
          <h1>Admin Login</h1>
          <p>Sangath Exports Ltd.</p>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="error-message">{error}</div>}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="login-footer">
          <p>Default: admin / admin123</p>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin

