import React from 'react'
import { NavBar } from './NavBar'
import { CartWidget } from './CartWidget'
import { Link } from 'react-router-dom'
import imgFacebook from '../../multimedia/logo_bitter_fondo_blanco.png' 



export const Header = () => {

  return (
    <header className="header">
        <Link to="/"><img src={imgFacebook} alt="Logo Bitter" className='logo-bitter'></img></Link>
        <h1 className='titulo-logo'>Bitter & Sour</h1>
        <NavBar />
        <CartWidget />
    </header>
  )
}