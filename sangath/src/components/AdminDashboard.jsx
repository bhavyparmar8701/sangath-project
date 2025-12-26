import ProductManagement from './ProductManagement'
import './AdminDashboard.css'

function AdminDashboard({ onLogout }) {

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <button onClick={onLogout} className="logout-button">
          Logout
        </button>
      </div>

      <div className="dashboard-content">
        <ProductManagement />
      </div>
    </div>
  )
}

export default AdminDashboard

