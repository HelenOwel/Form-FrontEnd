import React from 'react'
import Login from './compnents/Login'
import Signup from './compnents/Signup'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="login" element={<Login />} />
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App