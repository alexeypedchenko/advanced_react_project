import './styles/index.scss'

import React, { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <button onClick={toggleTheme}>toggle theme</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
