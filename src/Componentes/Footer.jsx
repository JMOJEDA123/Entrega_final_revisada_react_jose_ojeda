
import React from 'react'
import imgFacebook from '../multimedia/logo_bitter_fondo_blanco.png' 

const Footer = () => {
  return (
    <footer className='footer'>      
                <div className="copyright">
                    <img src={imgFacebook} alt="Logo Bitter" className='logo-bitter'></img>
                    <h3>Copyright 2022</h3>
                    <h4>Todos los derechos sobre la marca, imagenes y contenidos estan protegidos. </h4>
                    <h4>All right Reserved</h4>
                </div>
        
                <div className="politica-cookies" >
                    <h5> Avisos de Privacidad</h5>
                    <h5> Politica de Cookies</h5>       
                    <h5> Aviso legal</h5>
                </div>

    </footer>
  )
}

export default Footer