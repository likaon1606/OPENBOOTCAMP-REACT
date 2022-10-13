import React, { useState } from "react";

// Definiendo estilos en constantes:
//? si el usuario está logeado se usará este estilo
const loggedStyle = {
  color: "white",
};

// ? Si no está logeado, se usará este estilo
const unloggedStyle = {
  color: "tomato",
  fontWeight: "bold",
};

const Greetingstyled = (props) => {
  // Generamos un estado para el componente
  // y así controlar si el usuario está o no logeado
  const [logged, setLogged] = useState(false);

  const greetingUser = () => <p>Hola, {props.name}</p>;
  const pleaseLogin = () => <p>Please, Login</p>;

  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
      {logged ? greetingUser() : pleaseLogin()}
      <button
        onClick={() => {
          console.log("botón pulsado");
          setLogged(!logged);
        }}
      >
        {logged ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Greetingstyled;
