import "./css/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./Componentes/header/Header";
import NotFound from "./Componentes/NotFound";
import { ItemListContainer } from "./Componentes/ItemListContainer"
import Footer from "./Componentes/Footer";
import Carrito from "./Componentes/Carrito";
import { CartProvider } from "./context/CartContext";
import { MoneyConverter } from "./Componentes/MoneyConverter";
import ItemDetailContainer from "./Componentes/ItemDetailContainer";
import { Consultas } from "./Componentes/Consultas";




function App() {

  return (
    <CartProvider>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/category/:categoryId" element={<ItemListContainer />}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
          <Route path="/moneyConverter/:itemId" element={<MoneyConverter />}/>
          <Route path="/carrito" element={<Carrito />}/> 
          <Route path="/consultas/:itemId" element={<Consultas />}/>                 
          <Route path="/*" element={<NotFound />}/>

        </Routes>
        <Footer />
      </BrowserRouter>

    </CartProvider>
  )
}

export default App
