import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import HomePage from './pages/Homepage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </>
  )
}

export default App
