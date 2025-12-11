import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../contexts/UserContext'
import './Login.css'
import bgImage from '../assets/img.webp'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { login } = useUser()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && password) {
      login()
      navigate('/userinfo')
    }
  }

  return (
    <div className="login-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="login-box">
        <h1 className="login-title">Welcome to BloggerGo!</h1>
        <p className="login-subtitle">Sign in to your blogging account</p>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
            />
          </div>
          
          <button type="submit" className="login-button">Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default Login