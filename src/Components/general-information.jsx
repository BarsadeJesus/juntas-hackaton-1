import React, { useState } from "react";
import "../Style/Sass/style.css";
import { Link } from "react-router-dom";
import Header from "./header";

const GeneralInformation = () => {
  const [typeDocument, setTypeDocument] = useState("");
  const [numberDocument, setNumberDocument] = useState("");
  const [headingCommerc, setHeadingCommerc] = useState("");

  const numberDoc = e => {
    setNumberDocument(e.target.value);
    // console.log(numberDocument);
  };

  const typeDoc = e => {
    setTypeDocument(e.target.value);
    // console.log(typeDocument)
  };

  const headingDoc = e => {
    setHeadingCommerc(e.target.value);
    //  console.log(headingCommerc)
  };



  const [msgError, setMsjError] = useState('');

  const testForm = (event) => {
    let msgError = "";
    if (!numberDocument) {
      msgError = 'Debe ingresar su Número de Documento';
    }
    else if (!typeDocument) {
      msgError = 'Seleccione un Tipo de Documento';
    }
    else if (typeDocument === "dni") {
      if (typeof numberDocument !== "number" && numberDocument.length !== 8) {
        msgError = 'Número de Documento Incorrecto';
      }
    } else if (typeDocument === "pasaporte" || typeDocument === "ce") {
      if (typeof numberDocument !== "number" && numberDocument.length !== 9) {
        msgError = 'Número de Documento Incorrecto';
      }
    }
    if (msgError) {
      event.preventDefault();
      setMsjError(msgError)
    }

  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="img-fluid"
          src="https://i.imgur.com/J8hfANO.png"
          alt="imagen"
        />
        <form >
          <table className="font margintable table-responsive-sm table-responsive-md">
            <tbody>
              <tr>
                <td>
                  Tipo de Documento:
              </td>
                <td>
                  <select className="input" onChange={typeDoc}>
                    <option value="">Selecciona</option>
                    <option value="dni">DNI</option>
                    <option value="pasaporte">Pasaporte</option>
                    <option value="ce">C.E</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Numero de Documento:
              </td>
                <td>
                  <input
                    className="input"
                    type="text"
                    onChange={numberDoc}
                    value={numberDocument}
                  />
                </td>
              </tr>
              <tr>
                <td>Rubro de Comercio:
              </td>
                <td>
                  <select className="input" onChange={headingDoc}>
                    <option value="servicios">Servicios</option>
                    <option value="comercio">Comercio</option>
                    <option value="manufactura">Manufactura</option>
                    <option value="agropecuaria">Agropecuario</option>
                    <option value="otros">Otros</option>
                  </select>
                  <img
                    src="https://img.icons8.com/metro/26/000000/question-shield.png"
                    alt="imagen"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <small className="error">{msgError}</small>
        </form>



        <Link
          to={{
            pathname: "/mainloan",
            state: {
              typeDoc: typeDocument,
              numberDoc: numberDocument,
              headingDoc: headingCommerc
            }
          }}
          className="btn-pink-link ml-1000"
          onClick={event => {
            testForm(event);
          }}
        >
          CONTINUAR
        </Link>
      </div>
    </div>
  );
};

export default GeneralInformation;
