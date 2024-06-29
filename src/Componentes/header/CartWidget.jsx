import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


export const CartWidget = () => {
  const { cantidadEnWishList, vaciarCarrito } = useContext(CartContext);

  return (
    <div className="cart-widget">
            <Link to="/carrito" className="carrito">
        <p className="boton" onClick={vaciarCarrito}>
          🗑️
        </p>
      </Link>
      <Link to="/carrito" className="carrito">
        Wish List ❤️ {cantidadEnWishList()}
      </Link>

    </div>
  );
};
