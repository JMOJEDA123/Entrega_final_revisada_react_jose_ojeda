import { createContext, useEffect, useState } from "react"


export const CartContext = createContext();

const wishListInicial = JSON.parse(localStorage.getItem("carrito")) || [];


export const CartProvider = ({ children }) => {
  
  const [carrito, setCarrito] = useState([wishListInicial]);

  const cantidadEnWishList = () => {
    return carrito.reduce((acc, prod) => acc + 1, 0);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <CartContext.Provider value={{ carrito, setCarrito, vaciarCarrito, cantidadEnWishList }}>
      {children}
    </CartContext.Provider>
  );
};
