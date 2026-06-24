import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import NavBar from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <Home />
  </StrictMode>
)


