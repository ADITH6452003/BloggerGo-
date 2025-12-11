import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../contexts/UserContext'
import './UpdateProfile.css'

function UpdateProfile() {
  const [username, setUsername] = useState('')
  const [mobile, setMobile] = useState('')
  const [dob, setDob] = useState('')
  const navigate = useNavigate()
  const { isLoggedIn, userDetails, updateUserDetails } = useUser()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login')
    }
  }, [isLoggedIn, navigate])

  useEffect(() => {
    if (userDetails) {
      setUsername(userDetails.username || '')
      setMobile(userDetails.mobile || '')
      setDob(userDetails.dob || '')
    }
  }, [userDetails])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username && mobile && dob) {
      updateUserDetails({ username, mobile, dob })
      navigate('/')
    }
  }

  return (
    <div className="update-profile-page">
      <div className="update-profile-container">
        <h1>Update Profile</h1>
        
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
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
              placeholder="Enter your mobile number"
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

          <button type="submit" className="update-btn">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateProfile