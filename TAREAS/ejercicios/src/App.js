import logo from './logo.svg';
import './App.css';
import ComponentA from './components/componentA';
import ClassFunctional from './components/classFunctional';

function App() {

  const contact = {
    nombre: "Ariel",
    apellido: "Fuentes",
    email: "ariel@gmail.com",
    conectado: false
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <ComponentA contact = {contact}/> */}
        <ClassFunctional />
      </header>
    </div>
  );
}

export default App;
