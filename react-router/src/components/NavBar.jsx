import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/Portafolio'>Portafolio</Link>
        </li>
        <li>
          <Link to='/Contacto'>Contacto</Link>
        </li>
      </ul>
    </nav>

  )
}

export default NavBar
