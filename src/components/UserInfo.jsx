import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../contexts/UserContext'
import './UserInfo.css'

function UserInfo() {
  const [username, setUsername] = useState('')
  const [mobile, setMobile] = useState('')
  const [dob, setDob] = useState('')
  const navigate = useNavigate()
  const { updateUserDetails } = useUser()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username && mobile && dob) {
      updateUserDetails({ username, mobile, dob })
      navigate('/')
    }
  }

  return (
    <div className="userinfo-container">
      <div className="userinfo-box">
        <h1 className="userinfo-title">Complete Your Profile</h1>
        <p className="userinfo-subtitle">Tell us a bit about yourself</p>
        
        <form onSubmit={handleSubmit} className="userinfo-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="tel"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="userinfo-button">Continue</button>
        </form>
      </div>
    </div>
  )
}

export default UserInfo
