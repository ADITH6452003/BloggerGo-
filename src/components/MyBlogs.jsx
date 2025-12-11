import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../contexts/UserContext'
import './MyBlogs.css'

function MyBlogs() {
  const navigate = useNavigate()
  const { isLoggedIn } = useUser()
  const [blogs] = useState([
    {
      id: 1,
      title: "Getting Started with React",
      content: "React is a powerful JavaScript library for building user interfaces...",
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "Understanding JavaScript Closures",
      content: "Closures are one of the most important concepts in JavaScript...",
      date: "2024-01-10"
    }
  ])

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login')
    }
  }, [isLoggedIn, navigate])

  return (
    <div className="my-blogs-page">
      <div className="my-blogs-container">
        <h1>My Blogs</h1>
        
        {blogs.length === 0 ? (
          <div className="no-blogs">
            <p>You haven't created any blogs yet.</p>
          </div>
        ) : (
          <div className="blogs-grid">
            {blogs.map(blog => (
              <div key={blog.id} className="blog-card">
                <h3>{blog.title}</h3>
                <p className="blog-date">{new Date(blog.date).toLocaleDateString()}</p>
                <p className="blog-preview">{blog.content.substring(0, 150)}...</p>
                <div className="blog-actions">
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default MyBlogs