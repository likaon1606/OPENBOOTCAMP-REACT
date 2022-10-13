import React from "react";
import ReactDOM from 'react-dom';

// Añadimos bootstrap a nuestro proyecto
// ! Importante: Debe estar encima del css o pisara los estilos
import "bootstrap/dist/css/bootstrap.css";
// Importamos los iconos de bootstrap
import "bootstrap-icons/font/bootstrap-icons.css";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import AppRoutingOne from "./AppRoutingOne";
// import AppRoutingFinal from "./AppRoutingFinal";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <AppRoutingOne /> */}
    {/* <AppRoutingFinal /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
