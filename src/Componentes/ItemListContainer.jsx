import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";


//Este componente se encarga de pedir productos a partir de la funcion pedirProductos() y manejar la logica para renderizar
//la aplicacion con todos los productos o con la categoria que capta de la URL a traves de useParam.
//Retorna el componente ItemList y pasa productos como Prop

export const ItemListContainer = () => {

  let { categoryId } = useParams();
  let [productos, setProductos] = useState([]);
  let [titulo, setTitulo] = useState("Productos");

  useEffect(() => {
    const autosRef = collection(db, "autos");
    const categoriasRef = collection(db, "categorias");

    let q;
    if (categoryId) {
      q = query(autosRef, where("marca", "==", categoryId));

    } else {
      q = autosRef;
    }

    getDocs(q).then((res) => {
      setProductos(
        res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
      setTitulo
    });
  }, [categoryId]);

  

  return (
    <div className="item-list-container">
      <h1 className="titulo-categoria">{titulo}</h1>
      <ItemList productos={productos} />
    </div>
  );
};
