import React from 'react'
import './header.scss'

const Header = () => {
  return (
    <nav className='header'>
      <a href='/' className='header__logo'>LOGO</a>
      <ul className='header__nav-list'>
        <li className='header__list-item'>
          <a href='/secret' className='header__item-link'>Secret</a>
        </li>
        <li className='header__list-item'>
          <a href='/secret' className='header__item-link'>Login</a>
        </li>
        <li className='header__list-item'>
          <a href='/secret' className='header__item-link'>SignUp</a>
        </li>

      </ul>
    </nav>
  )
}

export default Header
