// import logo from './logo.svg';
import React from "react";
import "./App.css";
// import AxiosCRUDExample from "./components/pure/AxiosCRUDExample";
// import FetchExample from "./components/FetchExample";
// import AxiosExample from "./components/pure/AxiosExample";
// import AsyncExample from "./components/pure/AsyncExample";
// import ObservableExample from "./components/pure/ObservableExample";
// import RegisterFormik from "./components/pure/forms/registerFormik";
// import Greeting from './components/greeting';
// import GreetingF from './components/greetingF';
// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';
// import MiComponenteConContexto from './hooks/Ejemplo3';
// import Ejemplo4 from './hooks/Ejemplo4';
// import Greetingstyled from './components/pure/greetingStyled';
// import Father from './components/container/father';
import TaskListComponent from "./components/container/task_list";
import LoginFormik from "./components/pure/forms/loginFormik";
// import OptionalRender from "./components/pure/optionalRender";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* Componente propio Greeting.jsx */}
      {/* <Greeting name="Ariel"/> */}

      {/*Componente de ejemplo funcional */}
      {/* <GreetingF name="Ariel"/> */}

      {/*Componente de listado de tareas */}
      {/* <TaskListComponent /> */}

      {/* Ejemplos de uso de HOOKS */}
      {/* <Ejemplo1 /> */}
      {/* <Ejemplo2 /> */}

      {/* <MiComponenteConContexto /> */}

      {/* Todo lo que hay dentro, es tratado como props.children */}
      {/* <Ejemplo4 nombre='Ariel'>
          <h3>
            Contenido de props.children
          </h3>
        </Ejemplo4> */}
      {/* <Greetingstyled name="Ariel"/> */}
      {/* Gestión de eventos */}
      {/* <Father /> */}
      {/* </header> */}

      {/* Ejemplo de redenderizado condicional */}
      {/* <OptionalRender /> */}

      {/* Ejemplos de uso de Formik y Yup */}
      {/* <LoginFormik></LoginFormik> */}

      {/* Ejemplos de Procesos Asíncronos */}
      {/* <AsyncExample /> */}

      {/* Ejemplos de procesos asincronos */}
      {/* <ObservableExample /> */}
      {/* <FetchExample /> */}
      {/* <AxiosExample /> */}
      {/* <AxiosCRUDExample /> */}

      {/* PROYECTO FINAL */}
      <TaskListComponent />
      {/* <RegisterFormik /> */}
    </div>
  );
}

export default App;
