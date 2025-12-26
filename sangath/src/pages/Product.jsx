import { useState, useEffect } from 'react'
import './Product.css'

function Product() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    const savedProducts = localStorage.getItem('sangath_products')
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts))
    }

    // Check if category was selected from dropdown
    const category = localStorage.getItem('selectedCategory')
    if (category) {
      setSelectedCategory(category)
      localStorage.removeItem('selectedCategory') // Clear after reading
    }
  }, [])

  // Listen for storage changes
  useEffect(() => {
    const handleStorageChange = () => {
      const savedProducts = localStorage.getItem('sangath_products')
      if (savedProducts) {
        setProducts(JSON.parse(savedProducts))
      }
    }
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  // Filter products by category if selected
  const filteredProducts = selectedCategory
    ? products.filter(p => p.category && p.category.toLowerCase() === selectedCategory.toLowerCase())
    : products

  return (
    <div className="product-page">
      <div className="container">
        <h1 className="page-title">Our Products</h1>
        <p className="page-subtitle">
          {selectedCategory 
            ? `Showing products in category: ${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`
            : 'Explore our wide range of agricultural products'
          }
        </p>

        {selectedCategory && (
          <div className="category-filter">
            <button 
              className="clear-filter-btn"
              onClick={() => setSelectedCategory(null)}
            >
              ✕ Clear Filter
            </button>
          </div>
        )}

        {filteredProducts.length === 0 ? (
          <div className="no-products">
            <p>
              {selectedCategory 
                ? `No products found in category "${selectedCategory}". Please add products from the admin panel.`
                : 'No products available. Please add products from the admin panel.'
              }
            </p>
          </div>
        ) : (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`product-card ${selectedProduct === product.id ? 'selected' : ''}`}
                onClick={() => setSelectedProduct(product.id)}
              >
                {product.image && (
                  <div className="product-image-wrapper">
                    <img src={product.image} alt={product.name} />
                  </div>
                )}
                <div className="product-header">
                  <h3>{product.name}</h3>
                  {product.price && (
                    <div className="product-price">{product.price}</div>
                  )}
                </div>
                {product.category && (
                  <div className="product-category-badge">{product.category}</div>
                )}
                <p className="product-description">{product.description}</p>
                <button className="product-button">
                  {selectedProduct === product.id ? 'Selected' : 'View Details'}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Product

