import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  )
}
