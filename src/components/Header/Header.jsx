import React from 'react'
import { StylesHeader } from './Styles'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate();

  const linkHome = () => {
    navigate('/');
  }

   const linkAbout = () => {
    navigate('/about');
  }

  return (
    
    <StylesHeader>

         <header>
          <h1><span>File</span> Converter</h1>
          <div className="links">
            <p className='desktop-link' onClick={linkHome}>Home</p>
            <p className='desktop-link' onClick={linkAbout}>About</p>
            <p className='mobile-link'>☰</p>
          </div>

      </header>

    </StylesHeader>
     
    

  
  )
}

export default Header