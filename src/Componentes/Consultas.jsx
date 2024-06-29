import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";


//Este componente  capturar datos a traves de un formulario usando el hook useForm y enviandolos a la base de datos de Firebase
// (collection "consultas"  traves de la funcion addDoc().

export const Consultas = () => {
  const { register, handleSubmit } = useForm();
  let { itemId } = useParams();
  let [producto, setProducto] = useState(undefined);
	let [docId,setDocId] = useState("");

  const consulta = (data) => {
    const consulta = {
      datosConsulta: data,
      autoId: itemId,
    };

    const consultasref = collection(db, "consultas");
    addDoc(consultasref, consulta)
			.then((doc) => setDocId(doc.id));
  }

	// if(docId) {
	// 	return (
	// 		<>
	// 			<h1> Gracias por su interes en nuestro servicio!</h1>
	// 			<p> Hemos registrado tu consulta bajo el numero: {docId}</p>
	// 			<p>Pronto un representante de ventas respondera a tu consulta</p>
	// 		</>
	// 	)
	// }


	//Hook para llamar a la base de datos "autos" de acuerdo a Id que traiga useParams
  useEffect(() => {
    const docRef = doc(db, "autos", itemId);

    getDoc(docRef).then((res) => {
      setProducto({ ...res.data(), id: res.id });
    });
  }, [itemId]);


  return (
    producto && (
      <div className="consulta">
        <h1 className="main-title">Formulario de Consulta</h1>
        <h3 className="titulo-consulta">
          {" "}
          El auto consultado es:
          <span style={{ color: "#ff0303", fontSize: 18 }}>
            {" "}
            {producto.marca} {producto.modelo} {producto.agno}{" "}
          </span>{" "}
        </h3>
        <div className="currency-imagen" id="currency-imagen">
          <img src={producto.urlFoto} alt={producto.modelo}></img>
        </div>

        <form className="formulario" onSubmit={handleSubmit(consulta)}>
          <input
            type="text"
            placeholder="Ingresá tu nombre"
            {...register("nombre")}
          />
          <input
            type="email"
            placeholder="Ingresá tu e-mail"
            {...register("email")}
          />
          <input
            type="phone"
            placeholder="Ingresá tu teléfono"
            {...register("telefono")}
          />
          <input
            type="textArea"
            style={{ width: "500px", height: "80px" }}
            placeholder={`Por favor indicanos que te gustaria saber del auto 
									 ${producto.marca} 
									 ${producto.modelo} 
									 ${producto.agno}`}
            {...register("comentario")}
          />

          <button className="boton" type="submit">
            Consultar
          </button>
        </form>
      </div>
    )
  );
};
