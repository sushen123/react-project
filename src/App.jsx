

import { useState } from 'react'
import './api.css'
import { OTPrequest, OTPverified } from './api'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  const [otp, setOtp] = useState("");

  return (
  
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<OTPrequest setOtp={setOtp} />} />
        <Route path="/otp-verified" element={<OTPverified otp={otp} />} />
    </Routes>
</BrowserRouter>
  )
}

export default App
