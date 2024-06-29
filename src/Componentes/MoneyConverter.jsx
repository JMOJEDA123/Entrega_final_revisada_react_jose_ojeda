
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";


export const MoneyConverter = () => {

  const [data, setData] = useState(null);


  useEffect(() => {
    fetch(
      "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=926f1d71a5ce4af89da962e3cfacf424"
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => alert(error));
  }, []);
	

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
    producto && (data && (
      <div className="currency-contenedor">
        <div className="currency-tabla" id="currency-tabla">
          <h1 className="titulo-currency">
            {" "} {producto.marca} {producto.modelo} {producto.agno}{" "}
          </h1>
          <table className="table">
            <thead className="currency-head">
              <tr>
                <th scope="col"></th>
                <th scope="col">Pais</th>
                <th scope="col">Moneda</th>
                <th scope="col">Conversion</th>
                <th scope="col">Valor en Moneda Local</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <img
                    className="ars"
                    src="https://media.gettyimages.com/id/1398457995/es/vector/bandera-de-fondo-argentina.jpg?s=612x612&w=gi&k=20&c=PNZlTL5rXZLMNUlTZz-0F05k1wr8cZgyDpW5XLtTqAE="
                    alt=""
                  ></img>
                </th>
                <td>Argentina</td>
                <td>ARS</td>
                <td> {Math.round(data.rates.ARS).toLocaleString(
                    "en-US",
                    {
                      minimumFractionDigits: 0,
                    }
                  )}</td>
                <td>
                  {" "}
                  {Math.round(producto.precio * data.rates.ARS).toLocaleString(
                    "en-US",
                    {
                      minimumFractionDigits: 0,
                    }
                  )}
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <img
                    className="ars"
                    src="https://i.pinimg.com/564x/e5/93/c4/e593c4424346a2ec900c6296454f7119.jpg"
                    alt=""
                  ></img>
                </th>
                <td>Chile</td>
                <td>CLP</td>
                <td> {Math.round(data.rates.CLP).toLocaleString(
                    "en-US",
                    {
                      minimumFractionDigits: 0,
                    }
                  )}</td>
                <td>
                  {" "}
                  {Math.round(producto.precio * data.rates.CLP).toLocaleString(
                    "en-US",
                    {
                      minimumFractionDigits: 0,
                    }
                  )}
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <img
                    className="ars"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/1200px-Flag_of_Uruguay.svg.png"
                    alt=""
                  ></img>
                </th>
                <td>Uruguay</td>
                <td>UYI</td>
                <td> {Math.round(data.rates.UYU).toLocaleString(
                    "en-US",
                    {
                      minimumFractionDigits: 0,
                    }
                  )}</td>
                <td> {Math.round(producto.precio * data.rates.UYU)}</td>
              </tr>
              <tr>
                <th scope="row">
                  <img
                    className="ars"
                    src="https://img.freepik.com/fotos-premium/bandera-brasil-orden-tela-ondulada-progreso-dia-bandera-brasilena_146714-2141.jpg"
                    alt=""
                  ></img>
                </th>
                <td>Brasil</td>
                <td>BRL</td>
                <td> {Math.round(data.rates.BRL).toLocaleString(
                    "en-US",
                    {
                      minimumFractionDigits: 0,
                    }
                  )}</td>
                <td>
                  {" "}
                  {Math.round(producto.precio * data.rates.BRL).toLocaleString(
                    "en-US",
                    {
                      minimumFractionDigits: 0,
                    }
                  )}
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <img
                    className="ars"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Venezuela_%2810_Stars%29.svg/200px-Flag_of_Venezuela_%2810_Stars%29.svg.png"
                    alt=""
                  ></img>
                </th>
                <td>Venezuela</td>
                <td>VEF</td>
                <td>{Math.round(data.rates.VEF).toLocaleString(
                    "en-US",
                    {
                      minimumFractionDigits: 0,
                    }
                  )}</td>
                <td>
                  {" "}
                  {Math.round(producto.precio * data.rates.VEF).toLocaleString(
                    "en-US",
                    {
                      minimumFractionDigits: 0,
                    }
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="currency-imagen" id="currency-imagen">
          <img src={producto.urlFoto} alt={producto.modelo}></img>
          <p> Ultima actualizacion: {data.date} </p>
          <Link to="/">
            <div className="cerrar">❎</div>
          </Link>
        </div>
      </div>
    )) 
  );
};
