
import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const Carrito = () => {
  const { carrito } = useContext(CartContext);

  return (
    carrito && <div className="item-detail-container">
      <div className="productos-grilla">
        {carrito.map((prod) => {
          return (
            <div className="producto" key={prod.id}>
              <h2>
                {prod.marca} 
                {prod.modelo} 
                {prod.agno}
              </h2>
              <img className="imagen" src={prod.urlFoto} alt={prod.marca}></img>
              <h2 className="condicion">{prod.condicion}</h2>
              <div>
                <p className="precio">USD {prod.precio}</p>
                <Link to={`/moneyConverter/${prod.id}`}>
                  <p class="icono-cambio-moneda">💱 Cambio Moneda</p>
                </Link>
              </div>
              <div className="div-botones">
                <Link to={`/item/${prod.id}`}>
                  <button className="boton">Ver Detalles</button>
                </Link>

                <Link to={`/consultas/${prod.id}`}>
                  <button className="boton">Haz tu Consulta</button>
                </Link>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carrito;
