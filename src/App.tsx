import React, { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './index.scss'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'

const App = () => {
  return (
    <div className="app">
      <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
