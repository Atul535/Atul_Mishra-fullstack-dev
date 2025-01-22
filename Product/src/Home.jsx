import React from 'react'
import Product from './Product'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate=useNavigate()
    const logout = () => {
        navigate('/')
    }
  return (
    <>
      <nav className="navbar">
        <button onClick={logout}>Logout</button>
      </nav>
      <div id="outer">
        <Product />
      </div>
    </>
  )
}

export default Home
