//COMPONENTE PRINCIPAL DE LA APLICACION
import './App.css';
import Testimonio from "./componentes/Testimonio";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Muebles Bellago - Testimonios</h1>
        <Testimonio
          nombre="Dorian Gonzalez"
          pais="Venezuela"
          imagen="dorian"
          cargo="Desarrollador"
          empresa="Mueble Bellagio"
          testimonio="lorem ssssssssssssssssssss ssssssssssssssssssssssss sssssssssssssssssssssssssssssssss ssssssssssssssssssssssss s"
        />
        <Testimonio
          nombre="Jeannette Santander"
          pais="Venezuela"
          imagen="dorian2"
          cargo="Ama de Casa"
          empresa="Mi casa"
          testimonio="losssssssssssssssssssssssssssrem ssssssssssssssssssss ssssssssssssssssssssssssssssssssssssssssssssssss sssssssssssssssssssssssssssssssss ssssssssssssssssssssssss s"
        />
        <Testimonio
          nombre="Reynaldo Gonzalez"
          pais="Colombia"
          imagen="dorian3"
          cargo="Ingeniero"
          empresa="Google"
          testimonio="losssssssssssssssssssssssssssrem ssssssssssssssssssss ssssssssssssssssssssssssssssssssssssssssssssssss sssssssssssssssssssssssssssssssss ssssssssssssssssssssssss s"
        />
      </div>
    </div>
  );
}

export default App;
{/* {} <></> */}