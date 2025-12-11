import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../contexts/UserContext'
import './Home.css'

function Home() {
  const { userDetails } = useUser()
  const navigate = useNavigate()

  const handleNewBlog = () => {
    navigate('/create-blog')
  }
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    console.log('Search phrase:', value)
  }
  
  const quotes = [
    "The art of writing is the art of discovering what you believe.",
    "Writing is thinking on paper.",
    "Every great blog post starts with a single word.",
    "Your voice matters. Share your story with the world.",
    "Blogging is a conversation, not a lecture."
  ]

  const [currentQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)])

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to BloggerGo!</h1>
        <p className="hero-subtitle">Your thoughts, your stories, your platform</p>
        <div className="hero-quote">
          <p>"{currentQuote}"</p>
        </div>
      </div>

      <div className="main-content">
        <div className="sidebar">
          {userDetails ? (
            <div className="user-details">
              <h3>👋 Hello, {userDetails.username}!</h3>
              <p><strong>Mobile:</strong> {userDetails.mobile}</p>
              <p><strong>DOB:</strong> {userDetails.dob}</p>
              <button onClick={() => navigate('/my-blogs')} className="profile-btn">
                View My Blogs
              </button>
            </div>
          ) : (
            <div className="user-details">
              <h3>Welcome to BloggerGo!</h3>
              <p>Join our community of writers and share your unique perspective with the world.</p>
              <button onClick={() => navigate('/userinfo')} className="profile-btn">
                Complete Profile
              </button>
            </div>
          )}

          <div className="blog-stats">
            <h4>📊 Platform Stats</h4>
            <div className="stat-item">
              <span className="stat-number">1,234</span>
              <span className="stat-label">Active Bloggers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5,678</span>
              <span className="stat-label">Published Posts</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">12,345</span>
              <span className="stat-label">Monthly Readers</span>
            </div>
          </div>
        </div>

        <div className="content-area">
          <div className="action-section">
            <h2>✍️ Start Writing Today</h2>
            <p>Share your thoughts, experiences, and expertise with our growing community.</p>
            <button onClick={handleNewBlog} className="new-blog-btn">
              📝 Create New Blog
            </button>
          </div>

          <div className="search-section">
            <h3>🔍 Discover Amazing Content</h3>
            <input 
              type="text" 
              placeholder="Search for blogs, topics, or authors..." 
              className="search-bar"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>

          <div className="features-section">
            <h3>🚀 Why Choose BloggerGo?</h3>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">✨</div>
                <h4>Easy to Use</h4>
                <p>Simple, intuitive interface for seamless blogging experience.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🌍</div>
                <h4>Global Reach</h4>
                <p>Connect with readers from around the world.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📈</div>
                <h4>Analytics</h4>
                <p>Track your blog's performance and engagement.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💡</div>
                <h4>Inspiration</h4>
                <p>Get inspired by our community of passionate writers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-section">
        <div className="footer-content">
          <h3>💭 Today's Writing Inspiration</h3>
          <p className="footer-text">
            "Every story you tell, every experience you share, has the power to inspire, educate, and connect. Your unique voice adds to the beautiful tapestry of human experience. Start writing today!"
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home