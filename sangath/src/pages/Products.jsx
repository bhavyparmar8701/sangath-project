import { useEffect, useRef } from 'react'
import './Products.css'

function Products({ setCurrentPage }) {
  const categoryRefs = useRef({})

  useEffect(() => {
    document.title = 'Products – Sangath Global Exim | Agricultural Commodities'
  }, [])

  const categories = [
    {
      id: 'spices',
      name: 'Spices',
      products: [
        { id: 'cumin-seeds', name: 'Cumin Seeds', description: 'Premium quality cumin seeds with rich aroma and flavor, perfect for culinary use.', image: '🌿' },
        { id: 'turmeric', name: 'Turmeric Powder', description: 'Pure organic turmeric powder with high curcumin content for health benefits.', image: '🟡' },
        { id: 'coriander', name: 'Coriander Seeds', description: 'Fresh coriander seeds with distinct citrusy flavor, ideal for spice blends.', image: '🌱' },
        { id: 'black-pepper', name: 'Black Pepper', description: 'Premium black pepper corns with sharp, pungent flavor and aroma.', image: '⚫' },
        { id: 'cardamom', name: 'Cardamom', description: 'Green cardamom pods with sweet, aromatic flavor, perfect for desserts and tea.', image: '💚' },
        { id: 'chili-powder', name: 'Red Chili Powder', description: 'Fiery red chili powder with medium heat level, great for curries.', image: '🌶️' }
      ]
    },
    {
      id: 'oil-seeds',
      name: 'Oil Seeds',
      products: [
        { id: 'mustard-seeds', name: 'Mustard Seeds', description: 'High-quality mustard seeds rich in oil content, perfect for oil extraction.', image: '🟡' },
        { id: 'sunflower-seeds', name: 'Sunflower Seeds', description: 'Premium sunflower seeds with high nutritional value and oil content.', image: '🌻' },
        { id: 'sesame-seeds', name: 'Sesame Seeds', description: 'White sesame seeds packed with healthy fats and essential nutrients.', image: '⚪' },
        { id: 'groundnut', name: 'Groundnut', description: 'Premium quality groundnuts, excellent source of protein and healthy fats.', image: '🥜' },
        { id: 'soybean', name: 'Soybean', description: 'High-protein soybeans ideal for oil extraction and animal feed.', image: '🟢' },
        { id: 'rapeseed', name: 'Rapeseed', description: 'Quality rapeseed with high oil yield, perfect for cooking oil production.', image: '🟡' }
      ]
    },
    {
      id: 'fresh-vegetables',
      name: 'Fresh Vegetables',
      products: [
        { id: 'tomatoes', name: 'Fresh Tomatoes', description: 'Ripe, red tomatoes perfect for salads, cooking, and processing.', image: '🍅' },
        { id: 'onions', name: 'Onions', description: 'Premium quality onions with strong flavor, ideal for cooking and storage.', image: '🧅' },
        { id: 'potatoes', name: 'Potatoes', description: 'Fresh potatoes, versatile and nutritious, perfect for various dishes.', image: '🥔' },
        { id: 'carrots', name: 'Carrots', description: 'Sweet, crunchy carrots rich in beta-carotene and vitamins.', image: '🥕' },
        { id: 'cabbage', name: 'Cabbage', description: 'Fresh green cabbage, crisp and perfect for salads and cooking.', image: '🥬' },
        { id: 'cauliflower', name: 'Cauliflower', description: 'Premium white cauliflower, fresh and nutritious for healthy meals.', image: '🥦' }
      ]
    },
    {
      id: 'others',
      name: 'Others',
      products: [
        { id: 'rice', name: 'Basmati Rice', description: 'Premium long-grain basmati rice with aromatic fragrance and fluffy texture.', image: '🍚' },
        { id: 'wheat', name: 'Wheat', description: 'High-quality wheat grains, perfect for flour production and animal feed.', image: '🌾' },
        { id: 'sugar', name: 'Refined Sugar', description: 'Pure white refined sugar, ideal for food processing and retail.', image: '🍬' },
        { id: 'tea', name: 'Tea Leaves', description: 'Premium tea leaves from renowned gardens, perfect for export.', image: '🍵' },
        { id: 'coffee', name: 'Coffee Beans', description: 'Arabica coffee beans with rich flavor and aroma, premium quality.', image: '☕' },
        { id: 'honey', name: 'Pure Honey', description: 'Natural pure honey, unprocessed and rich in antioxidants.', image: '🍯' }
      ]
    }
  ]

  const scrollToCategory = (categoryId) => {
    const element = categoryRefs.current[categoryId]
    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="products-page">
      <div className="page-header">
        <div className="container">
          <h1>Our Products</h1>
          <p className="page-subtitle">Premium Agricultural Commodities for Global Markets</p>
        </div>
      </div>

      <div className="container">
        {/* Category Navigation */}
        <nav className="category-nav" aria-label="Product categories">
          <ul className="category-nav-list">
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  className="category-nav-link"
                  onClick={() => scrollToCategory(category.id)}
                  aria-label={`Navigate to ${category.name} section`}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Products by Category */}
        {categories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            ref={(el) => (categoryRefs.current[category.id] = el)}
            className="category-section"
            aria-labelledby={`category-${category.id}`}
          >
            <h2 id={`category-${category.id}`} className="category-title">
              {category.name}
            </h2>
            <div className="products-grid" role="list">
              {category.products.map((product) => (
                <article
                  key={product.id}
                  className="product-card"
                  role="listitem"
                  tabIndex={0}
                  aria-label={`${product.name}, ${product.description}`}
                >
                  <div className="product-image">
                    <span className="product-emoji" role="img" aria-label={product.name}>
                      {product.image}
                    </span>
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-footer">
                      <button
                        className="btn-inquire"
                        onClick={() => setCurrentPage && setCurrentPage('contact')}
                        aria-label={`Inquire about ${product.name}`}
                      >
                        Inquire Now
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        {/* Call to Action */}
        <section className="products-cta">
          <div className="cta-box">
            <h2>Looking for Bulk Orders?</h2>
            <p>Contact us for competitive pricing and customized solutions</p>
            <button
              className="btn-contact"
              onClick={() => setCurrentPage && setCurrentPage('contact')}
              aria-label="Contact us for bulk orders"
            >
              Contact Us
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Products
