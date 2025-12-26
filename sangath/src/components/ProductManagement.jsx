import { useState, useEffect } from 'react'
import './ProductManagement.css'

function ProductManagement() {
  const [products, setProducts] = useState([])
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
    category: '',
    price: '',
    image: ''
  })
  const [editingId, setEditingId] = useState(null)

  // Load products from localStorage on mount
  useEffect(() => {
    const savedProducts = localStorage.getItem('sangath_products')
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts))
    }
  }, [])

  // Save products to localStorage whenever products change
  useEffect(() => {
    localStorage.setItem('sangath_products', JSON.stringify(products))
  }, [products])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (editingId) {
      // Update existing product
      setProducts(products.map(p => 
        p.id === editingId 
          ? { ...formData, id: editingId }
          : p
      ))
      setEditingId(null)
    } else {
      // Add new product
      const newProduct = {
        ...formData,
        id: Date.now().toString()
      }
      setProducts([...products, newProduct])
    }

    // Reset form
    setFormData({
      id: '',
      name: '',
      description: '',
      category: '',
      price: '',
      image: ''
    })
  }

  const handleEdit = (product) => {
    setFormData(product)
    setEditingId(product.id)
  }

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id))
    }
  }

  const handleCancel = () => {
    setFormData({
      id: '',
      name: '',
      description: '',
      category: '',
      price: '',
      image: ''
    })
    setEditingId(null)
  }

  return (
    <div className="product-management">
      <h2>Product Management</h2>
      
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-row">
          <div className="form-group">
            <label>Product Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter product name"
            />
          </div>
          <div className="form-group">
            <label>Category *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select category</option>
              <option value="spices">Spices</option>
              <option value="grains">Food Grains</option>
              <option value="pulses">Pulses</option>
              <option value="tea">Tea</option>
              <option value="sugar">Sugar</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Description *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Enter product description"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Price</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="e.g., $99/month or Contact for price"
            />
          </div>
          <div className="form-group">
            <label>Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Enter image URL or path"
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-button">
            {editingId ? 'Update Product' : 'Add Product'}
          </button>
          {editingId && (
            <button type="button" onClick={handleCancel} className="cancel-button">
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="products-list">
        <h3>Products List ({products.length})</h3>
        {products.length === 0 ? (
          <div className="empty-state">No products added yet</div>
        ) : (
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                {product.image && (
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                )}
                <div className="product-info">
                  <h4>{product.name}</h4>
                  <p className="product-category">{product.category}</p>
                  <p className="product-description">{product.description}</p>
                  {product.price && (
                    <p className="product-price">{product.price}</p>
                  )}
                </div>
                <div className="product-actions">
                  <button onClick={() => handleEdit(product)} className="edit-button">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(product.id)} className="delete-button">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductManagement

