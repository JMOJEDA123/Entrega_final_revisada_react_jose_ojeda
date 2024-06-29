
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";



//Este componenete recibe "productos" como Prop y se encarga de pintar el producto. Posee el boton "Ver Detalles" que crea
// el Link de referencia que establece la ruta <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
//Envia "producto" como Prop a Itemcount

export const Item = ({ producto }) => {

  const { carrito, setCarrito } = useContext(CartContext);

  const agregarAlCarrito = () => {

    const autoAgregado = producto;

    const autoEnWishList = carrito.find((auto) => auto.id === autoAgregado.id);

    if(autoEnWishList) {
      alert("Este Auto ya esta en tu Wish List!");
    } else {
      setCarrito( [...carrito, autoAgregado] )
  };
    }
    
    
  return (
    <div className="producto">
      <h2>
        {producto.marca} {producto.modelo} {producto.agno}
      </h2>

      <img className="imagen" src={producto.urlFoto} alt={producto.marca}></img>s

      <h2>{producto.condicion}</h2>

      <div>
        <p className="precio">USD {producto.precio}</p>
        <Link to={`/moneyConverter/${producto.id}`}>
          <p className="icono-cambio-moneda">💱 Cambio Moneda</p>
        </Link>
      </div>

      <div className="div-botones">
        <Link to={`/item/${producto.id}`}>
          <button className="boton">Ver Detalles</button>
        </Link>

        <Link to={`/consultas/${producto.id}`}>
          <button className="boton">Haz tu Consulta</button>
        </Link>
  

      </div>

      <a>
        <button className="boton-agregar" onClick={() => { agregarAlCarrito() }}>
          Agregar al Carrito
        </button>
      </a>
    </div>
  );
}