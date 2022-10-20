import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Portafolio = () => {
  return (
    <>
      <h1>Portafolio</h1>

      <nav>
        <ul>
          <li>
            <Link to='/Portafolio/1'>Pinterest</Link>
          </li>
          <li>
            <Link to='/Portafolio/2'>Cajero</Link>
          </li>
          <li>
            <Link to='/Portafolio/3'>Pokedex</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>

  )
}

export default Portafolio
