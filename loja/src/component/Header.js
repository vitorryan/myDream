import React from 'react'
import logo from '../assets/logo.jpg';


function Header() {
  return (
    <div>
        <div className="logoImg">
            <img src={logo} alt="Logo da empresa" />
        </div>
    </div>
  )
}

export default Header