
import React from 'react';
import { Link } from 'react-router-dom';


//Este componente se encarga de pintar los detalles del producto que recibe como prop

export const AutosDetalles = ( { auto } ) => {

  
  return (

    <div className='detalle-contenedor'>
        <div className='tabla-caracteristicas'>

            <h1>{auto.marca}   {auto.modelo}  {auto.agno}</h1>

            <h3 className="titulo-caracteristica"> Color </h3>
            <h3 className="valor-caracteristica">{auto.color}</h3>

            <h3 className="titulo-caracteristica">Puertas</h3>
            <h3 className="valor-caracteristica">{auto.puertas}</h3>

            <h3 className="titulo-caracteristica">Motor</h3>
            <h3 className="valor-caracteristica">{auto.motor}</h3>

            <h3 className="titulo-caracteristica">Transmision</h3>
            <h3 className="valor-caracteristica">{auto.transmision}</h3>

            <h3 className="titulo-caracteristica">Tipo Combustible</h3>
            <h3 className="valor-caracteristica">{auto.tipoCombustible}</h3>

            <h3 className="titulo-caracteristica">Kilometros</h3>
            <h3 className="valor-caracteristica">{auto.kilometros}</h3>
        </div>

        <div className="tabla-imagen" >
            <img src={auto.urlFoto} alt="{auto.modelo}" ></img>
            <Link to="/"><div className='cerrar'>❎</div></Link>
        </div>
        
    </div>
  ) 
}