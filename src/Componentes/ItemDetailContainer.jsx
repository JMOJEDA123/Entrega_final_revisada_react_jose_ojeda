
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AutosDetalles } from './AutosDetalles';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';



//Este componente maneja la logica para seleccionar (find) el producto de data que coincida con el ItemId que recibe
//recibe por parametros de URL (useParam). Retorna el componente AutosDetalles y le envia producto encontrado como Prop

const ItemDetailContainer = () => {

    let { itemId } = useParams();
    let [producto, setProducto] = useState(undefined);


    useEffect(() => {

      const docRef = doc(db, "autos", itemId);

      getDoc(docRef)
      .then(res => {
        setProducto({ ...res.data(), id: res.id})
      });


    }, [itemId])
    

  return (
    <div className='item-detail-container'>
      {
      producto && <AutosDetalles auto={producto} />   
      }

    </div>
  )
  
}

export default ItemDetailContainer