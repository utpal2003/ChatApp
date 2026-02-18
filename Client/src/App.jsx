import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[url('./assets/bgimage.avif')] bg-cover bg-center bg-no-repeat">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profilepage' element={<ProfilePage />} />
      </Routes>
    </div>
  )
}

export default App
