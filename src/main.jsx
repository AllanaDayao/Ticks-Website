import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'

import Home from './pages/Home.jsx'
import NavBar from './components/Navbar.jsx'
import About from './pages/About.jsx'
import Research from './pages/Research.jsx'
import TickID from './pages/identification.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />

        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/about" element={ <About />} />
          <Route path="/research" element={ <Research />} />
          <Route path="/identification" element={ <TickID />} />

        </Routes>
        
    </BrowserRouter>
    
  </StrictMode>
)


