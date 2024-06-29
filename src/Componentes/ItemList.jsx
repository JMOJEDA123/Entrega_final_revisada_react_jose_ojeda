
import React from 'react'
import { Item } from './Item'


//Este componente recibe como prop "productos" y se encarga de la logica que mapear el array de productos y retorna el 
//componente Item y pasa "productos" como prop

export const ItemList = ( {productos} ) => {

  return (
    <div className="productos-grilla">
        {
          productos.length > 0 ?
          productos.map(producto => {
            return <Item key={producto.id} producto={producto} />
          })
          : <p>Cargando productos...</p>
        }
    </div>
  )
}