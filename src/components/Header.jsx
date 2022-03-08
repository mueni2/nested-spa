import React from 'react'
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header>
   <img src={logo} alt='logo' />
  {/*  <img src={require(`../assets/logo.png`)} alt='' /> */}
    </header>
  )
}

export default Header

