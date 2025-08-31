// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import CustomCursor from './components/CustomCursor'
import LandingPage from './pages/LandingPage'
import './App.css'
import { Toaster } from "react-hot-toast";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <LandingPage />
      {location.pathname === "/" && <CustomCursor />} 
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
    </>
  )
}

export default App
