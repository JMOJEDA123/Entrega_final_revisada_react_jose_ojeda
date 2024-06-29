
import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';


//Este Componente se encarga de enviar al WishList el producto agregado a traves de la funcion handleAgregar

export const ItemCount = ({ producto }) => {


const { carrito, setCarrito } = useContext (CartContext);

const handleAgregar = () => {


}



  return (
    <div className='item-count'>

        <button className='boton-agregar' onClick={handleAgregar} >Agregar al Carrito</button>  

    </div>

  )
  
}
