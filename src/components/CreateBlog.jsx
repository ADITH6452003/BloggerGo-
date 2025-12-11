import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../contexts/UserContext'
import './CreateBlog.css'

function CreateBlog() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const navigate = useNavigate()
  const { isLoggedIn } = useUser()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login')
    }
  }, [isLoggedIn, navigate])

  const handleCreate = () => {
    console.log('Topic:', title)
    console.log('Blog:', content)
  }


  return (
    <div className="create-blog-page">
      <div className="create-blog-container">
        <h1>Create New Blog</h1>
        
        <div className="form-group">
          <label htmlFor="title"><b>TITLE OF THE BLOG</b></label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog title..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">BLOG CONTENT</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your blog content here..."
            rows={10}
          />
        </div>
        
        <button onClick={handleCreate} className="create-btn">
          Create
        </button>
      </div>
    </div>
  )
}

export default CreateBlog