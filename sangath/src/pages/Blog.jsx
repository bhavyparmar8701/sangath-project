import './Blog.css'

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Agricultural Export Regulations',
      date: 'November 15, 2024',
      excerpt: 'Learn about the latest regulations and requirements for agricultural exports.',
      category: 'Export Guide'
    },
    {
      id: 2,
      title: 'Best Practices for Organic Farming',
      date: 'November 10, 2024',
      excerpt: 'Discover sustainable farming methods that benefit both farmers and consumers.',
      category: 'Farming Tips'
    },
    {
      id: 3,
      title: 'Market Trends in Agricultural Products',
      date: 'November 5, 2024',
      excerpt: 'Stay updated with the latest market trends and pricing information.',
      category: 'Market News'
    },
    {
      id: 4,
      title: 'Quality Control in Food Processing',
      date: 'October 28, 2024',
      excerpt: 'How we ensure the highest quality standards in our processing facilities.',
      category: 'Quality'
    },
  ]

  return (
    <div className="blog-page">
      <div className="container">
        <h1 className="page-title">Blog</h1>
        <p className="page-subtitle">Latest news and insights from the agricultural industry</p>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image-placeholder">
                <span className="blog-icon">📰</span>
              </div>
              <div className="blog-content">
                <div className="blog-category">{post.category}</div>
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-footer">
                  <span className="blog-date">{post.date}</span>
                  <button className="read-more">Read More →</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog

