import React, { useState } from 'react'
import { StylesHeader } from './Styles'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkHome = () => {
    navigate('/');
    setMenuOpen(false);
  }

  const linkAbout = () => {
    navigate('/about');
    setMenuOpen(false);
  }

  return (
    <StylesHeader>
      <header>
        <h1><span>File</span> Converter</h1>

        <div className="links">
          {/* desktop */}
          <p className='desktop-link' onClick={linkHome}>Home</p>
          <p className='desktop-link' onClick={linkAbout}>About</p>

          {/* mobile */}
          <p className='mobile-link' onClick={() => setMenuOpen(true)}>☰</p>
        </div>
      </header>

      {/* overlay (fecha clicando fora) */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}

      {/* menu lateral */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <p onClick={linkHome}>Home</p>
        <p onClick={linkAbout}>About</p>
      </div>
    </StylesHeader>
  )
}

export default Header
